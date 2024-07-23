
import React, { useEffect, useState } from "react"
import axios from "axios";

import { Link } from 'react-router-dom';

import { toast } from "react-toastify";


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
            const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/auction/delete/one/${idAuction}/`);
            toast.success("Subasta eliminada")
            updateAuction();

        } catch (error) {


        };
    }



    //-------------------------------------------------------------------------------------------------------
    return (


        <div className="w-full flex flex-col-2 h-[20%] shadow-2xl mb-3 bg-bidcraft-grey-2 ">






            <div className="w-[70%] flex flex-col-2 ">
                <div className=" p-5 shadow-2xl  font-bold">
                    <h1 className="text-2xl text-white ">{name} -{description}</h1>
                    <h1 className="text-xl text-gray-400">Precio de actual  :L. {highest_bid}</h1>             </div>

            </div>
            <div className="w-[20%] flex  flex-col justify-center px-11 text-white ">
                <button className="border-2 border-blue-600 px-3 py-2 rounded-md">Editar</button>
                <button className="border-2 border-red-500 px-3 py-2 mt-1 rounded-md" data-twe-toggle="modal"
                    data-twe-target="#exampleModal"
                    data-twe-ripple-init
                    data-twe-ripple-color="light" onClick={openModal}>Eliminar </button>

            </div>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 text-bidcraft-grey-2">
                    <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>

                    <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                        <div className="modal-content py-4 text-left px-6">
                            <div className="flex justify-between items-center pb-3">
                                <p className="text-2xl font-bold">¿Deseas eliminar esta subasta?</p>
                                <button onClick={closeModal} className="modal-close">
                                    <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
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
                                <button onClick={() => deleteAuction()} className="modal-close px-4 bg-bidcraft-grey-2 p-3 rounded-lg text-white hover:bg-indigo-400">
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