import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar";
// import NavBar from "../components/navbar";

function HomeLayout() {
  return (
    <div className="flex h-screen">
      <div className="bg-gray-800 text-white w-60" style={{ height: "100vh" }}>
        <SideBar />
      </div>

      <div className="flex-1 bg-gray-50 p-4 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
