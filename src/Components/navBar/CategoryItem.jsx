import React from "react";

const CategoryItem = ({ name, url, hoverText }) => {
  return (
    <div className="p-2">
      <a
        href={url}
        className="text-white hover:text-blue-700"
        title={hoverText}
      >
        <span>{name}</span>
      </a>
    </div>
  );
};

export default CategoryItem;
