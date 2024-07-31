import React, { useState } from "react";
import StarRatings from "react-star-ratings";

const Review = () => {
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    console.log("Description:", description);
    console.log("Rating:", rating);
  };

  return (
    <div className="p-6 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4">Nueva Reseña</h2>

      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
          Establecer una descripción:
        </label>
        <textarea
          id="description"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          rows="4"
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
          Establecer una calificación:
        </label>
        <StarRatings
          rating={rating}
          starRatedColor="#FFD700"
          changeRating={handleRatingChange}
          numberOfStars={5}
          name="rating"
          starDimension="30px"
          starSpacing="5px"
        />
      </div>

      <div className="flex justify-end">
        <button
          className="px-4 py-2 rounded-md bg-white text-black mr-2"
          onClick={() => {
            // Manejar cancelación
          }}
        >
          Cancelar
        </button>
        <button
          className="px-4 py-2 rounded-md bg-bidcraft-main text-white"
          onClick={handleSubmit}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default Review;
