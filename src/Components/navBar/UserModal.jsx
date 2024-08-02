import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Settings, LogOut, ChevronRight, X } from "lucide-react";

const UserModal = ({ handleClose, show }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const showHideClassName = show ? "block" : "hidden";

  useEffect(() => {
    const userDataString = localStorage.getItem("User");
    if (userDataString) {
      try {
        const userData = JSON.parse(userDataString);
        setFullName(userData.first_name || "Cargando..");
        setEmail(userData.email || "Cargando..");
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const handleViewProfile = () => {
    navigate("/profile");
    handleClose();
  };

  const handleLogout = () => {
    localStorage.removeItem("userData");
    handleClose();
    navigate("/login");
  };

  return (
    <div
  className={` fixed z-50 flex ${showHideClassName} ${showHideClassName.includes('hidden') ? 'fade-out' : 'fade-in'} sm:items-center sm:justify-center md:items-start md:justify-end transition-opacity duration-300 ease-out right-0`}
>
  <div className={`bg-white rounded-lg shadow-xl overflow-hidden w-80 max-w-md transform ${showHideClassName.includes('hidden') ? 'slide-out' : 'slide-in'} transition-transform duration-300 ease-out`}>
    
        <div className="bg-bidcraft-modal-bg p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Perfil</h2>
            <button
              onClick={handleClose}
              className="text-white hover:text-gray-200 transition duration-150"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex items-center">
            <img
              src={`https://ui-avatars.com/api/?name=${fullName}&background=random`}
              alt={fullName}
              className="w-16 h-16 rounded-full border-2 border-white mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold">{fullName}</h3>
              <p className="text-sm opacity-80">{email}</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <button
            onClick={handleViewProfile}
            className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition duration-150"
          >
            <span className="flex items-center">
              <User className="mr-3" size={20} />
              Ver Perfil
            </span>
            <ChevronRight size={20} />
          </button>
          <button
            className=" hidden w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition duration-150"
          >
            <span className="flex items-center">
              <Settings className="mr-3" size={20} />
              Configuración
            </span>
            <ChevronRight size={20} />
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-between px-4 py-2 text-red-600 hover:bg-red-50 rounded transition duration-150"
          >
            <span className="flex items-center">
              <LogOut className="mr-3" size={20} />
              Salir
            </span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;