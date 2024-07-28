import React, { useState, useEffect } from "react";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";
import { HiUserGroup, HiDocument, HiShieldCheck } from "react-icons/hi";
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
  const [adminName, setAdminName] = useState("");
  const [adminProfilePic, setAdminProfilePic] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSubastador, setSelectedSubastador] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    fetchAdminData();
  }, []);

  useEffect(() => {
    const simulatedSubastadores = [
      {
        id: 1,
        nombre: "John Doe",
        estado: "pendiente",
        profilePic:
          "https://img.freepik.com/foto-gratis/hombre-feliz-guapo_144627-6288.jpg?t=st=1721927160~exp=1721930760~hmac=ce729002e26f60e1c7b81922fbbde4784bcab1a97c77d382294c6a9d4d337800&w=740",
        idFront: "https://imagizer.imageshack.com/img923/8783/albFg0.jpg",
        idBack: "https://imagizer.imageshack.com/img924/5734/ARXjdg.jpg",
        numID: "123456789",
      },
      {
        id: 2,
        nombre: "Jane Smith",
        estado: "pendiente",
        profilePic:
          "https://img.freepik.com/foto-gratis/hombre-esta-feliz-sonriendo-ojos_114579-13387.jpg?t=st=1721927248~exp=1721930848~hmac=cc82ed5270cf254cf3c1686beba6289c81aaa44ab376a3ca08ea05e14d27c1a9&w=740",
        idFront: "https://imagizer.imageshack.com/img923/8783/albFg0.jpg",
        idBack: "https://imagizer.imageshack.com/img924/5734/ARXjdg.jpg",
        numID: "987654321",
      },
      {
        id: 3,
        nombre: "Michael Johnson",
        estado: "pendiente",
        profilePic:
          "https://img.freepik.com/foto-gratis/retrato-modelo-masculino-atractivo-feliz-aspecto-amigable-bigote-barba-gafas-transparentes-moda-sonriendo-ampliamente-mientras-escucha-historia-interesante-o-espera-que-mama-de-comer_176420-22400.jpg?t=st=1721927350~exp=1721930950~hmac=452ebd131075275ebc90d181ddcab5f6278c3bb89b0b111f4c12d769f76b9555&w=740",
        idFront: "https://imagizer.imageshack.com/img923/8783/albFg0.jpg",
        idBack: "https://imagizer.imageshack.com/img924/5734/ARXjdg.jpg",
        numID: "567891234",
      },
      {
        id: 4,
        nombre: "Emily Davis",
        estado: "pendiente",
        profilePic:
          "https://img.freepik.com/foto-gratis/mujer-sonriendo-vestido-elegante_1150-11694.jpg?t=st=1721932484~exp=1721936084~hmac=7f91740550e7b78a94fdc758d8376dbfb8cddc05fc1e6e501adce092ef42a9fd",
        idFront: "https://imagizer.imageshack.com/img923/8783/albFg0.jpg",
        idBack: "https://imagizer.imageshack.com/img924/5734/ARXjdg.jpg",
        numID: "345678901",
      },
      {
        id: 5,
        nombre: "David Wilson",
        estado: "pendiente",
        profilePic:
          "https://img.freepik.com/foto-gratis/hombre-sonriente-camisa-casual_1150-11822.jpg?t=st=1721932598~exp=1721936198~hmac=8c6f7377a080e9144cda5e1b4e6e8f0ff5426d63762b39387229ae368e4d6a2b",
        idFront: "https://imagizer.imageshack.com/img923/8783/albFg0.jpg",
        idBack: "https://imagizer.imageshack.com/img924/5734/ARXjdg.jpg",
        numID: "456789012",
      },
      {
        id: 6,
        nombre: "Sophia Brown",
        estado: "pendiente",
        profilePic:
          "https://img.freepik.com/foto-gratis/mujer-feliz-sonriendo-siendo-retrato_1150-11830.jpg?t=st=1721932710~exp=1721936310~hmac=de5bb418a1e83d9d671dc63d55b9062c8a3c4b5011a027c2c62398f9e3f4ae9d",
        idFront: "https://imagizer.imageshack.com/img923/8783/albFg0.jpg",
        idBack: "https://imagizer.imageshack.com/img924/5734/ARXjdg.jpg",
        numID: "567890123",
      },
      {
        id: 7,
        nombre: "James Lee",
        estado: "pendiente",
        profilePic:
          "https://img.freepik.com/foto-gratis/hombre-sonriente-barba-corta_1150-12200.jpg?t=st=1721932818~exp=1721936418~hmac=b55b6f1c09854839f89ddfdc7b373fdc4a7d9296828fdf70a4d134e9b11e6c11",
        idFront: "https://imagizer.imageshack.com/img923/8783/albFg0.jpg",
        idBack: "https://imagizer.imageshack.com/img924/5734/ARXjdg.jpg",
        numID: "678901234",
      },
      {
        id: 8,
        nombre: "Olivia Martinez",
        estado: "pendiente",
        profilePic:
          "https://img.freepik.com/foto-gratis/mujer-sonriente-con-pelo-largo_1150-12100.jpg?t=st=1721932915~exp=1721936515~hmac=9a4b9e9350f5f09f2f435e0a4235d8d4a00a184d6de5f55027d73ef87f7f4f62",
        idFront: "https://imagizer.imageshack.com/img923/8783/albFg0.jpg",
        idBack: "https://imagizer.imageshack.com/img924/5734/ARXjdg.jpg",
        numID: "789012345",
      },
      {
        id: 9,
        nombre: "William Garcia",
        estado: "pendiente",
        profilePic:
          "https://img.freepik.com/foto-gratis/hombre-rubio-sonriendo_1150-12190.jpg?t=st=1721933034~exp=1721936634~hmac=45c7ff59bdf6c799a0e1f5d8d37e019c0c3f8557c5f0c8ae6e5d14c7e8a55b2",
        idFront: "https://imagizer.imageshack.com/img923/8783/albFg0.jpg",
        idBack: "https://imagizer.imageshack.com/img924/5734/ARXjdg.jpg",
        numID: "890123456",
      },
      {
        id: 10,
        nombre: "Isabella Thompson",
        estado: "pendiente",
        profilePic:
          "https://img.freepik.com/foto-gratis/mujer-sonriente-pelo-rizado_1150-12345.jpg?t=st=1721933146~exp=1721936746~hmac=1e4a36b746d3bb4b903b2c929fbf3402e9c3cf3f828d76a92b2954bbd53ad8d6",
        idFront: "https://imagizer.imageshack.com/img923/8783/albFg0.jpg",
        idBack: "https://imagizer.imageshack.com/img924/5734/ARXjdg.jpg",
        numID: "901234567",
      },
      {
        id: 11,
        nombre: "Ethan White",
        estado: "pendiente",
        profilePic:
          "https://img.freepik.com/foto-gratis/hombre-sonriente-camiseta-blanca_1150-12450.jpg?t=st=1721933252~exp=1721936852~hmac=134f5172f20d44f5e095081fe631a527f57d99b9f089bdf7d50195d09a44ed91",
        idFront: "https://imagizer.imageshack.com/img923/8783/albFg0.jpg",
        idBack: "https://imagizer.imageshack.com/img924/5734/ARXjdg.jpg",
        numID: "012345678",
      },
      {
        id: 12,
        nombre: "Ava Robinson",
        estado: "pendiente",
        profilePic:
          "https://img.freepik.com/foto-gratis/mujer-sonriente-morada-sombrero_1150-12520.jpg?t=st=1721933358~exp=1721936958~hmac=cad6a82f4a282d6ae4312b207e9c52800598b5b593d86583f08e35d4b8474b5d",
        idFront: "https://imagizer.imageshack.com/img923/8783/albFg0.jpg",
        idBack: "https://imagizer.imageshack.com/img924/5734/ARXjdg.jpg",
        numID: "123456780",
      },
      {
        id: 13,
        nombre: "Liam Harris",
        estado: "pendiente",
        profilePic:
          "https://img.freepik.com/foto-gratis/hombre-sonriente-ojos-verdes_1150-12630.jpg?t=st=1721933463~exp=1721937063~hmac=7a4e5fba2e2d9b20f71c681d6b0a93c5dfe7cfc4776e1cbe94a418a4cbf8c97c",
        idFront: "https://imagizer.imageshack.com/img923/8783/albFg0.jpg",
        idBack: "https://imagizer.imageshack.com/img924/5734/ARXjdg.jpg",
        numID: "234567890",
      },
      {
        id: 14,
        nombre: "Mia Clark",
        estado: "pendiente",
        profilePic:
          "https://img.freepik.com/foto-gratis/mujer-sonriente-pelo-largo_1150-12740.jpg?t=st=1721933571~exp=1721937171~hmac=6e9e5fca145d3f9c3b587477d19c3b3a0a6dc050f9b0581ab2b4f2bfb3c10b9d",
        idFront: "https://imagizer.imageshack.com/img923/8783/albFg0.jpg",
        idBack: "https://imagizer.imageshack.com/img924/5734/ARXjdg.jpg",
        numID: "345678900",
      },
    ];
    setSubastadores(simulatedSubastadores);
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

  const handleAceptarSubastador = (subastadorId) => {
    setSubastadores((prevSubastadores) =>
      prevSubastadores.map((subastador) =>
        subastador.id === subastadorId
          ? { ...subastador, estado: "aceptado" }
          : subastador
      )
    );
  };

  const handleRechazarSubastador = (subastadorId) => {
    setSubastadores((prevSubastadores) =>
      prevSubastadores.map((subastador) =>
        subastador.id === subastadorId
          ? { ...subastador, estado: "rechazado" }
          : subastador
      )
    );
  };

  const openModal = (subastador) => {
    setSelectedSubastador(subastador);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSubastador(null);
    setModalOpen(false);
  };

  // Función para manejar el cambio de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Obtener los subastadores para la página actual
  const indexOfLastSubastador = currentPage * itemsPerPage;
  const indexOfFirstSubastador = indexOfLastSubastador - itemsPerPage;
  const currentSubastadores = subastadores.slice(
    indexOfFirstSubastador,
    indexOfLastSubastador
  );

  // Calcular el número total de páginas
  const totalPages = Math.ceil(subastadores.length / itemsPerPage);

  const renderMainContent = () => {
    switch (contentToShow) {
      case "verificarSubastador":
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg mx-auto max-w-4xl">
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
                          {subastador.estado === "pendiente" ? (
                            <span className="bg-yellow-200 text-yellow-800 py-1 px-2 rounded-full text-xs">
                              Pendiente
                            </span>
                          ) : subastador.estado === "aceptado" ? (
                            <span className="bg-green-200 text-green-800 py-1 px-2 rounded-full text-xs">
                              Aceptado
                            </span>
                          ) : (
                            <span className="bg-red-200 text-red-800 py-1 px-2 rounded-full text-xs">
                              Rechazado
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-2">
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
          </div>
        );
      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6 mx-auto max-w-4xl">
            {/* Contenido predeterminado */}
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
          className={`fixed inset-y-0 left-0 w-64 bg-bidcraft-dark p-4 text-white transform transition-transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
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
              onClick={() => handleSidebarItemClick("gestionUsuarios")}
              className="flex items-center py-2 px-4 rounded-lg bg-blue-600 mb-2 text-white"
            >
              <HiUserGroup className="w-5 h-5 mr-2" />
              Gestión de Usuarios
            </button>
            <button
              onClick={() => handleSidebarItemClick("moderacionContenidos")}
              className="flex items-center py-2 px-4 rounded-lg bg-blue-600 mb-2 text-white"
            >
              <HiDocument className="w-5 h-5 mr-2" />
              Contenidos
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
