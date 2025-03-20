import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row md:space-x-8 mb-4 md:mb-0">
          <div className="flex flex-col space-y-2">
            <a href="/home" className="hover:underline">Home</a>
            <a href="/" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Detection</a>
            <a href="/contact" className="hover:underline">Contact Us</a>
          </div>
          <div className="flex flex-col space-y-2">
            <span>India</span>
            <span>Pimpri Chinchwad College Of Engineering & Research, Ravet - 35</span>
            <span>Phone no.: 9762205213</span>
            <span>Email: abc@pccoer.in</span>
          </div>
        </div>
        <div className="flex flex-col space-y-2 mb-4 md:mb-0">
          <a href="#" className="hover:underline">Terms of Services</a>
          <a href="#" className="hover:underline">Your Terms & Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Your Privacy Policy</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-youtube"></i></a>
          <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="text-center mt-4">
        <span>© 2025 DeepFake. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
