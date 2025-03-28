import React from "react";
import HeroSection from "../components/HeroSection"
import AboutUs from "../components/AboutUs"
import DeepFakeFinder from "../components/DeepFakeFinder"
import NewsComponent from "../components/NewsComponent"

const Home = () => {
  return (
    <div className="text-white">
    
      <HeroSection />
      <DeepFakeFinder />
      <AboutUs />
      <NewsComponent />
    </div>
  );
};

export default Home;
