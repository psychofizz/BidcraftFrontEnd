import React from "react";
import TestNotification from "./TestNotification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const NotificationsModal = ({ handleClose, show }) => {
  const showHideClassName = show
    ? "modal fixed inset-0 flex items-center justify-center overflow-auto bg-gray-800 bg-opacity-75"
    : "modal hidden";

  return (
    <div className={showHideClassName}>
      <div className="modal-content bg-bidcraft-modal-bg w-120 p-4 rounded-lg transition-transform duration-300">
        <span
          className="close absolute top-2 right-2 text-gray-500 cursor-pointer"
          onClick={handleClose}
        >
          &times;
        </span>
        <div className="flex font:helvetica flex-auto justify-center align-middle bg-bidcraft-main rounded p-2">
          <p className="text-lg font-semibold mb-2 flex-1 pt-4">
            Notificaciones
          </p>
          <button
            className="text-white px-3 py-1 rounded"
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
        </div>

        <div className="flex flex-col space-y-2 pt-4 justify-center items-center">
          <TestNotification></TestNotification>
          <TestNotification></TestNotification>
          <TestNotification></TestNotification>
        </div>
      </div>
    </div>
  );
};

export default NotificationsModal;
