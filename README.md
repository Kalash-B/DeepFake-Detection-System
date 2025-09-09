# 🧠 Deepfake Detection System (Full Stack)

A complete Deepfake Detection web application using **Flask** (Python backend) and **React + Vite** (frontend). This system allows users to upload an image and get real-time predictions on whether the image is **Real** or **Deepfake**.

---

## 🚀 Tech Stack

### 🧾 Backend
- Python 3
- Flask
- TensorFlow / Keras
- NumPy, OpenCV

### 💻 Frontend
- React.js (Vite)
- Tailwind CSS / CSS Modules
- Axios for API calls

---

## 🗂️ Project Structure
```bash
deepfake-detection-system/
├── backend/
│ ├── model/ # Model training and saved models
│ │ ├── DeepfakeDetection.ipynb
│ │ ├── deepfake_model.h5
│ ├── venv/ # Virtual environment
│ ├── app.py # Flask entry point
│ ├── config.py, db.py, routes.py, models.py
│ ├── test.py # Testing API
│ └── requirements.txt
├── frontend/
│ ├── public/ # Static files
│ └── src/
│ ├── assets/ # Images, logos, etc.
│ ├── components/ # Reusable UI components
│ ├── pages/ # Main pages
│ ├── App.jsx, main.jsx
│ ├── index.html
│ ├── vite.config.js
├── .gitignore
└── README.md
```

---

## 🧠 How It Works

1. **User uploads an image** via the frontend.
2. The image is sent to the **Flask backend API**.
3. The backend loads a pre-trained **CNN model** (`.h5` file).
4. The model processes the image and returns **Real or Deepfake**.
5. The frontend displays the result to the user.

---

## 🛠️ Setup Instructions

### ✅ Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Linux
pip install -r requirements.txt
python app.py
```
Make sure your .h5 model is placed correctly inside the model/ directory.

✅ Frontend Setup
```bash
Copy
Edit
cd frontend
npm install
npm run dev
🔗 API Endpoint
Method	Endpoint	Description
POST	/predict	Accepts image and returns prediction
```
🧪 Sample Prediction Code (Flask Backend)
```bash
@app.route('/predict', methods=['POST'])
def predict():
    file = request.files['file']
    img = Image.open(file.stream).resize((128, 128))
    img_array = np.array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    prediction = model.predict(img_array)[0][0]
    result = "Deepfake" if prediction > 0.5 else "Real"
    return jsonify({"prediction": result})
``` 
🎯 Future Enhancements
- Use Transfer Learning (MobileNet, EfficientNet)
- Host on Render/Vercel
- Add user login and history tracking
- Integrate with news/media verification
- 📄 License : This project is licensed under the MIT License.

---

🙋‍♂️ Author

- Kalash Baldota
- Shreya Patil

🧑‍💻 IT Engineering Student @ PCCOER



