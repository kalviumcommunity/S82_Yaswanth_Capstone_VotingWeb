import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="min-h-screen bg-red-300 flex items-center justify-center px-4">
      <div className="w-full max-w-sm  p-6 sm:p-8 rounded shadow-lg bg-white">
        
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">NAME</label>
          <input
            type="text"
            className="w-full h-10 bg-gray-300 px-3 rounded outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">MAIL ID</label>
          <input
            type="email"
            className="w-full h-10 bg-gray-300 px-3 rounded outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">PASSWORD</label>
          <input
            type="password"
            className="w-full h-10 bg-gray-300 px-3 rounded outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            Upload photo
          </button>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            Sign in
          </button>
        </div>

        <div className="text-center text-sm">
          Already have account? <Link to="/login" className="text-blue-600 hover:underline">Login?</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
