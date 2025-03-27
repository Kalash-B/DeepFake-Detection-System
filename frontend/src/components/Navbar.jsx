import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Update auth status on login/logout
    const updateAuthStatus = () => setIsLoggedIn(!!localStorage.getItem("token"));
    window.addEventListener("authChange", updateAuthStatus);

    // Detect scrolling to apply background blur
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("authChange", updateAuthStatus);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("authChange"));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 p-4 shadow-lg transition-all duration-300 ${
        isScrolled
          ? "bg-indigo-900/60 backdrop-blur-lg"  // Blurred transparent when scrolling
          : "bg-indigo-900"  // Solid color at the top
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-white">DeepFake</div>
        <nav className="space-x-5">
          <a href="/home" className="text-white hover:text-gray-300 transition">Home</a>
          <a href="/aboutus" className="text-white hover:text-gray-300 transition">About Us</a>
          <a href="/detect" className="text-white hover:text-gray-300 transition">Detect</a>
          <a href="/news" className="text-white hover:text-gray-300 transition">News</a>
          <a href="/contact" className="text-white hover:text-gray-300 transition">Contact</a>
        </nav>
        <div className="space-x-3">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <a className="bg-white text-indigo-900 px-6 py-2 rounded hover:bg-gray-200 transition" href="/login">
                Login
              </a>
              <a className="bg-white text-indigo-900 px-6 py-2 rounded hover:bg-gray-200 transition" href="/register">
                Register
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
