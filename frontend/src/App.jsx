import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
<<<<<<< HEAD
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "../pages/Home";
import ContactUs from "../pages/contactUs";
=======
import Home from "./pages/Home";
import Navbar from './components/Navbar'
>>>>>>> f73503d134c544eb9e3f6d1775304b0b14852125

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<ContactUs />}/>
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
