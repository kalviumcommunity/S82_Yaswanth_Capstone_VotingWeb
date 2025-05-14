import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const userEmail = localStorage.getItem('userEmail');
      if (!userEmail) {
        console.error('User not logged in.');
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/user', {
          params: { email: userEmail },
        });

        if (response.data && response.data.name && response.data.email) {
          setProfile(response.data);
        } else {
          throw new Error('Incomplete profile data.');
        }
      } catch (err) {
        console.error('Error fetching profile:', err.message);
        setError('Failed to load profile. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleEdit = () => {
    navigate('/edit-profile');
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      alert('Account deleted (simulate)');
      localStorage.removeItem('userEmail'); // Optional: Clear session
      navigate('/');
    }
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-300 to-purple-300 flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-white text-lg font-semibold">Profile</h1>
        <button
          onClick={handleHome}
          className="text-white font-medium hover:underline"
        >
          HOME
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center mt-12">
        <div className="w-40 h-40 rounded-full bg-gray-300 mb-6 border-4 border-white shadow-md"></div>

        {loading ? (
          <p className="text-xl text-gray-700">Loading...</p>
        ) : error ? (
          <p className="text-xl text-red-600">{error}</p>
        ) : (
          <>
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Name: {profile.name}
            </h2>
            <p className="mt-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Email: {profile.email}
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <button
                onClick={handleEdit}
                className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-orange-400 to-red-500 shadow-lg hover:scale-105 transition-transform"
              >
                Edit Profile
              </button>

              <button
                onClick={handleDelete}
                className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-red-600 to-red-800 shadow-lg hover:scale-105 transition-transform"
              >
                Delete Account
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;