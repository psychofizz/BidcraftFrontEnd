import React from "react";
import UserContent from "./UserContent";
import UserOptions from "./UserOptions";

const UserModal = ({ handleClose, show }) => {
  const showHideClassName = show ? "block" : "hidden";

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 z-20 ${showHideClassName}`}
    >
      <div className="bg-bidcraft-modal-bg shadow-lg overflow-hidden flex flex-col rounded-lg space-y-1 ">
        <div className="flex">
          <div className="flex-1">
            <UserContent
              img_src="https://picsum.photos/200"
              username="Paredes"
            />
          </div>

          <button onClick={handleClose} className="bg-bidcraft-main">
            <span className="text-2xl pr-4">&times;</span>
          </button>
        </div>
        <UserOptions></UserOptions>
      </div>
    </div>
  );
};

export default UserModal;
