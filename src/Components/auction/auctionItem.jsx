import React, { useState } from "react";
import FavoriteButton from "../FavoriteButton";

const AuctionItem = ({
  title,
  description,
  price,
  endDate,
  num_of_favorites,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);


  return (
    <div className="block rounded-lg bg-slate-200 flex md:flex-cols flex-rows p-3 shadow-lg text-surface m-2 relative">
      <div>
        <img
          src="https://picsum.photos/200"
          alt={title}
          className="rounded-lg w-40 h-20 overflow-auto md:h-40 w-40"
        />
        {/*<div className="absolute top-0 left-0 m-2 flex items-center space-x-1 bg-opacity-50 bg-gray-800 p-1 rounded-md">
          <FontAwesomeIcon icon={faHeart} className="text-red-500" />
          <span>{num_of_favorites}</span>
        </div>*/}
      </div>

      <div className="m-2 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">Precio Actual</span>
          <span className="text-lg font-bold ml-2">{`L.${price}`}</span>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          {`Finaliza: ${endDate}`}
        </div>
      </div>

      {/*<button
        onClick={handleFavoriteClick}
        className={`absolute top-2 right-2 rounded-full p-2 ${
          isFavorite ? "bg-red-500 text-white" : "bg-gray-300 text-gray-600"
        }`}
      >
        <FontAwesomeIcon icon={faHeart} />
      </button>*/}

      <div className="absolute top-2 right-2">
        <FavoriteButton isFavorite={isFavorite} />
      </div>
    </div>
  );
};

export default AuctionItem;
