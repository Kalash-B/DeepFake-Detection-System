import React from "react";
import HeroSection from "../components/HeroSection"
import AboutUs from "../components/AboutUs"
import DeepFakeFinder from "../components/detect"


const Home = () => {
  return (
    <div className="bg-gray-900 text-white">
    
      <HeroSection />
      <AboutUs />
      <DeepFakeFinder />
    </div>
  );
};

export default Home;
