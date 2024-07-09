// src/components/ProductForm.js

import React from "react";

const AuctionForm = () => {
  return (
    <form className="space-y-6 bg-bidcraft-grey p-6 rounded-lg shadow-md">
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Nombre de la Subasta
        </label>
        <input
          type="text"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-200 bg-bidcraft-grey-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Descripción de la Subasta
        </label>
        <textarea className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-200 bg-bidcraft-grey-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Precio Inicial
        </label>
        <input
          type="number"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-200 bg-bidcraft-grey-2"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Fecha Inicio
          </label>
          <input
            type="date"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-200 bg-bidcraft-grey-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Fecha Final
          </label>
          <input
            type="date"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-200 bg-bidcraft-grey-2"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Categoria
        </label>
        <input
          type="text"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-200 bg-bidcraft-grey-2"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
        >
          Crear
        </button>
      </div>
    </form>
  );
};

export default AuctionForm;
