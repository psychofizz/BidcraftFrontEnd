import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const AuctionItem = ({
  title,
  description,
  price,
  endDate,
  num_of_favorites,
  userId,
  auction
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
    <div className="block rounded-lg bg-slate-200 flex md:flex-cols flex-rows p-3 shadow-lg text-surface m-2">
      <div className="relative">
        <img
          src="https://picsum.photos/200"
          alt={title}
          className="rounded-lg w-40 h-20 overflow-auto md: h-40 w-40"
        />
        <div className="absolute top-0 left-0 m-2 flex items-center space-x-1 bg-opacity-50 bg-gray-800 p-1 rounded-md">
     <button onClick={obtenerFavorito}>     <FontAwesomeIcon  icon={faHeart} className="text-red-500" /></button>
          <span>{num_of_favorites}</span>
        </div>
      </div>

      <div className="m-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">Precio Actual</span>
          <span className="text-lg font-bold ml-2">{`L.${price}`}</span>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          {`Finaliza: ${endDate}`}
        </div>
      </div>
    </div>
  );
};

export default AuctionItem;
