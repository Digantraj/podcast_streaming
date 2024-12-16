import React, { useState } from "react";
import { FiMenu, FiUser } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

function NavBar({ toggleSidebar, isOpen, handleLogin }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userName = "Mayank";

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gray-900 px-4 py-3 shadow-md">
      <div className="flex items-center justify-between">
        <button
          onClick={toggleSidebar}
          className="text-white lg:block hidden bg-gray-700 hover:bg-gray-600 p-2 rounded-lg focus:outline-none"
        >
          {isOpen ? (
            <MdKeyboardDoubleArrowLeft className="text-xl" />
          ) : (
            <MdKeyboardDoubleArrowRight />
          )}
        </button>

        <button
          onClick={toggleSidebar}
          className="text-white block lg:hidden bg-gray-700 hover:bg-gray-600 p-2 rounded-lg focus:outline-none"
        >
          <FiMenu className="text-xl" />
        </button>

        <div className="flex-1 text-center text-white text-lg font-semibold">
          Hi, {userName}
        </div>

        <div>
          <button
            onClick={handleLogin}
            className="flex border rounded-md p-1 px-2 justify-center items-center gap-2"
          >
            <FiUser size={24} />
            <span className="text-lg">Login</span>
          </button>
        </div>

        {/* <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 text-white bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg focus:outline-none"
          >
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <IoMdArrowDropdown className="text-xl" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white text-gray-800 shadow-lg rounded-lg py-2 w-48">
              <button
                onClick={() => alert("Logging out...")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
              >
                Logout
              </button>
            </div>
          )}
        </div> */}
      </div>
    </nav>
  );
}

export default NavBar;
