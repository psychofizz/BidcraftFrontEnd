import React, { useState, useEffect } from "react";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";

const AdminPage = () => {
  const [contentToShow, setContentToShow] = useState(null);
  const [subastadores, setSubastadores] = useState([]);
  const [adminName, setAdminName] = useState("");
  const [adminProfilePic, setAdminProfilePic] = useState("");

  useEffect(() => {
    fetchAdminData(); // Llama a fetchAdminData al cargar el componente
  }, []);

  useEffect(() => {
    // Datos simulados de subastadores pendientes
    const simulatedSubastadores = [
      { id: 1, nombre: "John Doe", estado: "pendiente" },
      { id: 2, nombre: "Jane Smith", estado: "pendiente" },
      { id: 3, nombre: "Michael Johnson", estado: "pendiente" },
    ];
    setSubastadores(simulatedSubastadores);
  }, []);

  const fetchAdminData = async () => {
    try {
      // Simulando datos del administrador obtenidos del backend
      const adminData = {
        name: "Dylan Mike",
        profilePic: "https://example.com/profile-pic.jpg",
      };
      setAdminName(adminData.name);
      setAdminProfilePic(adminData.profilePic);
    } catch (error) {
      console.error("Error fetching admin data:", error);
      // Manejo de errores
    }
  };

  const handleSidebarItemClick = (content) => {
    setContentToShow(content);
  };

  const handleAceptarSubastador = async (subastadorId) => {
    try {
      // Simulando la acción de aceptar un subastador
      console.log(`Subastador aceptado con ID: ${subastadorId}`);
      // Aquí se podría hacer una llamada real al backend para actualizar el estado
    } catch (error) {
      console.error("Error al aceptar el subastador:", error);
    }
  };

  const handleRechazarSubastador = async (subastadorId) => {
    try {
      // Simulando la acción de rechazar un subastador
      console.log(`Subastador rechazado con ID: ${subastadorId}`);
      // Aquí se podría hacer una llamada real al backend para actualizar el estado
    } catch (error) {
      console.error("Error al rechazar el subastador:", error);
    }
  };

  const renderMainContent = () => {
    switch (contentToShow) {
      case "verificarSubastador":
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              Subastadores Pendientes de Verificación
            </h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subastador
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {subastadores.map((subastador) => (
                  <tr key={subastador.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {subastador.nombre}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {subastador.estado === "pendiente" ? (
                        <span className="bg-yellow-200 text-yellow-800 py-1 px-3 rounded-full text-xs">
                          Pendiente
                        </span>
                      ) : (
                        <span className="bg-green-200 text-green-800 py-1 px-3 rounded-full text-xs">
                          Aceptado
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {subastador.estado === "pendiente" && (
                        <>
                          <button
                            onClick={() =>
                              handleAceptarSubastador(subastador.id)
                            }
                            className="bg-green-500 text-white py-1 px-2 rounded-lg mr-2"
                          >
                            Aceptar
                          </button>
                          <button
                            onClick={() =>
                              handleRechazarSubastador(subastador.id)
                            }
                            className="bg-red-500 text-white py-1 px-2 rounded-lg"
                          >
                            Rechazar
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Contenido predeterminado */}
          </div>
        );
    }
  };

  return (
    <div className="bg-gray-200">
      <MainNavbar adminName={adminName} adminProfilePic={adminProfilePic} />

      <div className="min-h-screen flex flex-row bg-blue-100">
        {/* Sidebar */}
        <div className="w-1/5 bg-bidcraft-dark p-4 text-white flex flex-col items-center">
          <div className="flex flex-col items-center mb-4">
            <div className="w-16 h-16 rounded-full bg-white mb-2">
              <img
                src={adminProfilePic}
                alt="Admin Profile"
                className="w-full h-full rounded-full"
              />
            </div>
            <h2 className="text-lg font-bold">{adminName}</h2>
            <p className="text-sm">Administrador</p>
          </div>
          <nav className="flex flex-col w-full">
            <button
              onClick={() => handleSidebarItemClick("verificarSubastador")}
              className="py-2 px-4 rounded-lg bg-blue-600 mb-2"
            >
              Verificar Subastador
            </button>
            <button
              onClick={() => handleSidebarItemClick("gestionUsuarios")}
              className="py-2 px-4 rounded-lg bg-blue-600 mb-2"
            >
              Gestión de Usuarios
            </button>
            <button
              onClick={() => handleSidebarItemClick("moderacionContenidos")}
              className="py-2 px-4 rounded-lg bg-blue-600 mb-2"
            >
              Moderación de Contenidos
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="w-4/5 p-6">{renderMainContent()}</div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminPage;
