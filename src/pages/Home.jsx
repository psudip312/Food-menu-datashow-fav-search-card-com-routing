import React from "react";
import foodData from "../data/food.json";
import Card from "../components/cards/Card";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

import { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  console.log(foodData.fooddata);
  const selectedItems = foodData.fooddata.slice(0, 3);
  const navigate = useNavigate();
 
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src="/path/to/logo.png" alt="Company Logo" />
          </Link>
        </div>
        <div className="navbar-middle">
          <input type="text" placeholder="Search" />
          <button className="search-button">Search</button>
        </div>
        <div className="navbar-right">
          <Link to="/cart">
            <AiOutlineShoppingCart />
          </Link>
          <Link to="/favorites">
            <AiOutlineHeart />
          </Link>
        </div>
      </nav>
      <h1>Food Menu</h1>
      <button></button>
      <div className="buttonContainer">
        <button className="arrowButton">Food Items ▼</button>
        <button onClick={() => navigate("/fooddetails")}>See all Items</button>
      </div>

      <div className="cardcontnent">
        {selectedItems.map((details, index) => (
          <Card data={details} key={index} />
        ))}
      </div>
  
    </div>
  );
};

export default Home;
