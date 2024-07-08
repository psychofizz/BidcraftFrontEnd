import React from "react";

const Item = ({ product, date_added }) => {
  const formattedDate = new Date(date_added).toLocaleString();

  return (
    <div className="item">
      <h2>{product}</h2>
      <p>Date Added: {formattedDate}</p>
      <button>Delete</button>
    </div>
  );
};

export default Item;
