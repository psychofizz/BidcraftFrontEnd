import React from "react";
import TestNotification from "./TestNotification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";


import Tabs from "../profile/Tsbs"

const NotificationsModal = ({ handleClose, show, notificationsInfo, isLoading, getNotificationsTrue,getNotifications }) => {


  const tabData = [
    {
      id: 'tabs-history',
      label: 'No leidas',
      content: <TestNotification notifications={notificationsInfo} getNotifications={getNotifications} />
    },
    {
      id: 'tabs-histor',
      label: 'Leidas',
      content: <TestNotification notifications={getNotificationsTrue} getNotifications={getNotifications} />
    }

  ];


  const showHideClassName = show
  ? "modal fixed inset-0 flex items-center justify-center overflow-auto bg-gray-800 bg-opacity-75 z-20"
  : "modal hidden";
  return (
    <div className={showHideClassName}>
    <div className="modal-content bg-bidcraft-modal-bg max-h-[80vh]  rounded-lg transition-transform duration-300 overflow-y-auto w-full md:w-[50vw] relative">
      <span
        className="close absolute top-2 right-2 text-gray-500 cursor-pointer"
        onClick={handleClose}
      >
        &times;
      </span>
      
      <div className="sticky top-0 bg-bidcraft-main  p-2 flex justify-between items-center z-10">
        <p className="text-lg font-semibold flex-1 text-center">
          Notificaciones
        </p>
        <button
          className="text-white px-3 py-1 rounded"
          onClick={handleClose}
        >
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>
      </div>
      
      <div className="flex flex-col space-y-2 pt-2 p-4" >
        <Tabs tabs={tabData}></Tabs>
      </div>
    </div>
  </div>
  
  
  );
};

export default NotificationsModal;
