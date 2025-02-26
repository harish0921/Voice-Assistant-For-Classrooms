import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Presentation</h1>
      <p className="text-lg mb-6">Welcome to the presentations of your voice assistant app.</p>
      <Link to="/" className="px-6 py-3 bg-white text-indigo-700 rounded-full shadow-md hover:bg-gray-200 transition">
        🔙 Back to Voice Command
      </Link>
    </div>
  );
};

export default HomePage;
