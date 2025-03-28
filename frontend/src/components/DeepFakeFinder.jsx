import React, { useState, useCallback } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";

const DeepFakeFinder = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState("");
  const [confidence, setConfidence] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token"));
  const [fileType, setFileType] = useState(null); // Track if it's an image or video

  // Drag and drop handler
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setSelectedFile(file);
      setFileType(file.type.startsWith("image") ? "image" : "video"); // Identify file type
      setPreview(URL.createObjectURL(file));
      setPrediction("");
      setConfidence(null);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/webp": [".webp"],
      "video/mp4": [".mp4"],
      "video/avi": [".avi"],
      "video/mov": [".mov"],
    },
    multiple: false,
  });

  // Upload & Predict function
  const handleUpload = async () => {
    if (!isLoggedIn) {
      setUploadStatus("⚠ Please login first.");
      return;
    }

    if (!selectedFile) {
      setUploadStatus("⚠ Please select an image or video.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    setLoading(true);
    setUploadStatus("");

    try {
      const endpoint = fileType === "video" ? "/upload_video" : "/upload"; // Choose API endpoint
      const response = await axios.post(`http://localhost:5000${endpoint}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setUploadStatus("✅ Upload successful!");
      setPrediction(response.data.prediction);
      setConfidence(response.data.confidence);
    } catch (error) {
      setUploadStatus("❌ Upload failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen w-full">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg w-1/2">
        <h1 className="text-gray-900 text-3xl font-semibold mb-6">DeepFake Detector</h1>

        {/* Drag & Drop Zone */}
        <div
          {...getRootProps()}
          className="border-dashed border-2 border-gray-400 rounded-lg p-6 mb-4 cursor-pointer bg-gray-100 hover:bg-gray-200"
        >
          <input {...getInputProps()} />
          <p className="text-gray-700">Drag & Drop an image/video here, or click to select</p>
        </div>

        {/* Preview for Image/Video */}
        {preview && fileType === "image" && (
          <motion.img
            src={preview}
            alt="Selected"
            className="rounded-lg mx-auto mb-4 h-48 object-cover shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}

        {preview && fileType === "video" && (
          <video
            src={preview}
            className="rounded-lg mx-auto mb-4 h-48 shadow-md"
            controls
          />
        )}

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload & Analyze"}
        </button>

        {/* Upload Status */}
        <p className="mt-4 text-gray-700">{uploadStatus}</p>

        {/* Prediction Result */}
        {prediction && (
          <motion.p
            className={`mt-4 text-xl font-bold ${
              prediction === "Fake" ? "text-red-600" : "text-green-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Prediction: {prediction} {confidence !== null && `(${confidence}%)`}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default DeepFakeFinder;
