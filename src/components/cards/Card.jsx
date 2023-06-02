import React, { useState } from "react";
import { useEffect } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";

import "./Card.css";

// Card component le data parameter linchha, jasma card ko details cha.


const Card = ({ data }) => {

  // pathname variable le current URL ko path linchha.
  //  Yo URL ma based on, certain elements display garchha.

  const pathname = window.location.pathname;
  const [isFavorite, setFavorite] = useState(false);
  // useState hook bata isFavorite state ra setFavorite state updater function create garchha.
  //  isFavorite state le indicate garchha ki card favorite cha ki chaina.


  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isItemFavorite = favorites.some((item) => item.id === data.id);
    setFavorite(isItemFavorite);
  }, [data.id]);

//   useEffect hook bhitra, data.id ko change ma favorite status check garchha. localStorage bata
//  favorites lai retrieve garchha. isItemFavorite variable le card favorite cha ki chaina check 
//  garchha. isFavorite state ko value update garchha.

  console.log(pathname);

  // handleFavorite function le favorite status toggle garchha. Agar card favorite cha bhane, tyo card lai favorites bata remove garchha. 
  // Favorites lai localStorage bhitra update garchha. setFavorite state ko value false garchha. Agar card favorite chaina bhane, tyo card lai favorites ma add garchha.
  //  Favorites lai localStorage bhitra update garchha. setFavorite state ko value true garchha.


  // some functon le true or false reutrun garcah filter le aaray  ani includes le ni tei ho
  const handleFavorite = (meta) => {
    if (isFavorite) {
      // Remove from favorites
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const updatedFavorites = favorites.filter((item) => item.id !== meta.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavorite(false);
    } else {
      // Add to favorites
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      // get lekhnu ko karan path
      const updatedFavorites = [...favorites, meta];

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavorite(true);
    }
//     Return ma, HTML elements haru le card ko UI banayo chha. Card ko content haru display garchha.

// handleFavorite function le click event ma favorite button ko status toggle garchha. Agar card favorite cha bhane, favorite-active class lai favorite button ma add garchha ra <AiFillHeart /> icon display garchha. Agar card favorite chaina bhane, favorite-active class lai remove garchha ra <AiOutlineHeart /> icon display garchha.

// Card component export garchha.

// Yo code le Card component le card ko details display garchha ra favorite status lai manage garchha.
  };

  return (
    <div>
      <div className="cardcontent">
        <div className="card" key={data.id}>
          <img src={data.image} alt="John" />
          <h1 className="heading">{data.name}</h1>
          <p className="title">{data.description}</p>
          {pathname === "/fooddetails" ? <p className="price">$:{data.price}</p> : null}
          <p>
            <button className="add-to-cart">Add To Cart</button>
          </p>
          <div
            onClick={()=>handleFavorite(data)}
            className={`favorite-button ${isFavorite ? "favorite-active" : ""}`}
          >
            {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
