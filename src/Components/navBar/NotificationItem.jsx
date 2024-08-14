import React from "react";
import ImageComponent from "../page-essentials/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const Notification = ({ image, itemName, text, link, onErase,lastBid,notification_id }) => {
  //-----Esta funcion nos va a servir para pasar el estado de true a false del atributo isread ?
const changeIsRead =async () =>{
  console.log("esto se cambio de estado ", notification_id)
try {
  await axios.post(`${process.env.REACT_APP_API_URL}/api/notifications/read/${notification_id}/`,""
    ,{

    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    }
  })

} catch (error) {
  
}

}

  
  return (
    <div className="notification p-2 rounded flex items-center bg-zinc-800 shadow-md z-50 mb-3 " >
    <div className="mr-2">
      <ImageComponent
        src={image}
        className="w-20 h-20 object-cover rounded-lg"
      />
    </div>
  
    <div className="flex-1 flex flex-col m-2">
      <h3 className="text-xl font-semibold mb-1">{itemName}</h3>
      <p className="text-yellow-500">{text}</p>
      <p className="text-yellow-500">Puja nueva : {lastBid}</p>
      <a
        onClick={changeIsRead}
        href={link}
        className="text-blue-500 hover:text-blue-700 transition-colors duration-300 underline"
      >
        Ir a la subasta
      </a>
    </div>
  
    <button
      onClick={onErase}
      className="hidden erase-button bg-red-500 text-white px-2 py-1 p-2 rounded hover:bg-red-600"
    >
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  </div>
  
  );
};

export default Notification;
