import React , { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Contact from "./components/ContactUs";
import Footer from "./components/Footer";
import DeepFakeFinder from "./components/DeepFakeFinder";
import NewsComponent from "./components/NewsComponent";

const App = () => {
  const [isLoggrdin, setIsLoggrdin] = useState(localStorage.getItem("token"));
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={isLoggrdin ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detect" element={<DeepFakeFinder />} />
          <Route path="/news" element={<NewsComponent />} />
        </Routes>
      </Router>
      <Footer />

    </>
  );
};

export default App;
