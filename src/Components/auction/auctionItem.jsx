import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

//{ title, description, price, endDate }
const AuctionItem = () => {
  return (
    <div className="block rounded-lg bg-white p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
      <div className="relative">
        <img src="https://picsum.photos/200" alt="" />
        <div className="absolute top-0 left-0 m-2 flex items-center space-x-1">
          <FontAwesomeIcon icon={faHeart} />
          <span>12</span>
        </div>
      </div>

      <div>
        <span>Rolex - Submariner Date</span>
        <div>
          <span>Precio Actual</span>
          <span>L.56000</span>
        </div>
      </div>
    </div>
  );
};

export default AuctionItem;
