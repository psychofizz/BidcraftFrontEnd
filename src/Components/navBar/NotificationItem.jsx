import React from "react";
import ImageComponent from "../page-essentials/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Notification = ({ image, itemName, text, link, onErase }) => {
  return (
    <div className="notification p-2 rounded flex items-center bg-zinc-800 shadow-md  z-50">

      <div className="mr-2">
        <ImageComponent
          src={image}
          className="w-20 h-20 object-cover rounded-lg"
        />
      </div>


      <div className="flex-1 flex flex-col m-2">
        <h3 className="text-xl font-semibold mb-1">{itemName}</h3>
        <p className="text-gray-700 ">{text}</p>
        <a
          href={link}
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
        >
          Ir a subasta
        </a>
      </div>
      <button
        onClick={onErase}
        className="erase-button bg-red-500 text-white px-2 py-1 p-2 rounded hover:bg-red-600"
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default Notification;
