import tensorflow as tf
import numpy as np
import cv2

# Load the trained model
model = tf.keras.models.load_model("./model/deepfake_model.h5")  # Change path if needed

# Set image size (same as training)
IMG_SIZE = (128, 128)

def predict_image(image_path):
    """
    Load an image, preprocess it, and make a prediction.
    """
    # Read image using OpenCV
    img = cv2.imread(image_path)
    img = cv2.resize(img, IMG_SIZE)  # Resize to match model input
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)  # Convert BGR to RGB
    img = img / 255.0  # Normalize pixel values (0-1)
    
    # Expand dimensions to match model input shape (batch_size, 128, 128, 3)
    img = np.expand_dims(img, axis=0)

    # Make prediction
    prediction = model.predict(img)[0][0]  # Get the first value

    # Classify as 'Real' or 'Fake' based on threshold
    return "Fake" if prediction > 0.5 else "Real"


# Provide the path of the image to test
image_path = "./images/116_328.jpg"  # Replace with the actual image path

# Get the prediction
result = predict_image(image_path)

print(f"Prediction: {result}")
