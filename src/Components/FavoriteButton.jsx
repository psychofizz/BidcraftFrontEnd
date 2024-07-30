import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const FavoriteButton = () => {
  const [favorite, setFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
  };

  return (
    <button
      onClick={handleFavoriteClick}
      className={`absolute top-2 right-2 rounded-full p-2 ${
        favorite ? "bg-red-500 text-white" : "bg-gray-300 text-gray-600"
      }`}
    >
      <FontAwesomeIcon icon={faHeart} />
    </button>
  );
};

export default FavoriteButton;
