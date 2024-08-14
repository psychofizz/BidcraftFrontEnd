import React, { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HeartIcon } from '@heroicons/react/solid';
import {useLocation } from "react-router-dom";


function AuctionInfo({ name, description, imgUrl, imageUrl, toggleFavorite, isFavorite, end_time, is_active }) {
    const [images, setImages] = useState([]);
  
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean); // Divide el pathname en segmentos y filtra los vacíos

    useEffect(() => {
        // Crear un arreglo con las URLs de las imágenes disponibles
        const newImages = [];
        if (imgUrl && imgUrl.image_url) {
            newImages.push(imgUrl.image_url);
        }
        if (imageUrl) {
            newImages.push(imageUrl);
        }
        setImages(newImages);
    }, [imgUrl, imageUrl]);

    return (
        <div className="max-w-7xl w-full sm:px-6 py-8">
            <div className="flex flex-wrap justify-between items-center mb-6 ">

                <h1 className="text-3xl font-mono text-white flex items-center ">
                    {name}
                    <div>
   
                    {(pathSegments[0] === "create-auction" || pathSegments[0] === "editAuction") ? (
    <div className="text-white"></div>
) : (
    is_active ? (
        <span className="relative flex h-3 w-3 ml-2 mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
    ) : (
        <h1 className="ml-2 text-center text-red-500">(Subasta Finalizada)</h1>
    )
)}


</div>
                  

                </h1>
{/* <div className="w-full md:w-auto "><button
                    onClick={toggleFavorite}
                    className={`flex items-center  px-4 py-2 rounded-full transition-colors ${isFavorite
                        ? 'bg-[#a61c1c] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                >
                    <HeartIcon className="h-5 w-5 mr-2" />
                    {isFavorite ? 'Remover Favorito' : 'Agregar Favorito'}
                </button></div> */}
                
            </div>
            <h1 className="font-mono text-white">Fecha de finalizacion     {end_time}</h1>

            <div className="mb-8 relative">
    <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        className="rounded-lg overflow-hidden shadow-xl"
    >
        {images.length > 0 ? (
            images.map((img, index) => (
                <div key={index} className="w-full h-[60vh] flex items-center justify-center bg-gray-100 relative">
                    <img
                        src={img}
                        alt={`Item de subasta ${index + 1}`}
                        className="object-contain w-full h-full"
                    />
                    <button
                        onClick={toggleFavorite}
                        className={`absolute top-0 right-0 m-4 flex items-center px-4 py-2 rounded-full transition-colors ${isFavorite
                            ? 'bg-[#a61c1c] text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        <HeartIcon className="h-5 w-5 mr-2" />
                        {isFavorite ? 'Remover Favorito' : 'Agregar Favorito'}
                    </button>
                </div>
            ))
        ) : (
            <div className="w-full h-[60vh] flex items-center justify-center">
                <p className="text-gray-400">No hay imágenes disponibles</p>
            </div>
        )}
    </Carousel>
</div>



            <div className="bg-bidcraft-grey-2 shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h2 className="text-2xl font-light text-white">Descripción</h2>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <div className="sm:px-6 sm:py-5">
                        <p className="text-white leading-relaxed">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuctionInfo;
