import React from "react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-500 to-teal-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Notes</h1>
      <p className="text-lg mb-6">This is your Notes where you can see your study notes.</p>
      <Link to="/" className="px-6 py-3 bg-white text-green-700 rounded-full shadow-md hover:bg-gray-200 transition">
        🔙 Back to Voice Command
      </Link>
    </div>
  );
};

export default ProfilePage;
