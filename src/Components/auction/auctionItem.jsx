import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import TagItem from "../page-essentials/TagItem";
import {  Link } from 'react-router-dom';


const AuctionItem = ({
  title,
  description,
  price,
  endDate,
  num_of_favorites,
  userId,
  auctionId,
}) => {

  //Esto nos srive para obtener todos los productos
  const obtenerFavorito = async () => {
    try {
      const response = await fetch(
       `http://127.0.0.1:8000/api/favorites/byUser/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
      } else {
        const resultado = await response.json();
     console.log(resultado)
      }
    } catch (error) {}
  };
  return (
    <Link to={`/Auction/${auctionId}`}>
<div className="block rounded-lg bg-slate-200 p-3 shadow-lg text-surface m-2">
      <div className="relative">
        <img
          src="https://picsum.photos/200"
          alt={title}
          className="rounded-lg w-40 h-20 overflow-auto md: h-40 w-full object-cover"
        />
        <div className="absolute top-0 left-0 m-2 flex items-center space-x-1 bg-opacity-50 bg-gray-800 p-1 rounded-md">
     <button onClick={obtenerFavorito}>     <FontAwesomeIcon  icon={faHeart} className="text-red-500" /></button>
          <span>{num_of_favorites}</span>
        </div>
      </div>

      <div className="m-2">
        <h3 className="text-lg font-semibold whitespace-nowrap overflow-hidden truncate  ">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-500 whitespace-nowrap overflow-hidden truncate ">
          {description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">Precio Actual</span>
          <span className="text-lg font-bold ml-2">{`L.${price}`}</span>
        </div>
        <div className="mt-2 text-sm text-gray-500 overflow-hidden truncate ">
          {`Finaliza: ${endDate}`}
        </div>
        <div className="flex gap-2">
          <TagItem tag="Healthy" color="bg-green-500" />
          <TagItem tag="Health" color="bg-blue-500" />
        </div>
      </div>
    </div>

    </Link>
    
  );
};

export default AuctionItem;
