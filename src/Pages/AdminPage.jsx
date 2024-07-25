import React, { useState, useEffect } from "react";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";

const AdminPage = () => {
  const [contentToShow, setContentToShow] = useState(null);
  const [subastadores, setSubastadores] = useState([]);
  const [adminName, setAdminName] = useState("");
  const [adminProfilePic, setAdminProfilePic] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSubastador, setSelectedSubastador] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetchAdminData();
  }, []);

  useEffect(() => {
    const simulatedSubastadores = [
      {
        id: 1,
        nombre: "John Doe",
        estado: "pendiente",
        profilePic: "https://img.freepik.com/foto-gratis/hombre-feliz-guapo_144627-6288.jpg?t=st=1721927160~exp=1721930760~hmac=ce729002e26f60e1c7b81922fbbde4784bcab1a97c77d382294c6a9d4d337800&w=740",
        idFront: "https://imagizer.imageshack.com/img923/8783/albFg0.jpg",
        idBack:"https://imagizer.imageshack.com/img924/5734/ARXjdg.jpg",
        numID: "123456789",
      },
      {
        id: 2,
        nombre: "Jane Smith",
        estado: "pendiente",
        profilePic: "https://img.freepik.com/foto-gratis/hombre-esta-feliz-sonriendo-ojos_114579-13387.jpg?t=st=1721927248~exp=1721930848~hmac=cc82ed5270cf254cf3c1686beba6289c81aaa44ab376a3ca08ea05e14d27c1a9&w=740",
        idFront: "https://imagizer.imageshack.com/img923/8783/albFg0.jpg",
        idBack:"https://imagizer.imageshack.com/img924/5734/ARXjdg.jpg",
        numID: "987654321",
      },
      {
        id: 3,
        nombre: "Michael Johnson",
        estado: "pendiente",
        profilePic: "https://img.freepik.com/foto-gratis/retrato-modelo-masculino-atractivo-feliz-aspecto-amigable-bigote-barba-gafas-transparentes-moda-sonriendo-ampliamente-mientras-escucha-historia-interesante-o-espera-que-mama-de-comer_176420-22400.jpg?t=st=1721927350~exp=1721930950~hmac=452ebd131075275ebc90d181ddcab5f6278c3bb89b0b111f4c12d769f76b9555&w=740",
        idFront: "https://imagizer.imageshack.com/img923/8783/albFg0.jpg",
        idBack:"https://imagizer.imageshack.com/img924/5734/ARXjdg.jpg",
        numID: "567891234",
      },
    ];
    setSubastadores(simulatedSubastadores);
  }, []);

  const fetchAdminData = async () => {
    try {
      const adminData = {
        name: "Dylan Mike",
        profilePic: "https://img.freepik.com/foto-gratis/retrato-sonriente-joven-encantador-camiseta-gris-pie-contra-fondo-liso_23-2148213406.jpg?t=st=1721927291~exp=1721930891~hmac=6e6773bca9835a0945f620174a558e38fcd43b7ffdbba55b9e30300209e8dd05&w=740",
      };
      setAdminName(adminData.name);
      setAdminProfilePic(adminData.profilePic);
    } catch (error) {
      console.error("Error fetching admin data:", error);
    }
  };

  const handleSidebarItemClick = (content) => {
    setContentToShow(content);
  };

  const handleAceptarSubastador = async (subastadorId) => {
    try {
      console.log(`Subastador aceptado con ID: ${subastadorId}`);
    } catch (error) {
      console.error("Error al aceptar el subastador:", error);
    }
  };

  const handleRechazarSubastador = async (subastadorId) => {
    try {
      console.log(`Subastador rechazado con ID: ${subastadorId}`);
    } catch (error) {
      console.error("Error al rechazar el subastador:", error);
    }
  };

  const openModal = (subastador) => {
    setSelectedSubastador(subastador);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSubastador(null);
    setModalOpen(false);
  };

  const renderMainContent = () => {
    switch (contentToShow) {
      case "verificarSubastador":
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              Subastadores Pendientes de Verificación
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-auto divide-y divide-gray-200">
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
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 cursor-pointer"
                        onClick={() => openModal(subastador)}
                      >
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
      <button
        className="lg:hidden p-4"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <div className="min-h-screen flex flex-row bg-blue-100">
        {/* Sidebar */}
        <div
          className={`w-auto bg-bidcraft-dark p-4 text-white flex flex-col items-center transition-transform transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:flex-shrink-0`}
        >
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
        <div className="w-full lg:w-4/5 p-6">{renderMainContent()}</div>
      </div>

      {/* Nuevo Modal */}
      {selectedSubastador && (
        <TERipple rippleColor="white">
          <button
            type="button"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            onClick={() => setModalOpen(true)}
          >
            Ver Detalles
          </button>
        </TERipple>
      )}
      {selectedSubastador && (
        <TEModal show={modalOpen} setShow={setModalOpen}>
          <TEModalDialog>
            <TEModalContent>
              <TEModalHeader>
                <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                  Detalles del Subastador
                </h5>
                <button
                  type="button"
                  className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </TEModalHeader>
              <TEModalBody>
                <div className="flex justify-center grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex justify-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden">
                      <img
                        src={selectedSubastador.profilePic}
                        alt="Subastador"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Número de ID:</p>
                    <p className="text-sm">{selectedSubastador.numID}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Frontal</p>
                    <div className="w-full h-48 mt-2 rounded-lg overflow-hidden">
                      <img
                        src={selectedSubastador.idFront}
                        alt="ID subida"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Trasera</p>
                    <div className="w-full h-48 mt-2 rounded-lg overflow-hidden">
                      <img
                        src={selectedSubastador.idBack}
                        alt="ID subida"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TEModalBody>
              <TEModalFooter>
                <TERipple rippleColor="light">
                  <button
                    type="button"
                    className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </TERipple>
              </TEModalFooter>
            </TEModalContent>
          </TEModalDialog>
        </TEModal>
      )}

      <Footer />
    </div>
  );
};

export default AdminPage;
