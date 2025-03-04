import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu.jsx";
import About from "./About";
import Contact from "./Contact";

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
};

export default Body;
