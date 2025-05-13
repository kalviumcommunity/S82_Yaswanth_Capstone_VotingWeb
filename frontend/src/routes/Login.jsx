import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="min-h-screen bg-red-300 flex items-center justify-center px-4">
      <div className="w-full max-w-sm  p-6 sm:p-8 rounded shadow-lg bg-white">
        
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">E-mail</label>
          <input
            type="text"
            className="w-full h-10 bg-gray-300 px-3 rounded outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Enter username"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">PASSWORD</label>
          <input
            type="password"
            className="w-full h-10 bg-gray-300 px-3 rounded outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Enter password"
          />
        </div>

        <div className="text-right text-sm mb-4">
          <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
        </div>

        <button className="bg-black text-white w-full h-10 rounded hover:bg-gray-800 transition">
          Login
        </button>

        <div className="text-center text-sm mt-4">
          Don’t have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
