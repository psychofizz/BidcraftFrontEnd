import React from "react";

const UserContent = (img_src, username) => {
  return (
    <div className="flex">
      <div className="p-2 bg-bidcraft-main shadow-lg">
        <div className="flex items-center bg-bidcraft-main pr-4">
          <img
            src="https://picsum.photos/200"
            alt="Avatar de usuario"
            className="w-20 h-20 rounded-full mr-4"
          />
          <div className="flex flex-col">
            <span className="text-white text-lg">Armando Paredes</span>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Ver Perfil
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserContent;
