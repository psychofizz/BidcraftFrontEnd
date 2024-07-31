import React, { useState, useEffect } from "react";
import axios from 'axios';

const Item = ({ auctionId, userId, initialIsFavorite, onToggleFavorite }) => {
  const [auctionData, setAuctionData] = useState(null);
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);



  useEffect(() => {
    const fetchAuctionData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/auction/show/one/${auctionId}`);
        setAuctionData(response.data);

      } catch (error) {
        console.error('Error de item de subasta:', error);
      }
    };
    fetchAuctionData();
  }, [auctionId]);


  const toggleFavorite = async () => {
    const dataFavorite = {
      user: userId,
      auction: auctionId
    };

    try {
      if (isFavorite) {

        await axios.delete(

          `${process.env.REACT_APP_API_URL}/api/favorites/delete/one/auction/${dataFavorite.auction}/`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}` // Incluir el token en los headers
            }
          }
        );
      } else {

        await axios.post(
          `${process.env.REACT_APP_API_URL}/api/favorites/auction/${dataFavorite.auction}/`,
          {}, // Cuerpo de la solicitud (vacío en este caso)
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}` // Incluir el token en los headers
            }
          }
        );
      }
      setIsFavorite(!isFavorite);
      onToggleFavorite(auctionId, !isFavorite);
    } catch (error) {
      console.error('Error en favorito:', error);
    }
  };

  if (!auctionData) return <div className="p-4">Cargando</div>;

  return (
    <div className="flex items-center border-b border-gray-200 py-4">
      <img src={auctionData.images.length > 0 ? auctionData.images[0].image_url : ''} alt="Imagen de subasta" className="w-24 h-24 object-cover mr-4 rounded-lg" />
      <div className="flex-grow">
        <h2 className="text-lg font-semibold">{auctionData.name}</h2>
        <p className="font-light truncate pr-2">{auctionData.description}</p>

      </div>
      <button
        onClick={toggleFavorite}
        className={`px-4 py-2 rounded ${isFavorite
          ? 'bg-red-500 hover:bg-red-600 text-white'
          : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
          }`}
      >
        {isFavorite ? 'Remover' : 'Agregar'}
      </button>
    </div>
  );
};

const FavoritesModal = ({ handleClose, show, userId }) => {

  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (show) {
      fetchFavorites();
    }
  }, [show, userId]);


  const getUserId = () => {
    const userString = localStorage.getItem("User");
    if (userString) {
      const user = JSON.parse(userString);
      return user.id || "Usuario";
    }
    return "Usuario";
  };

  const fetchFavorites = async () => {
    setLoading(true);
    setError(null);
    try {


      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/favorites/user/`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`, // Incluir el token en los headers
        }
      });
      setFavorites(response.data);
    } catch (error) {
      console.error('Error fetching favorites:', error);
      setError('Failed to fetch favorites. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleToggleFavorite = (auctionId, newIsFavorite) => {
    if (!newIsFavorite) {
      setFavorites(favorites.filter(fav => fav.auction !== auctionId));
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-4 flex justify-between items-center bg-bidcraft-main">
          <h2 className="text-2xl font-bold">Favoritos</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex-grow overflow-y-auto p-4 bg-bidcraft-dark">
          {loading && <p className="text-center py-4">Cargando Favoritos</p>}
          {error && <p className="text-center py-4 text-red-500">{error}</p>}
          {!loading && !error && favorites.length === 0 && (
            <p className="text-center py-4">No tenes favoritos aun</p>
          )}
          {!loading && !error && favorites.map((favorite) => (
            < Item
              key={favorite.favorite_id}
              auctionId={favorite.auction.auction_id}
              userId={getUserId()}
              initialIsFavorite={true}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default FavoritesModal;