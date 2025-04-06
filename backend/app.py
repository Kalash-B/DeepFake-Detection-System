import os
import numpy as np
import tensorflow as tf
import cv2
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename
from PIL import Image
from config import SECRET_KEY, JWT_SECRET_KEY
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from models import create_table
from routes import register_routes

app = Flask(__name__)
app.config["SECRET_KEY"] = SECRET_KEY
app.config["JWT_SECRET_KEY"] = JWT_SECRET_KEY

bcrypt = Bcrypt(app)
jwt = JWTManager(app)
CORS(app)

UPLOAD_FOLDER = "uploads"
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "webp", "mp4", "avi", "mov"}
MODEL_PATH = "./model/deepfake_model.h5"

# Load the trained deepfake detection model
model = tf.keras.models.load_model(MODEL_PATH)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

frontend_folder = os.path.join(os.getcwd(),"..","frontend")
dist_folder = os.path.join(frontend_folder,"dist")

@app.route("/", defaults={"filename": ""})
@app.route("/<path:filename>")
def index(filename):
    if not filename:
        filename = "index.html"
    return send_from_directory(dist_folder, filename)

# Ensure upload folder exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

REAL_FOLDER = os.path.join(UPLOAD_FOLDER, "real")
FAKE_FOLDER = os.path.join(UPLOAD_FOLDER, "fake")
os.makedirs(REAL_FOLDER, exist_ok=True)
os.makedirs(FAKE_FOLDER, exist_ok=True)

# Function to check allowed file types
def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

# Function to preprocess the image for model input
def preprocess_image(image_path):
    img = Image.open(image_path).convert("RGB")
    img = img.resize((128, 128))  # Resize to match model input size
    img_array = np.array(img) / 255.0  # Normalize
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    return img_array

# Function to extract frames from a video
def extract_frames(video_path, frame_interval=10):
    frames = []
    cap = cv2.VideoCapture(video_path)
    frame_count = 0

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        
        if frame_count % frame_interval == 0:
            frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            frames.append(frame_rgb)
        
        frame_count += 1
    
    cap.release()
    return frames

# Route for uploading and processing images
@app.route("/upload", methods=["POST"])
def upload_image():
    if "file" not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files["file"]

    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        temp_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
        file.save(temp_path)

        # Preprocess the image and make prediction
        img_array = preprocess_image(temp_path)
        prediction = model.predict(img_array)[0][0]

        # Determine result
        result = "Fake" if prediction > 0.5 else "Real"
        confidence = round(float(prediction) * 100, 2) if result == "Fake" else round((1 - float(prediction)) * 100, 2)

        # Define the final save location
        if result == "Fake":
            final_path = os.path.join(FAKE_FOLDER, filename)
        else:
            final_path = os.path.join(REAL_FOLDER, filename)

        # Move the file to the respective folder
        os.rename(temp_path, final_path)

        return jsonify({"prediction": result, "confidence": confidence, "filename": filename, "saved_path": final_path})

    return jsonify({"error": "Invalid file format"}), 400

# Route for uploading and processing videos
@app.route("/upload_video", methods=["POST"])
def upload_video():
    if "file" not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files["file"]

    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        temp_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
        file.save(temp_path)

        # Extract frames from the video and predict deepfake probability
        frames = extract_frames(temp_path, frame_interval=10)
        predictions = []
        
        for frame in frames:
            img = Image.fromarray(frame).resize((128, 128))
            img_array = np.array(img) / 255.0
            img_array = np.expand_dims(img_array, axis=0)
            prediction = model.predict(img_array)[0][0]
            predictions.append(prediction)

        # Calculate average prediction score
        avg_prediction = np.mean(predictions)
        result = "Fake" if avg_prediction > 0.5 else "Real"
        confidence = round(float(avg_prediction) * 100, 2) if result == "Fake" else round((1 - float(avg_prediction)) * 100, 2)

        # Move the file to the correct folder based on prediction
        if result == "Fake":
            final_path = os.path.join(FAKE_FOLDER, filename)
        else:
            final_path = os.path.join(REAL_FOLDER, filename)

        os.rename(temp_path, final_path)  # Move video to respective folder

        return jsonify({"prediction": result, "confidence": confidence, "filename": filename, "saved_path": final_path})

    return jsonify({"error": "Invalid file format"}), 400

create_table()

# Register routes
register_routes(app)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
