import React from "react";
import {  Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Favorites from "../pages/Favorites";
const Routing = () => {
  return (
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/fooddetails" element={<Detail/>} />
      <Route  path="/favorites" element={<Favorites/>} />

    </Routes>
  );
};

export default Routing;
