
import React, { useState, useEffect } from "react"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// Initialization for ES Users
import {
    Ripple,
    initTWE,
} from "tw-elements";


function Verification() {
    const navigate = useNavigate();
    useEffect(() => {
        initTWE({ Ripple });
    }, []);


    const [files, setFiles] = useState({
        frontPhoto: null,
        backPhoto: null,
        actualPhoto: null,
    });
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
        const clientId = '66a3c4364f2dc63'; // Reemplaza con tu propio Client ID

        const uploadedLinks = {};

        for (const [key, file] of Object.entries(files)) {
            if (!file) {
                console.error(`No se ha seleccionado una imagen para ${key}`);
                toast.warning(`No se ha seleccionado una imagen para ${key}`)
                return;
            }

            formData.append('image', file);

            try {
                const response = await fetch('https://api.imgur.com/3/image', {
                    method: 'POST',
                    headers: {
                        Authorization: `Client-ID ${clientId}`,
                    },
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    uploadedLinks[key] = `https://i.imgur.com/${data.data.id}.png`;
                } else {
                    console.error('Error al subir la imagen a Imgur');
                }
            } catch (error) {
                console.error('Error de red:', error);
            }

            formData.delete('image'); // Limpiar formData para la siguiente imagen
        }

        const newImageLinks = {
            frontPhoto: uploadedLinks.imagenFrontal || '',
            backPhoto: uploadedLinks.imagenDelantera || '',
            actualPhoto: uploadedLinks.imagenActual || '',
        };




        // Imprimir el JSON en la consola
        console.log('JSON de enlaces de imágenes:', newImageLinks);
        const tryPost = async () => {
            navigate("/home")
            console.log(JSON.stringify(newImageLinks) + "aca suponemos que ya estan las iamgenes")


        }
        tryPost()

    };
    return (
        <section className="text-gray-600 body-font bg-bidcraft-grey">
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
                                <p className="leading-relaxed text-gray-400 ">Para la foto de la identidad frontal, coloca la identidad sobre una superficie plana y bien iluminada.
                                    Asegúrate de que la imagen sea clara y legible, sin reflejos ni sombras. Utiliza una cámara de buena calidad para capturar el
                                    documento, centrado y completamente visible. Verifica que todos los detalles, como el nombre, número de identificación y fotografía,
                                    sean legibles.</p>
                                <div className="max-w-sm">

                                    <label className="block">
                                        <span className="sr-only">Choose profile photo</span>
                                        <input type="file" accept="image/*"
                                            name="frontPhoto"
                                            onChange={handleFileChange} className="block w-full text-sm text-gray-500
        file:me-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-semibold
        file:bg-blue-600 file:text-white
        hover:file:bg-blue-700
        file:disabled:opacity-50 file:disabled:pointer-events-none
        dark:text-neutral-500
        dark:file:bg-blue-500
        dark:hover:file:bg-blue-400
      "/>
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
                                <p className="leading-relaxed text-gray-400">Para la foto de la identidad trasera, repite el proceso anterior. Enfócate en capturar
                                    todos los detalles importantes del reverso, como códigos de barras o marcas de seguridad.
                                    Asegúrate de que no haya reflejos o sombras que puedan dificultar la visualización de la información
                                    y de que la imagen sea nítida.</p>


                                <div className="max-w-sm">

                                    <label className="block">
                                        <span className="sr-only">Choose profile photo</span>
                                        <input type="file" accept="image/*"
                                            name="backPhoto"
                                            onChange={handleFileChange} className="block w-full text-sm text-gray-500
        file:me-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-semibold
        file:bg-blue-600 file:text-white
        hover:file:bg-blue-700
        file:disabled:opacity-50 file:disabled:pointer-events-none
        dark:text-neutral-500
        dark:file:bg-blue-500
        dark:hover:file:bg-blue-400
      "
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
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                                    <circle cx="12" cy="5" r="3"></circle>
                                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                </svg>
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-warning-100 mb-1 text-2xl">Imagen actual suya</h2>
                                <p className="leading-relaxed text-gray-400">Para la foto actual, busca un lugar bien iluminado, preferiblemente con luz natural. Asegúrate de que tu rostro esté completamente visible y centrado, sin obstrucciones como sombreros o gafas de sol. Mantén una expresión neutra o sonriente, mirando directamente a la cámara. Verifica que la imagen sea clara y que tus rasgos faciales sean fáciles de identificar.

                                    .</p>
                                <div className="max-w-sm">

                                    <label className="block">
                                        <span className="sr-only">Choose profile photo</span>
                                        <input type="file" className="block w-full text-sm text-gray-500
        file:me-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-semibold
        file:bg-blue-600 file:text-white
        hover:file:bg-blue-700
        file:disabled:opacity-50 file:disabled:pointer-events-none
        dark:text-neutral-500
        dark:file:bg-blue-500
        dark:hover:file:bg-blue-400
        
      "
                                            accept="image/*"
                                            name="actualPhoto"
                                            onChange={handleFileChange} />
                                    </label>

                                </div>



                            </div>
                        </div>
                    </div>

                    <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-warning-100 mb-1 text-2xl">Neptune</h2>
                                <p className="leading-relaxed text-gray-400">Para la foto actual, busca un lugar bien iluminado, preferiblemente con luz natural. Asegúrate de que tu rostro esté completamente visible y centrado, sin obstrucciones como sombreros o gafas de sol. Mantén una expresión neutra o sonriente, mirando directamente a la cámara. Verifica que la imagen sea clara y que tus rasgos faciales sean fáciles de identificar.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto justify-center mt-11">

                        <button
                            type="submit"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                            className="w-[30%] h-[30%] inline-block rounded bg-primary p-3 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                            Enviar
                        </button></div>

                </form>
            </div>

        </section>

    )



}

export default Verification