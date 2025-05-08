import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

const CandidateForm = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-300 to-purple-300">
      
      <div className="text-center my-10">
        <h1 className="text-4xl font-extrabold text-red-600 drop-shadow-md">
          Candidate Form
        </h1>
      </div>
    
      
      <div className="flex flex-col md:flex-row justify-center items-start gap-16 px-8">
        <div className="space-y-6 w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
         
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              className="w-full p-3 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="photo">
              Photo URL
            </label>
            <input
              type="text"
              id="photo"
              placeholder="Enter photo URL"
              className="w-full p-3 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="aadhar">
              Aadhar Number
            </label>
            <input
              type="text"
              id="aadhar"
              placeholder="Enter Aadhar number"
              className="w-full p-3 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        
        <div className="flex flex-col items-end space-y-10 absolute top-8 right-8">
          <button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-2 rounded-full font-bold shadow-md hover:scale-105 transition-transform"
          >
            Home
          </button>

          <div className="mt-20">
            <button
              onClick={() => navigate("/voters")}
              className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-2 rounded-full font-bold shadow-md hover:scale-105 transition-transform"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateForm;
