import React from 'react'
import { useState,useEffect } from 'react';
import Card from '../components/cards/Card';
import { useNavigate } from "react-router-dom";
const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(storedFavorites);
    }, []);

  const navigate=useNavigate()
  return (
    <div>
    <div>
    <button onClick={() => navigate("/")}>Return to Home</button>
    {favorites.map((item) => (
      <Card data={item} key={item.id} />
    ))}
  </div>
    
    </div>
  )
}

export default Favorites