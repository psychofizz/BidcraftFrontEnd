import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Components/page-essentials/Footer";
import MainNavbar from "../Components/navBar/mainNavbar";
import Loading from "../Components/loading"



// Initialization for ES Users
import { Ripple, initTWE } from "tw-elements";

function Verification() {
    const navigate = useNavigate();
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(true); // Estado para controlar la carga

    const [files, setFiles] = useState({
        frontPhoto: null,
        backPhoto: null,
        actualPhoto: null,
    });

    //-----------------------------------------------------Este nos ayudara a ver si el usuario ya envio su verificacion------------------
    const StatusUser = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/kyc/detail/`, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                    "Content-Type": "application/json",
                },
            });
            setStatus(response.data.status.status_id);

        } catch (error) {

        } finally {
            setLoading(false); // Termina la carga después de obtener el estado
        }
    };

    //------------------------------------------------------------------------------------------------------------------------------
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFiles((prevFiles) => ({
            ...prevFiles,
            [name]: files[0],
        }));
    };

    const handleImageUpload = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        const clientId = "66a3c4364f2dc63"; // Reemplaza con tu propio Client ID

        const uploadedLinks = {};

        for (const [key, file] of Object.entries(files)) {
            if (!file) {
                toast.warning(`No se ha seleccionado una imagen para ${key}`);
                return;
            }

            formData.append("image", file);

            try {
                const response = await fetch("https://api.imgur.com/3/image", {
                    method: "POST",
                    headers: {
                        Authorization: `Client-ID ${clientId}`,
                    },
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    uploadedLinks[key] = `https://i.imgur.com/${data.data.id}.png`;
                } else {
                    console.error("Error al subir la imagen a Imgur");
                }
            } catch (error) {
                console.error("Error de red:", error);
            }

            formData.delete("image"); // Limpiar formData para la siguiente imagen
        }

        const newImageLinks = {
            front_id: uploadedLinks.frontPhoto || "",
            back_id: uploadedLinks.backPhoto || "",
            profile_picture: uploadedLinks.actualPhoto || "",
        };

        // Imprimir el JSON en la consola

        const tryPost = async () => {

            try {
                await axios.post(`${process.env.REACT_APP_API_URL}/api/kyc/create/one/`, newImageLinks, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                    },
                });
                toast.success("Verificación enviada");
                navigate("/home");
            } catch (error) {
                console.error('Error al enviar las imágenes:', error);
            }
        };
        tryPost();
    };

    useEffect(() => {
        initTWE({ Ripple });
        StatusUser();
    }, []);

    // Añadido 'status' como dependencia para que actualice cuando cambie

    return (
        <>

            <div className="bg-bidcraft-grey flex flex-col min-h-screen">
                <MainNavbar />
                <section className="flex-grow text-gray-600 body-font bg-bidcraft-grey h-full">
                    {loading ? (
                        <div className="grid place-content-center h-[65vh] "><Loading /></div>

                        // Muestra cargando mientras espera el estado
                    ) : (
                        status === 1 ? (
                            <div className="grid place-content-center h-[65vh] ">
                                <div className="flex justify-center content-center text-white text-4xl">
                                    <h1>Su solicitud esta siendo revisada </h1>
                                </div>
                            </div>
                        ) :
                            status === 2 ? (
                                <div className="grid place-content-center h-[65vh]">
                                    <div className="flex justify-center content-center text-white text-4xl">
                                        <h1>Su solicitud fue aprovada </h1>
                                    </div>
                                </div>
                            ) :
                                status === 3 ? (
                                    <div className="grid place-content-center h-[65vh]">
                                        <div className="flex justify-center content-center text-white text-4xl">
                                            <h1>Su solicitud fue rechazada </h1>
                                        </div>
                                    </div>
                                )
                                    : (
                                        <div className="container px-5 py-24 mx-auto flex flex-wrap">
                                            <form onSubmit={handleImageUpload}>
                                                <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                                                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                                    </div>
                                                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                                                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                                        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 className="font-medium title-font text-warning-100 mb-1 text-2xl">Imagen Frontal</h2>
                                                            <p className="leading-relaxed text-gray-400">
                                                                Para la foto de la identidad frontal, coloca la identidad sobre una superficie plana y bien iluminada. Asegúrate de que la imagen sea clara y legible, sin reflejos ni sombras. Utiliza una cámara de buena calidad para capturar el documento, centrado y completamente visible. Verifica que todos los detalles, como el nombre, número de identificación y fotografía, sean legibles.
                                                            </p>
                                                            <div className="max-w-sm">
                                                                <label className="block">
                                                                    <span className="sr-only">Choose profile photo</span>
                                                                    <input
                                                                        type="file"
                                                                        accept="image/*"
                                                                        name="frontPhoto"
                                                                        onChange={handleFileChange}
                                                                        className="block w-full text-sm text-gray-500
                          file:me-4 file:py-2 file:px-4
                          file:rounded-lg file:border-0
                          file:text-sm file:font-semibold
                          file:bg-blue-600 file:text-white
                          hover:file:bg-blue-700
                          file:disabled:opacity-50 file:disabled:pointer-events-none
                          dark:text-neutral-500
                          dark:file:bg-blue-500
                          dark:hover:file:bg-blue-400"
                                                                    />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                                                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                                    </div>
                                                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                                                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                                        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 className="font-medium title-font text-warning-100 mb-1 text-2xl">Imagen Trasera</h2>
                                                            <p className="leading-relaxed text-gray-400">
                                                                Para la foto de la identidad trasera, repite el proceso anterior. Enfócate en capturar todos los detalles que puedan ser necesarios para la verificación, como códigos de barras, hologramas o información adicional. Asegúrate de que la imagen sea clara y nítida, evitando cualquier tipo de reflejo o distorsión.
                                                            </p>
                                                            <div className="max-w-sm">
                                                                <label className="block">
                                                                    <span className="sr-only">Choose profile photo</span>
                                                                    <input
                                                                        type="file"
                                                                        accept="image/*"
                                                                        name="backPhoto"
                                                                        onChange={handleFileChange}
                                                                        className="block w-full text-sm text-gray-500
                          file:me-4 file:py-2 file:px-4
                          file:rounded-lg file:border-0
                          file:text-sm file:font-semibold
                          file:bg-blue-600 file:text-white
                          hover:file:bg-blue-700
                          file:disabled:opacity-50 file:disabled:pointer-events-none
                          dark:text-neutral-500
                          dark:file:bg-blue-500
                          dark:hover:file:bg-blue-400"
                                                                    />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                                                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                                    </div>
                                                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
                                                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                                        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                                                                <circle cx="12" cy="5" r="3"></circle>
                                                                <path d="M12 22v-4m0-4v-4"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 className="font-medium title-font text-warning-100 mb-1 text-2xl">Foto Personal</h2>
                                                            <p className="leading-relaxed text-gray-400">
                                                                Para la foto personal, busca un fondo neutro y bien iluminado. Asegúrate de que tu rostro esté completamente visible, mirando directamente a la cámara. Evita el uso de accesorios que puedan ocultar tu rostro y verifica que la imagen sea clara y nítida.
                                                            </p>
                                                            <div className="max-w-sm">
                                                                <label className="block">
                                                                    <span className="sr-only">Choose profile photo</span>
                                                                    <input
                                                                        type="file"
                                                                        accept="image/*"
                                                                        name="actualPhoto"
                                                                        onChange={handleFileChange}
                                                                        className="block w-full text-sm text-gray-500
                          file:me-4 file:py-2 file:px-4
                          file:rounded-lg file:border-0
                          file:text-sm file:font-semibold
                          file:bg-blue-600 file:text-white
                          hover:file:bg-blue-700
                          file:disabled:opacity-50 file:disabled:pointer-events-none
                          dark:text-neutral-500
                          dark:file:bg-blue-500
                          dark:hover:file:bg-blue-400"
                                                                    />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-center mt-5">
                                                    <button
                                                        type="submit"
                                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                        disabled={status === 1}
                                                    >
                                                        {status === 1 ? "Enviado" : "Enviar"}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    )
                    )}
                </section>
                <Footer />
            </div>

        </>
    );
}

export default Verification;
