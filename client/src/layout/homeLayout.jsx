import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar";
import Login from "../screen/auth/auth";
// import NavBar from "../components/navbar";

function HomeLayout() {
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div>
      <div className="flex h-screen">
        <div
          className="bg-gray-800 text-white w-60"
          style={{ height: "100vh" }}
        >
          <SideBar handleLogin={handleLogin} />
        </div>

        <div className="flex-1 bg-gray-50 p-4 overflow-auto">
          <Outlet />
        </div>
      </div>
      <div>
        <Login isLogin={isLogin} handleLogin={handleLogin} />
      </div>
    </div>
  );
}

export default HomeLayout;
