import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiMenu, FiUser } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useSelector } from "react-redux";
import ProfileImg from '../assets/Logo/ltx9i2fys9l91.png'

function NavBar({ toggleSidebar, isOpen, handleLogin }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get("/api/v1/user");
          setUserData(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchUserData();
    }
  }, [isLoggedIn]);

  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/logout");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // if (loading) {
  //   return (
  //     <div>
  //       Loading
  //     </div>
  //   );
  // }

  return (
    <nav className="bg-[#FFFFFF] px-4 py-3">
      <div className="flex items-center justify-between">
        <button
          onClick={toggleSidebar}
          className="text-[#333333] lg:block hidden bg-[#FF5722] hover:bg-[#FF5727] p-2 rounded-lg focus:outline-none"
        >
          {isOpen ? (
            <MdKeyboardDoubleArrowLeft className="text-xl" />
          ) : (
            <MdKeyboardDoubleArrowRight />
          )}
        </button>

        <button
          onClick={toggleSidebar}
          className="text-[#333333] block lg:hidden bg-gray-700 hover:bg-gray-600 p-2 rounded-lg focus:outline-none"
        >
          <FiMenu className="text-xl" />
        </button>
        {isLoggedIn && (
          <div className="flex-1 text-center text-[#333333] text-lg font-semibold">
            Hi, {userData?.name}
          </div>
        )}
        {!isLoggedIn && (
          <div className="flex-1 text-center text-[#333333] text-lg font-semibold">
            Hi, Guest
          </div>
        )}

        {!isLoggedIn && (
          <div>
            <button
              onClick={handleLogin}
              className="flex border-2 border-[#FF5722] hover:border-s-fuchsia-400 rounded-md p-1 px-2 justify-center items-center gap-2"
            >
              <FiUser size={24} className="text-[#333333]" />
              <span className="text-lg text-[#333333]">Login</span>
            </button>
          </div>
        )}
        {isLoggedIn && (
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 text-white  rounded-lg focus:outline-none"
            >
              <img
                src={ProfileImg}
                alt="User Avatar"
                className="w-12 h-12 rounded-full"
              />
              {/* <IoMdArrowDropdown className="text-xl" /> */}
            </button>

            {dropdownOpen && (
              <div className="absolute right-1 mt-4 bg-white text-gray-800 shadow-lg rounded-lg w-48">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-4 rounded-lg hover:bg-gray-100 text-sm"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
