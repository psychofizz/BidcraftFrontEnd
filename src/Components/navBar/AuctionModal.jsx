import React from "react";
import AuctionForm from "../auction/CreateAuction";
import LoadImages from "./LoadImages";

const AuctionModal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div
      className={`${showHideClassName} fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50`}
    >
      <div className="modal-content bg-bidcraft-modal-bg rounded-lg shadow-lg p-8 relative">
        <div className="bg-bidcraft-main flex items-center rounded-lg p-5 shadow-lg mb-2">
          <h1 className="text-3xl text-white font-bold flex-1 mb-0 align-middle mt-0">
            Crear Subasta
          </h1>
          <span
            className="close text-white text-2xl cursor-pointer hover:text-gray-200 ml-4"
            onClick={handleClose}
          >
            &times;
          </span>
        </div>

        <div className="flex">
          <AuctionForm />
          <LoadImages />
        </div>

        <button
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={handleClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default AuctionModal;
