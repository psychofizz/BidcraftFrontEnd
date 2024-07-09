import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const AuctionItem = ({
  title,
  description,
  price,
  endDate,
  num_of_favorites,
}) => {
  return (
    <div className="block rounded-lg bg-white p-6 shadow-secondary-1 text-surface dark:bg-surface-dark dark:text-white">
      <div className="relative">
        <img
          src="https://picsum.photos/200"
          alt={title}
          className="rounded-lg"
        />
        <div className="absolute top-0 left-0 m-2 flex items-center space-x-1 bg-opacity-50 bg-gray-800 p-1 rounded-md">
          <FontAwesomeIcon icon={faHeart} className="text-red-500" />
          <span>{num_of_favorites}</span>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">Precio Actual</span>
          <span className="text-lg font-bold">{`L.${price}`}</span>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          {`Finaliza: ${endDate}`}
        </div>
      </div>
    </div>
  );
};

export default AuctionItem;
