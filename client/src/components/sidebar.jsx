import React from "react";
import {
  FiMenu,
  FiSearch,
  FiHeart,
  FiUpload,
  FiHome,
  FiLogIn,
  FiLogOut,
  FiUser,
} from "react-icons/fi";
import DarkLogo from "../assets/Logo/Dark-Logo.png";
import { useNavigate } from "react-router-dom";

function SideBar({ handleLogin, isOpen }) {
  const navigate = useNavigate();

  return (
    <div className="h-full bg-gray-800 text-white flex flex-col justify-between p-2 transition-all duration-300">
      <div className="flex items-center justify-center text-white">
        {isOpen && <img src={DarkLogo} alt="PodTube" />}
      </div>

      <div className="flex-grow mt-4 flex flex-col w-full space-y-2">
        <button
          onClick={() => navigate("/")}
          className="flex items-center space-x-3 px-3 py-2 text-lg font-medium rounded-lg hover:bg-gray-700"
        >
          <FiHome  size={24}/>
          {isOpen && <span>Dashboard</span>}
        </button>
        <button
          onClick={() => navigate("/search")}
          className="flex items-center space-x-3 px-3 py-2 text-lg font-medium rounded-lg hover:bg-gray-700"
        >
          <FiSearch size={24}/>
          {isOpen && <span>Search</span>}
        </button>
        <button
          onClick={() => navigate("favourite")}
          className="flex items-center space-x-3 px-3 py-2 text-lg font-medium rounded-lg hover:bg-gray-700"
        >
          <FiHeart size={24}/>
          {isOpen && <span>Favourite</span>}
        </button>

        <hr className="border-gray-700 my-2" />

        <button
          onClick={() => navigate("upload")}
          className="flex items-center space-x-3 px-3 py-2 text-lg font-medium rounded-lg hover:bg-gray-700"
        >
          <FiUpload size={24}/>
          {isOpen && <span>Upload</span>}
        </button>
        <button
          onClick={() => navigate("profile")}
          className="flex items-center space-x-3 px-3 py-2 text-lg font-medium rounded-lg hover:bg-gray-700"
        >
          <FiUser size={24}/>
          {isOpen && <span>Profile</span>}
        </button>
      </div>

      <div className="space-y-2 w-full">
        <button
          onClick={handleLogin}
          className="flex items-center space-x-3 px-3 py-2 text-lg font-medium rounded-lg hover:bg-gray-700 w-full"
        >
          <FiLogIn size={24}/>
          {isOpen && <span>Login</span>}
        </button>
      </div>
    </div>
  );
}

export default SideBar;
