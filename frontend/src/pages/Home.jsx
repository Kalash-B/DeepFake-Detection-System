import React from "react";
import HeroSection from "../components/HeroSection"
import AboutUs from "../components/AboutUs"
import DeepFakeFinder from "../components/detect"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="text-white">
    
      <HeroSection />
      <AboutUs />
      <DeepFakeFinder />
      <Footer />
    </div>
  );
};

export default Home;
