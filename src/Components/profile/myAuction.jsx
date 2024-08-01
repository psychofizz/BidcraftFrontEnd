import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function MyAuctions({ idAuction, name, description, highest_bid, updateAuction, imgUrl }) {



    //---------------------------------------Funcion para eliminar ------------------------------------------

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };




    const deleteAuction = async () => {

        closeModal()
        try {
             await axios.delete(`${process.env.REACT_APP_API_URL}/api/auction/delete/one/${idAuction}/`);
            toast.success("Subasta eliminada")
            updateAuction();

        } catch (error) {


        };
    }



    //-------------------------------------------------------------------------------------------------------
    return (





      

<div className="transition-transform duration-300 ease-in-out transform hover:scale-[1.040] hover:shadow-2xl shadow-xl p-4 bg-bidcraft-dark">
<Link to={`/myAuction/${idAuction}`} className="block m-2">
  <img
    src={imgUrl?.image_url || ""}
    
    className="w-full h-48 object-cover mb-2"
  />
  </Link>
  <h2 className="text-lg font-bold text-warning-100">
    {name}
  </h2>
  <p className="text-gray-700">
    {description}
  </p>
  <p className="text-gray-500">
    Precio actual: <span className="font-bold">L. {highest_bid}</span>
  </p>
  <div className="flex mt-4 space-x-2">
    <Link to={`/editAuction/${idAuction}`}>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
        Editar
      </button>
    </Link>
    <button
      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
      data-twe-toggle="modal"
      data-twe-target="#exampleModal"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      onClick={openModal}
    >
      Eliminar
    </button>
  </div>



  {isOpen && (
    <div className="fixed inset-0 flex items-center justify-center z-50 text-bidcraft-grey-2">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <h3 className="text-2xl font-bold">¿Deseas eliminar esta subasta?</h3>
            <button onClick={closeModal} className="modal-close">
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  className="heroicon-ui"
                  d="M14.95 14.95a1 1 0 0 1-1.41 0L10 11.41l-3.54 3.54a1 1 0 1 1-1.41-1.41L8.59 10 5.05 6.46a1 1 0 0 1 1.41-1.41L10 8.59l3.54-3.54a1 1 0 0 1 1.41 1.41L11.41 10l3.54 3.54a1 1 0 0 1 0 1.41z"
                />
              </svg>
            </button>
          </div>
          <p>Estos cambios son irreversibles</p>
          <div className="flex justify-end pt-2">
            <button
              onClick={closeModal}
              className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
            >
              Cerrar
            </button>
            <button
              onClick={deleteAuction}
              className="modal-close px-4 bg-bidcraft-grey-2 p-3 rounded-lg text-white hover:bg-indigo-400"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
</div>





    )
}
export default MyAuctions