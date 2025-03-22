import React from "react";
import HeroSection from "../components/HeroSection"
import AboutUs from "../components/AboutUs"
import DeepFakeFinder from "../components/DeepFakeFinder"

const Home = () => {
  return (
    <div className="text-white">
    
      <HeroSection />
      <AboutUs />
      <DeepFakeFinder />
    </div>
  );
};

export default Home;
