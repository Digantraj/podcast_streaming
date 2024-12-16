import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar";
import NavBar from "../components/navbar";
import Login from "../screen/auth/auth";

function HomeLayout() {
  const [isOpen, setIsOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(!isLogin);
    console.log("Login");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex h-screen ">
        <div
          className={`bg-gray-900 lg:block hidden text-white transition-all duration-300 ${
            isOpen ? "w-64" : "w-16"
          } h-full`}
        >
          <SideBar
            isOpen={isOpen}
            toggleSidebar={toggleSidebar}
            handleLogin={handleLogin}
          />
        </div>

        <div className="flex-1 flex flex-col">
          <div className="bg-gray-800 text-white shadow-md">
            <NavBar toggleSidebar={toggleSidebar} isOpen={isOpen} />
          </div>

          <div className="flex-1 overflow-scrollbar p-4 bg-gray-900 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
      <div>
        <Login isLogin={isLogin} handleLogin={handleLogin} />
      </div>
    </div>
  );
}

export default HomeLayout;
