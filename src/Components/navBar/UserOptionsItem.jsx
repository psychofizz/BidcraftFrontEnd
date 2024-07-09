import React from "react";

const UserOptionsItem = ({ src, text, url }) => {
  return (
    <div
      className={`flex bg-bidcraft-grey-2 rounded p-1 items-center transition-transform duration-200 transform hover:scale-105 ${src}`}
    >
      <img
        src="https://picsum.photos/200"
        alt=""
        className="w-12 h-12 rounded-full mr-4 shadow-lg"
      />
      <a
        href={url}
        className="text-white underline font-medium transition-colors duration-200 hover:text-blue-500 focus:text-blue-700"
      >
        {text}
      </a>
    </div>
  );
};

export default UserOptionsItem;
