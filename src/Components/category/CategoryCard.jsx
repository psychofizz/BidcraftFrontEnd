import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ imageUrl, categoryName, linkTo }) => {
  // Definir los colores de las capas semitransparentes
  const overlayColors = [
    "bg-indigo-700",
    "bg-purple-700",
    "bg-green-700",
    "bg-red-700",
    "bg-white",
    "bg-blue-300",
  ];

  // Seleccionar un color aleatorio para la capa semitransparente
  const randomColor =
    overlayColors[Math.floor(Math.random() * overlayColors.length)];

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img src={imageUrl} alt={categoryName} className="w-full h-auto" />
      </div>
      <div className={`absolute inset-0 ${randomColor} opacity-50`}></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Link
          to={linkTo}
          className="text-white text-2xl font-bold hover:underline"
        >
          {categoryName}
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
