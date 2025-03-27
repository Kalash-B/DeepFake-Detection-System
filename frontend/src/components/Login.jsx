import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(""); // Clear previous errors
  
    try {
      const response = await fetch(`http://localhost:5000/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }
  
      // Store token in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
  
      // Dispatch event to update Navbar
      window.dispatchEvent(new Event("authChange"));
  
      // Redirect user
      navigate("/home");
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-3">
          Don't have an account?{" "}
          <span className="text-blue-500 cursor-pointer" onClick={() => navigate("/register")}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
