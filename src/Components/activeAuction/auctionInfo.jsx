import React, { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HeartIcon } from '@heroicons/react/solid';


function AuctionInfo({ name, description, imgUrl, imageUrl, toggleFavorite, isFavorite,end_time,is_active }) {
    const [images, setImages] = useState([]);

   
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
            <div className="flex justify-between items-center mb-6">
      
            <h1 className="text-3xl font-mono text-white flex items-center">
  {name}     

  {is_active ?  <span class="relative flex h-3 w-3 ml-2 mr-1">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span> : <h1 className="ml-2  text-red-500">(Subasta Finalizada)</h1>}
 
</h1>
               
                <button
                    onClick={toggleFavorite}
                    className={`flex items-center px-4 py-2 rounded-full transition-colors ${isFavorite
                        ? 'bg-[#a61c1c] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                >
                    <HeartIcon className="h-5 w-5 mr-2" />
                    {isFavorite ? 'Remover Favorito' : 'Agregar Favorito'}
                </button>
            </div>
            <h1 className="font-mono text-white">Fecha de finalizacion     {end_time}</h1>
        
            <div className="mb-8">
    <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        className="rounded-lg overflow-hidden shadow-xl"
    >
        {images.length > 0 ? (
            images.map((img, index) => (
                <div key={index} className="w-full h-[60vh] flex items-center justify-center bg-gray-100">
                    <img
                        src={img}
                        alt={`Item de subasta ${index + 1}`}
                        className="object-contain w-full h-full"
                    />
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
