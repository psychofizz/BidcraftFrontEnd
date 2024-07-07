import React from "react";

const FavoritesModal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <p>Favorite items content goes here.</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default FavoritesModal;
