// src/Auctions.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import LoadingAuctionItems from "../Components/auction/LoadingAuctionItem";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";

const Auctions = () => {
  const [auctions, setAuctions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/auctions/win/`, {
            headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}` // Incluir el token en los headers
            }
          }
        );
        setAuctions(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchAuctions();
  }, []);

  const content = () => {
    if (loading) {
      return <div className="min-h-screen bg-bidcraft-grey"><LoadingAuctionItems count={10} /></div>;
    }

    if (error) {
      return <div>Error al cargar las subastas: {error.message}</div>;
    }

    if (auctions.length === 0) {
      return <div className="p-4 text-center">No tienes subastas ganadas en este momento.</div>;
    }

    return (
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-bidcraft-grey">
        {auctions.map((auction) => (
          <Link key={auction.completed_auction_id} to={`/payAuction/${auction.completed_auction_id}`}>
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-[1.040] hover:shadow-2xl shadow-xl p-4 bg-bidcraft-dark">
              <img
                src={auction.auction.images[0]?.image_url}
                alt={auction.auction.name}
                className="w-full h-48 object-cover mb-2"
              />
              <h2 className="text-lg font-bold text-warning-100">{auction.auction.name}</h2>
              <p className="text-gray-700">{auction.auction.description}</p>
              <p className="text-gray-500">
                Categoría: {auction.auction.category.category_name}
              </p>
              <p className="text-gray-900 font-bold">
                Precio más alto: ${auction.highest_bid}
              </p>
              <p className="text-gray-600">
                Fecha de finalización: {new Date(auction.date_completed).toLocaleDateString()}
              </p>
              <p className="text-green-600">
                {auction.is_paid ? "Pagado" : "Pendiente de pago"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <>
      <MainNavbar />
      {content()}
      <Footer />
    </>
  );
};

export default Auctions;
