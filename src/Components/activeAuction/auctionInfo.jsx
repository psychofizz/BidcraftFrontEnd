import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HeartIcon } from '@heroicons/react/solid';

function AuctionInfo({ name, description, idAuction, userId }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [images, setImages] = useState([
        "https://dummyimage.com/800x600/000/fff",
        "https://dummyimage.com/800x600/333/fff",
        "https://dummyimage.com/800x600/666/fff",
    ]);

    const dataFavorite = {
        user: userId,
        auction: idAuction
    };

    useEffect(() => {
        const stateFavorite = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/favorites/${userId}/${idAuction}/`);
                setIsFavorite(response.data.exists);
            } catch (error) {
                console.error('Error en favorito:', error);
            }
        };
        stateFavorite();
    }, [userId, idAuction]);

    const toggleFavorite = async () => {
        try {
            if (isFavorite) {
                await axios.delete(`http://127.0.0.1:8000/api/favorites/delete/one/${dataFavorite.user}/${dataFavorite.auction}/`);
            } else {
                await axios.post('http://127.0.0.1:8000/api/favorites/create/one/', dataFavorite);
            }
            setIsFavorite(!isFavorite);
        } catch (error) {
            console.error('Error en favorito:', error);
        }
    };

    return (
        <div className="max-w-7xl w-full sm:px-6 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-mono text-white">{name}</h1>
                <button
                    onClick={toggleFavorite}
                    className={`flex items-center px-4 py-2 rounded-full transition-colors ${isFavorite
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                >
                    <HeartIcon className="h-5 w-5 mr-2" />
                    {isFavorite ? 'Remover Favorito' : 'Agregar Favorito'}
                </button>
            </div>

            <div className="mb-8">
                <Carousel
                    showArrows={true}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    className="rounded-lg overflow-hidden shadow-xl"
                >
                    {images.map((img, index) => (
                        <div key={index}>
                            <img src={img} alt={`Item de subasta ${index + 1}`} className="w-full h-[60vh] object-cover" />
                        </div>
                    ))}
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