import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

const CreatePoll = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-300 to-purple-300">


      
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <h1 className="text-5xl font-extrabold text-red-600 text-center mb-10 drop-shadow-md">
          Create New Poll
        </h1>

        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-6">
            <label htmlFor="pollName" className="block text-gray-700 font-semibold mb-2">
              Poll Name
            </label>
            <input
              type="text"
              id="pollName"
              placeholder="Enter poll name"
              className="w-full p-3 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="adminName" className="block text-gray-700 font-semibold mb-2">
              Admin Name
            </label>
            <input
              type="text"
              id="adminName"
              placeholder="Enter admin name"
              className="w-full p-3 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => navigate("/candidateform")}
              className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-5 py-2 rounded-full font-bold shadow-md hover:scale-105 transition-transform"
            >
              Select Candidate
            </button>
            <button
              onClick={() => navigate("/voters")}
              className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-5 py-2 rounded-full font-bold shadow-md hover:scale-105 transition-transform"
            >
              Select Voters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePoll;
