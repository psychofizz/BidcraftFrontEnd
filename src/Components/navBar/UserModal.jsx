import React from "react";

const UserModal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <p>User profile content goes here.</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default UserModal;
