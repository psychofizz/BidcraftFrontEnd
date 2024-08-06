import React, { useState } from "react";
import Input from "../input";

function AuctionFilter() {
  const [filter, setFilter] = useState({
    minPrice: "",
    maxPrice: "",
    condition: "",
    date: "",
    availability: "",
  });

  const handleChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-[400] h-[500] p-4 rounded-md shadow-md bg-white">
      <h2 className="text-xl text-black font-bold mb-4">Filtrar </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h3 className="text-xl text-black font-bold">Precio</h3>
        <div className="flex gap-4">
          <Input
            inputType="number"
            text="Precio Mínimo"
            handleChange={handleChange}
            values={filter}
            name="minPrice"
            className="w-full"
          />
          <Input
            inputType="number"
            text="Precio Máximo"
            handleChange={handleChange}
            values={filter}
            name="maxPrice"
            className="w-full"
          />
        </div>
        <h3 className="text-xl text-black font-bold">Condición</h3>
        <select
          className="text-black border border-gray-300 focus:outline-none focus:border-blue-500 w-full rounded-md p-4"
          name="condition"
          onChange={handleChange}
          value={filter.condition}
        >
          <option value="">-- Condición --</option>
          <option value="Nuevo">Nuevo</option>
          <option value="Usado - Como Nuevo">Usado - Como Nuevo</option>
          <option value="Usado - Buen Estado">Usado - Buen Estado</option>
          <option value="Usado - Aceptable">Usado - Aceptable</option>
        </select>

        <h3 className="text-xl text-black font-bold"> Fecha Publicado</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </form>

        <div className="text-black flex gap-4">
          <label>
            <input
              type="radio"
              name="availability"
              value="Disponible"
              checked={filter.availability === "Disponible"}
              onChange={handleChange}
            />
            Disponible
          </label>
          <label>
            <input
              type="radio"
              name="availability"
              value="Vendido"
              checked={filter.availability === "Vendido"}
              onChange={handleChange}
            />
            Vendido
          </label>
        </div>

        <button
          type="submit"
          className="bg-bidcraft-main hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
        >
          Filtrar
        </button>
      </form>
    </div>
  );
}

export default AuctionFilter;
