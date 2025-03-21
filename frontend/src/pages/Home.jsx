import React from "react";
import HeroSection from "../components/HeroSection"
import AboutUs from "../components/AboutUs"
import DeepFakeFinder from "./components/detect"


const Home = () => {
  return (
    <>
    
      <HeroSection />
      <AboutUs />
      <DeepFakeFinder />
    </>
  );
};

export default Home;
