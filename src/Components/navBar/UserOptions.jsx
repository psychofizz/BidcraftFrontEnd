import React from "react";
import UserOptionsItem from "./UserOptionsItem";

const UserOptions = () => {
  return (
    <div>
      <div className="flex flex-col bg-bidcraft-grey  p-2 space-y-2">
        <UserOptionsItem
          src="https://picsum.photos/200"
          text="Configuración"
          url="/help"
        />
        <UserOptionsItem
          src="https://picsum.photos/200"
          text="Ayuda y Soporte"
          url="/Perfil"
        />
      </div>
    </div>
  );
};

export default UserOptions;
