import React, { useState } from 'react';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navi=useNavigate()
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5077/api/signup', formData);

      if (response.status === 201) {
        alert('Signup successful!');
        navi('/')
        
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || 'Signup failed');
      } else {
        alert('Server is not responding');
      }
    }
  };

  return (
    <div className="min-h-screen bg-red-300 flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm p-6 sm:p-8 rounded shadow-lg bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">NAME</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-10 bg-gray-300 px-3 rounded outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">MAIL ID</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-10 bg-gray-300 px-3 rounded outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">PASSWORD</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full h-10 bg-gray-300 px-3 rounded outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <label className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 cursor-pointer">
            Upload photo
            <input type="file" hidden />
          </label>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Sign up
          </button>
        </div>

        <div className="text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
