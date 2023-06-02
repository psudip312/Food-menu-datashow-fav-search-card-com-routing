import React from "react";
import { useState } from "react";
import foodData from "../data/food.json";
import Card from "../components/cards/Card";
import "./Detail.css";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const [newResult, setNewResult] = useState([]);
  const [change, setChange] = useState();
  const [haveData, setHaveData] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleChange = (event) => {
    setChange(event.target.value);
  };

  const navigate = useNavigate();
  const handleSearch = () => {
    if (showButton) {
      const filteredResults = foodData.fooddata.filter(
        (user) => user.name.toLowerCase().includes(change.toLowerCase())
      );
      setNewResult(filteredResults);
      setHaveData(true);
      setShowButton(false);
    }
   else{
    handleClear()
   }
  };

  const handleClear = () => {
  
      setChange("");
      setNewResult([]);
      setHaveData(false);
      setShowButton(true);
    
  };

  const data = haveData ? newResult : foodData.fooddata;

  return (
    <>
      <div className="header">
        <button className="back-button" onClick={() => navigate("/")}>
          <i className="fas fa-arrow-left"></i> Back
        </button>
        <div className="search-container">
          <input
            className="search-input"
            onChange={handleChange}
            value={change}
            placeholder="Search..."
          />
          <button className="search-button" onClick={handleSearch}>
           {showButton ? "Search" : "clear"}
          </button>
        </div>
      </div>
      <div className="card-container">
      {data.length === 0 ? (
        <p>Sorry, we don't have that specific food. Please click </p>
      ) : (
        data.map((item, index) => <Card data={item} key={index} />)
      )}
    </div>
    </>
  );
};

export default Detail;
