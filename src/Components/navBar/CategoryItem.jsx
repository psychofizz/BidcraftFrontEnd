import React from "react";

const CategoryItem = ({ name }) => {
  return (
    <Link
      to={`/category/${name}`}
      className="px-4 py-2 whitespace-nowrap hover:bg-gray-700 transition-colors duration-200"
    >
      {name}
    </Link>
  );
};

export default CategoryItem;
