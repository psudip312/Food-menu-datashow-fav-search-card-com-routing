import React, { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import './Card.css';
const Card = ({ data }) => {
  const pathname = window.location.pathname;
  const [isFavorite,setFavorite]=useState(false)
  
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isItemFavorite = favorites.some((item) => item.id === data.id);
    setFavorite(isItemFavorite);
  }, [data.id]);

  console.log(pathname);
  const handleFavorite = () => {
    if (isFavorite) {
      // Remove from favorites
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const updatedFavorites = favorites.filter((item) => item.id !== data.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavorite(false);
    } else {
      // Add to favorites
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      // get lekhnu ko karan path
      const updatedFavorites = [...favorites, data];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavorite(true);
    }
  };

  return (
    <div>
      <div className="cardcontent">
        <div className="card" key={data.id}>
          <img src={data.image} alt="John" />
          <h1>{data.name}</h1>
          <p className="title">{data.description}</p>
          {pathname === '/fooddetails' ? <p>$:{data.price}</p> : null}
          <p>
            <button className="add-to-cart">Add To Cart</button>
          </p>
        
          <div
          onClick={handleFavorite}
          className={`favorite-button ${isFavorite ? 'favorite-active' : ''}`}
        >
          {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
