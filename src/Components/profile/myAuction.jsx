import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function MyAuctions({ idAuction, name, description, highest_bid, updateAuction, imgUrl, category, isActive }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const deleteAuction = async () => {
    closeModal();
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/auction/delete/one/${idAuction}/`);
      toast.success("Subasta eliminada");
      updateAuction();
    } catch (error) {
      toast.error("Error al eliminar la subasta");
    }
  };
  return (
    <div className="bg-bidcraft-grey-2 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl flex flex-col cursor-pointer hover:scale-[1.02]">
      <div className="h-48 overflow-hidden">
        <Link to={`/myAuction/${idAuction}`} className="block m-2">
          <img
            src={imgUrl?.image_url || ""}
            alt={name}
            className="w-full h-full object-cover"
          />
        </Link>

      </div>
      <div className="p-4 flex-grow flex flex-col">
        <div className="mb-2 flex justify-between items-start">
          <h2 className="text-xl font-bold text-white">{name}</h2>
        </div>
        <p className="text-white mb-4 flex-grow line-clamp-2">{description}</p>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-white">Precio actual:</span>
            <span className="text-lg font-bold text-green-600">L. {highest_bid}</span>
          </div>
          <div className="flex justify-between space-x-2 mt-4">
            {(isActive !== null && isActive !== false) ? (
              <>
                <Link to={`/editAuction/${idAuction}`} className="flex-1">
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                    Editar
                  </button>
                </Link>
                <button
                  className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
                  onClick={openModal}
                >
                  Eliminar
                </button>
              </>
            ) : (
              <div className="flex justify-center align-middle w-full">
                <p className="text-white bg-bidcraft-main rounded-xl pr-4 pl-4 pt-2 pb-2">Subasta finalizada</p>
              </div>
            )}

          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 text-gray-800">
          <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-6 px-8">
              <div className="flex justify-between items-center pb-3">
                <h3 className="text-2xl font-bold">¿Deseas eliminar esta subasta?</h3>
                <button onClick={closeModal} className="modal-close text-gray-500 hover:text-gray-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 mb-6">Estos cambios son irreversibles</p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300"
                >
                  Cancelar
                </button>
                <button
                  onClick={deleteAuction}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyAuctions;