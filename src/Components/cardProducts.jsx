import React, { useState } from 'react';

function CardProducts({ nombreProducto, descripcion, precio }) {
    const [favorito, setFavorito] = useState(false);

    const toggleFavorito = () => {
        setFavorito(!favorito); // Cambia el estado de favorito al contrario del estado actual
    };

    return (
        <section className="w-full" id="historialSubastas">
            <div className="mt-10 bg-white shadow-2xl overflow-hidden w-full relative">
                {/* Botón de Favoritos */}
                <form className="absolute top-0 right-0 m-4">
                    <button
                        type="button"
                        className={`text-gray-600 hover:text-red-500 focus:outline-none ${
                            favorito ? 'text-red-500' : ''
                        }`}
                        onClick={toggleFavorito}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18l-1.45-1.32C3.22 12.49 0 9.02 0 5.5 0 2.42 2.42 0 5.5 0c1.54 0 3.04.73 4 1.95.96-1.22 2.46-1.95 4-1.95 3.08 0 5.5 2.42 5.5 5.5 0 3.52-3.22 6.99-8.55 11.18L10 18z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </form>

                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img
                            className="h-48 w-full object-cover md:h-full md:w-full"
                            src="https://loremflickr.com/g/320/240/team"
                            alt="example"
                        />
                    </div>
                    <div className="p-8 xs:p-4 lg:p-8 w-full">
                        <div className="h-5/6">
                            <h4 className="text-4xl">
                                {nombreProducto} - {descripcion}
                            </h4>
                            <p className="text-2xl">{precio}</p>
                        </div>
                        <div className="text-right">Satisfacción *****</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CardProducts;
