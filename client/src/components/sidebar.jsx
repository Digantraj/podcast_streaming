import React from "react";
import {
  FiMenu,
  FiSearch,
  FiHeart,
  FiUpload,
  FiHome,
  FiLogIn,
  FiLogOut,
} from "react-icons/fi";
import DarkLogo from "../assets/Logo/Dark-Logo.png";
import { useNavigate } from "react-router-dom";

function SideBar({ handleLogin }) {
  const navigate = useNavigate();

  return (
    <div className="h-full bg-gray-800 text-white flex flex-col justify-between p-2 transition-all duration-300">
      <div className="flex items-center justify-center text-white">
        <img src={DarkLogo} alt="PodTube" />
      </div>

      <div className="flex-grow mt-4 flex flex-col w-full space-y-2">
        <button
          onClick={() => navigate("/")}
          className="flex items-center space-x-3 px-3 py-2 text-lg font-medium rounded-lg hover:bg-gray-700"
        >
          <FiHome />
          <span>Dashboard</span>
        </button>
        <button
          onClick={() => navigate("/search")}
          className="flex items-center space-x-3 px-3 py-2 text-lg font-medium rounded-lg hover:bg-gray-700"
        >
          <FiSearch />
          <span>Search</span>
        </button>
        <button
          onClick={() => navigate("favourite")}
          className="flex items-center space-x-3 px-3 py-2 text-lg font-medium rounded-lg hover:bg-gray-700"
        >
          <FiHeart />
          <span>Favourite</span>
        </button>

        <hr className="border-gray-700 my-2" />

        <button
          onClick={() => navigate("upload")}
          className="flex items-center space-x-3 px-3 py-2 text-lg font-medium rounded-lg hover:bg-gray-700"
        >
          <FiUpload />
          <span>Upload</span>
        </button>
      </div>

      <div className="space-y-2 w-full">
        <button
          onClick={handleLogin}
          className="flex items-center space-x-3 px-3 py-2 text-lg font-medium rounded-lg hover:bg-gray-700 w-full"
        >
          <FiLogIn />
          <span>Login</span>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
