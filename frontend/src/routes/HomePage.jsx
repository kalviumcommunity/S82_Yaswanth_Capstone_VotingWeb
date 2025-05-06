import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-300 via-40% to-purple-300 text-gray-900 font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-xl px-6 py-4">
        <div className="flex items-center space-x-6">
          {/* Hamburger Menu */}
          <div className="space-y-1 cursor-pointer hover:opacity-80 transition">
            <div className="w-6 h-0.5 bg-white rounded" />
            <div className="w-6 h-0.5 bg-white rounded" />
            <div className="w-6 h-0.5 bg-white rounded" />
          </div>

          {/* Profile Section */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-br from-pink-300 to-red-400 border-2 border-white rounded-full shadow-lg" />
            <span className="text-lg font-semibold hover:underline transition-all duration-200">Profile</span>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="space-x-4">
          <button className="text-lg font-medium hover:text-yellow-300 transition">Signup</button>
          <button className="text-lg font-medium hover:text-yellow-300 transition">Login</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center text-center px-6 py-24 md:py-40">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">
          Welcome to VotingWeb
          
        </h1>
        <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-lg font-semibold px-12 py-4 rounded-full shadow-xl hover:scale-105 hover:from-orange-600 hover:to-red-700 transition-all duration-300">
          Create Poll
        </button>
      </main>
    </div>
  );
}
