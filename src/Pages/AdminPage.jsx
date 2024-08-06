import React, { useState, useEffect } from "react";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";
import { HiUserGroup, HiDocument, HiShieldCheck } from "react-icons/hi";
import axios from "axios";
import { toast } from "react-toastify";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";

const AdminPage = () => {
  const [contentToShow, setContentToShow] = useState(null);
  const [subastadores, setSubastadores] = useState([]);
  const [subastadoresaAccepted, setSubastadoresAccepted] = useState([]);
  const [subastadoresaRefused, setSubastadoresRefused] = useState([]);

  const [adminName, setAdminName] = useState("");
  const [adminProfilePic, setAdminProfilePic] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSubastador, setSelectedSubastador] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  //const [currentPage, setCurrentPage] = useState(1);
  //const [itemsPerPage] = useState(5);

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    try {
      const adminData = {
        name: "Dylan Mike",
        profilePic:
          "https://img.freepik.com/foto-gratis/retrato-sonriente-joven-encantador-camiseta-gris-pie-contra-fondo-liso_23-2148213406.jpg?t=st=1721927291~exp=1721930891~hmac=6e6773bca9835a0945f620174a558e38fcd43b7ffdbba55b9e30300209e8dd05&w=740",
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


  const openModal = (subastador) => {
    setSelectedSubastador(subastador);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSubastador(null);
    setModalOpen(false);
  };
  //-------------------------------------------------------Aca obtenemos los usuarios pendientes  a verficiar---------------------------------
  const getUsersPending = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/kyc/status/1/`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`, // Incluir el token en los headers
          },
        }
      );

      const users = response.data; // Supongo que la respuesta contiene un array de usuarios

      const mappedSubastadores = users.map((user) => ({
        id: user.user.id,
        nombre: `${user.user.first_name} ${user.user.last_name}`,
        estado: user.status.status, // Usar el estado desde la respuesta
        profilePic: user.profile_picture,
        idFront: user.front_id,
        idBack: user.back_id,
        numID: user.user.id,
      }));

      setSubastadores(mappedSubastadores);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  //---------------------------------------------------------------Aca obtenemos los usuarios que fueorn aceptados-----------------------------------------------------
  const getUsersAccepted = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/kyc/status/2/`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`, // Incluir el token en los headers
          },
        }
      );

      const users = response.data; // Supongo que la respuesta contiene un array de usuarios

      const mappedSubastadores = users.map((user) => ({
        id: user.user.id,
        nombre: `${user.user.first_name} ${user.user.last_name}`,
        estado: user.status.status, // Usar el estado desde la respuesta
        profilePic: user.profile_picture,
        idFront: user.front_id,
        idBack: user.back_id,
        numID: user.user.id,
      }));

      setSubastadoresAccepted(mappedSubastadores);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };



  //---------------------------------------------------------------Aca obtenemos los usuarios que fueorn rechazados-----------------------------------------------------
  const getUsersRefused = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/kyc/status/3/`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`, // Incluir el token en los headers
          },
        }
      );

      const users = response.data; // Supongo que la respuesta contiene un array de usuarios

      const mappedSubastadores = users.map((user) => ({
        id: user.user.id,
        nombre: `${user.user.first_name} ${user.user.last_name}`,
        estado: user.status.status, // Usar el estado desde la respuesta
        profilePic: user.profile_picture,
        idFront: user.front_id,
        idBack: user.back_id,
        numID: user.user.id,
      }));
      setSubastadoresRefused(mappedSubastadores);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    getUsersPending();
    getUsersAccepted();
    getUsersRefused();

  }, []);



  async function editVerification(statusParam, idUsers) {
    try {
      const statusJson = {
        status: statusParam

      }
      await axios.patch(`${process.env.REACT_APP_API_URL}/api/kyc/update/status/${idUsers}/`, statusJson, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        }
      })

      getUsersPending()
      getUsersAccepted();
      getUsersRefused();
      if (statusParam === 2) {
        toast.success("Usuario aceptado");
      }
      if (statusParam === 3) {
        toast.success("Usuario denegado");
      }



    } catch (error) {
      console.log(error)
    }



  }
  const renderMainContent = () => {

    switch (contentToShow) {
      case "verificarSubastador":
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg mx-auto w-full max-w-4xl">
            <h2 className="text-xl font-bold mb-4">
              Subastadores Pendientes de Verificación
            </h2>
            <div className="overflow-hidden">
              <div className="relative overflow-x-auto">
                <table className="w-full table-auto text-sm sm:text-base divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subastador
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Estado
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {subastadores.map((subastador) => (
                      <tr key={subastador.id}>
                        <td
                          className="px-4 py-2 font-medium text-gray-900 cursor-pointer"
                          onClick={() => openModal(subastador)}
                        >
                          {subastador.nombre}
                        </td>
                        <td className="px-4 py-2">
                          {subastador.estado === "En revisión" ? (
                            <span className="bg-yellow-200 text-yellow-800 py-1 px-2 rounded-full text-xs">
                              En revision
                            </span>
                          ) : subastador.estado === "Aprovado" ? (
                            <span className="bg-green-200 text-green-800 py-1 px-2 rounded-full text-xs">
                              Aceptado
                            </span>
                          ) : subastador.estado === "Denegado"(
                            <span className="bg-red-200 text-red-800 py-1 px-2 rounded-full text-xs">
                              Rechazado
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {subastador.estado === "En revisión" && (
                            <>
                              <button
                                onClick={() =>
                                  editVerification(2, subastador.id)
                                }
                                className="bg-green-500 text-white py-1 px-2 rounded-lg mr-2"
                              >
                                Aceptar
                              </button>
                              <button
                                onClick={() =>
                                  editVerification(3, subastador.id)
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
          </div>
        );
      case "Usuarios_verificados":
        return (<div className="bg-white p-6 rounded-lg shadow-lg mx-auto w-full max-w-4xl">
          <h2 className="text-xl font-bold mb-4">
            Subastadores aceptados
          </h2>
          <div className="overflow-hidden">
            <div className="relative overflow-x-auto">
              <table className="w-full table-auto text-sm sm:text-base divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subastador
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {subastadoresaAccepted.map((subastador) => (
                    <tr key={subastador.id}>
                      <td
                        className="px-4 py-2 font-medium text-gray-900 cursor-pointer"
                        onClick={() => openModal(subastador)}
                      >
                        {subastador.nombre}
                      </td>
                      <td className="px-4 py-2">
                        {subastador.estado === "En revisión" ? (
                          <span className="bg-yellow-200 text-yellow-800 py-1 px-2 rounded-full text-xs">
                            En revision
                          </span>
                        ) : subastador.estado === "Aprovado" ? (
                          <span className="bg-green-200 text-green-800 py-1 px-2 rounded-full text-xs">
                            Aceptado
                          </span>
                        ) : subastador.estado === "Denegado"(
                          <span className="bg-red-200 text-red-800 py-1 px-2 rounded-full text-xs">
                            Rechazado
                          </span>
                        )}
                      </td>

                      <td className="px-4 py-2">
                        {subastador.estado === "Aprovado" && (
                          <>

                            <button
                              onClick={() =>
                                editVerification(3, subastador.id)
                              }
                              className="bg-red-500 text-white py-1 px-2 rounded-lg"
                            >
                              Denegar
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
        </div>)
      default:
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg mx-auto w-full max-w-4xl">
            <h2 className="text-xl font-bold mb-4">
              Subastadores rechazados
            </h2>
            <div className="overflow-hidden">
              <div className="relative overflow-x-auto">
                <table className="w-full table-auto text-sm sm:text-base divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subastador
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Estado
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {subastadoresaRefused.map((subastador) => (
                      <tr key={subastador.id}>
                        <td
                          className="px-4 py-2 font-medium text-gray-900 cursor-pointer"
                          onClick={() => openModal(subastador)}
                        >
                          {subastador.nombre}
                        </td>

                        <td className="px-4 py-2">
                          {
                            subastador.estado === "En revisión" ? (
                              <span className="bg-yellow-200 text-yellow-800 py-1 px-2 rounded-full text-xs">
                                En revisión
                              </span>
                            ) : subastador.estado === "Aprobado" ? (
                              <span className="bg-green-200 text-green-800 py-1 px-2 rounded-full text-xs">
                                Aceptado
                              </span>
                            ) : subastador.estado === "Denegado" ? (
                              <span className="bg-red-200 text-red-800 py-1 px-2 rounded-full text-xs">
                                Rechazado
                              </span>
                            ) : (
                              <span className="bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs">
                                Estado desconocido
                              </span>
                            )
                          }


                        </td>
                        <td className="px-4 py-2">
                          {subastador.estado === "Denegado" && (
                            <>
                              <button
                                onClick={() =>
                                  editVerification(2, subastador.id)
                                }
                                className="bg-green-500 text-white py-1 px-2 rounded-lg mr-2"
                              >
                                Integrar
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
          </div>
        );
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
      <MainNavbar adminName={adminName} adminProfilePic={adminProfilePic} />
      <button
        className="lg:hidden p-4 text-gray-600"
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

      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-bidcraft-dark p-4 text-white transform transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 lg:static lg:w-64 lg:flex-shrink-0 z-30`}
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
              className="flex items-center py-2 px-4 rounded-lg bg-blue-600 mb-2 text-white"
            >
              <HiShieldCheck className="w-5 h-5 mr-2" />
              Verificar Subastador
            </button>
            <button
              onClick={() => handleSidebarItemClick("Usuarios_verificados")}
              className="flex items-center py-2 px-4 rounded-lg bg-blue-600 mb-2 text-white"
            >
              <HiUserGroup className="w-5 h-5 mr-2" />
              Usuarios aceptados
            </button>
            <button
              onClick={() => handleSidebarItemClick("moderacionContenidos")}
              className="flex items-center py-2 px-4 rounded-lg bg-blue-600 mb-2 text-white"
            >
              <HiDocument className="w-5 h-5 mr-2" />
              Usuarios Rechazados

            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className={`flex-1 p-6 bg-gray-100 ${sidebarOpen ? "ml-64" : ""}`}>
          {renderMainContent()}
        </div>
      </div>

      {/* Nuevo Modal */}
      {selectedSubastador && (
        <TEModal show={modalOpen} setShow={setModalOpen}>
          <TEModalDialog>
            <TEModalContent className="max-w-lg mx-auto">
              <TEModalBody>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-center items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden">
                      <img
                        src={selectedSubastador.profilePic}
                        alt="Subastador"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-l font-bold">Nombre subastador:</p>
                    <p className="text-sm">{selectedSubastador.nombre}</p>
                    <p className="text-l font-bold">Número de ID:</p>
                    <p className="text-sm">{selectedSubastador.numID}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">ID Frontal</p>
                    <div className="w-full h-48 mt-2 rounded-lg overflow-hidden">
                      <img
                        src={selectedSubastador.idFront}
                        alt="ID frontal"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">ID Trasera</p>
                    <div className="w-full h-48 mt-2 rounded-lg overflow-hidden">
                      <img
                        src={selectedSubastador.idBack}
                        alt="ID trasera"
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
                    className="inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-0 active:bg-blue-700"
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
