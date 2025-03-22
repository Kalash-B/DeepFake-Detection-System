import React from "react";

const Navbar = () => {
  return (
    <header className="bg-indigo-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-white">DeepFake</div>
        <nav className="space-x-5">
          <a href="/home" className="text-white">Home</a>
          <a href="/aboutus" className="text-white">About Us</a>
          <a href="/detect" className="text-white">Detect</a>
          <a href="/news" className="text-white">News</a>
          <a href="/contact" className="text-white">Contact</a>
        </nav>
        <div className="space-x-2">
          <a className="bg-white text-indigo-900 px-6 py-2 rounded" href="/login">Login</a>
          <a className="bg-white text-indigo-900 px-6 py-2 rounded" href="/register">Register</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
