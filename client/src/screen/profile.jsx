import React from "react";
import PodCards from "./podCards";

function Profile() {
  const userData = {
    profileImage: "https://via.placeholder.com/150", 
    name: "Mayank Kumar",
    email: "mail.mayank001@gmail.com",
    totalViews: 1234,
    totalLikes: 567,
  };

  return (
    <div className="p-4 bg-gray-800 min-h-screen text-white">
      <div>
        <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
        <div className="flex flex-col items-center bg-gray-900 rounded-xl p-6">
          <img
            src={userData.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-700"
          />
          <h1 className="text-2xl font-bold mb-1">{userData.name}</h1>
          <p className="text-gray-400 mb-2">{userData.email}</p>
          <div className="flex justify-center gap-6 mt-2">
            <div className="text-center">
              <p className="text-2xl font-bold">{userData.totalViews}</p>
              <p className="text-sm text-gray-400">Total Views</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{userData.totalLikes}</p>
              <p className="text-sm text-gray-400">Total Likes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Favorite Podcasts</h2>
        <div className="grid rounded-xl bg-gray-900 items-center p-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <PodCards />
          <PodCards />
          <PodCards />
          <PodCards />
          <PodCards />
        </div>
      </div>
    </div>
  );
}

export default Profile;
