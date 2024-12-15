import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screen/home";
import HomeLayout from "./layout/homeLayout";
import Search from "./screen/search";
import Favourite from "./screen/fav";
import Upload from "./screen/upload";
import AuthLayout from "./layout/authLayout";
import Login from "./screen/auth/login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Layout Routes */}
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="*" element={<h1>Not Found</h1>} />

          {/* Auth */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<h1>Register</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
