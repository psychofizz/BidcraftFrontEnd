import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import LoadingPage from '../loading';
import axios from 'axios';
import Modal from "../wonAuction/modalPay";

const AuctionList = ({ auctions, loadingMyAuction, openModal }) => {
    const [reviewStatus, setReviewStatus] = useState({});
    const jwt = JSON.parse(localStorage.getItem("token"));
    const [factura, setFactura] = useState(null); // Cambiado a null por defecto
    const [isModalOpen2, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const openModal2 = async (idAuction) => {
        getFactura(idAuction) // Establecer la subasta actual
        setIsModalOpen(true);
        setLoading(true)
    };

    const closeModal2 = () => {
        setFactura(null);
        setIsModalOpen(false);

    }



    // Función para obtener la factura de cada subasta
    const getFactura = useCallback(
        async (idAuction) => {
            try {
                const infoFactura = await axios.get(`${process.env.REACT_APP_API_URL}/api/purchases/auction/${idAuction}/`, {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    }
                });
                setFactura(infoFactura.data.data[0]); 
                setLoading(false)// Almacenar la factura en el estado
            } catch (error) {
                console.error("Error fetching factura:", error);
                setLoading(false)// Almacenar la factura en el estado
            }
        }, [jwt])

    // Abrir el modal cuando `currentAuctionId` cambia y `factura` está lista


    // Lógica para obtener el estado de las reseñas
    useEffect(() => {
        const fetchReviewStatus = async () => {
            if (Array.isArray(auctions)) {
                for (const auction of auctions) {
                    try {
                        const response = await axios.get(
                            `${process.env.REACT_APP_API_URL}/api/reviews/auction/${auction.auction.auction_id}/`,
                            {
                                headers: {
                                    Authorization: `Bearer ${jwt}`
                                }
                            }
                        );
                        setReviewStatus(prevStatus => ({
                            ...prevStatus,
                            [auction.auction.auction_id]: response.data
                        }));
                    } catch (error) {
                        console.error('Error fetching review status:', error);
                    }
                }
            }
        };

        fetchReviewStatus();
    }, [auctions, jwt]);

    if (loadingMyAuction) {
        return (
            <div className="flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!Array.isArray(auctions) || auctions.length === 0) {
        return (
            <p className="text-center text-xl text-white flex flex-col items-center">
                <span className="mt-1">No hay productos disponibles.</span>
            </p>
        );
    }

    return (
        <div className="bg-bidcraft-grey grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {auctions.map((auction) => (
                <div
                    key={auction.completed_auction_id}
                    className="bg-bidcraft-grey-2 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl flex flex-col cursor-pointer hover:scale-[1.02]"
                    onClick={() => {
                        if (!auction.is_paid) {
                            openModal(auction.highest_bid, auction.auction.auction_id);
                        }
                    }}
                >
                    <div className="h-48 overflow-hidden">
                        <img
                            src={auction.auction.images[0]?.image_url}
                            alt={auction.auction.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-4 flex-grow flex flex-col">
                        <div className="mb-2 flex justify-between items-start">
                            <h2 className="text-xl font-bold text-white">{auction.auction.name}</h2>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                {auction.auction.category.category_name}
                            </span>
                        </div>
                        <p className="text-white mb-4 flex-grow">{auction.auction.description}</p>
                        <div className="border-t border-gray-200 pt-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-semibold text-white">Precio más alto:</span>
                                <span className="text-lg font-bold text-green-600">${auction.highest_bid}</span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-semibold text-white">Finalizada:</span>
                                <span className="text-sm text-white">{new Date(auction.date_completed).toLocaleDateString()}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-semibold text-white">Estado:</span>
                                <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${auction.is_paid ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
                                    {auction.is_paid ? "Pagada" : "Pendiente"}
                                </span>
                            </div>
                        </div>
                        {auction.is_paid && (

                            <div className="mt-4">

                                <button className='bg-G underline text-white' onClick={() => openModal2(auction.auction.auction_id)}>Ver Factura</button>



                                {reviewStatus[auction.auction.auction_id]?.message === "Reseña obtenida." ? (
                                    <div className="flex items-center justify-center">
                                        {[...Array(5)].map((_, index) => (
                                            <span key={index} className={`text-2xl ${index < reviewStatus[auction.auction.auction_id].data.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                ) : reviewStatus[auction.auction.auction_id] ? (
                                    <Link
                                        to={`/review/${auction.auction.auction_id}`}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center block"
                                    >
                                        Agregar Reseña
                                    </Link>
                                ) : null}
                            </div>
                        )}
                        <div>
                        </div>
                    </div>
                </div>
            ))}
          <Modal isOpen={isModalOpen2} onClose={closeModal2}>
    {/* Aquí puedes renderizar los detalles de la factura */}
    {loading ? (
    
            <LoadingPage />
        
    ) : factura === null ? (
        <div className="text-center py-6">
            <p className="text-lg font-semibold text-gray-700">La factura no está disponible.</p>
        </div>
    ) : factura ? (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto max-h-[90vh] overflow-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Factura de Compra</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Detalles de la Compra</h3>
                    <p className="text-gray-600"><span className="font-semibold">ID de Compra:</span> {factura.purchase_id || 'N/A'}</p>
                    <p className="text-gray-600"><span className="font-semibold">Fecha de Compra:</span> {factura.purchase_date ? new Date(factura.purchase_date).toLocaleDateString() : 'N/A'}</p>
                    <p className="text-gray-600"><span className="font-semibold">Monto Total:</span> L. {factura.total_amount ? parseFloat(factura.total_amount).toFixed(2) : 'N/A'}</p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Detalles del Producto</h3>
                    <p className="text-gray-600"><span className="font-semibold">Producto:</span> {factura.auction?.name || 'N/A'}</p>
                    <p className="text-gray-600"><span className="font-semibold">Descripción:</span> {factura.auction?.description || 'N/A'}</p>
                    <p className="text-gray-600"><span className="font-semibold">Categoría:</span> {factura.auction?.category?.category_name || 'N/A'}</p>
                    {factura.auction?.images?.[0]?.image_url && (
                        <div className="mt-4">
                            <img src={factura.auction.images[0].image_url} alt={factura.auction?.name} className="w-full h-auto rounded-lg shadow-md" />
                        </div>
                    )}
                </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Detalles del Vendedor</h3>
                <p className="text-gray-600"><span className="font-semibold">Nombre:</span> {factura.seller?.first_name} {factura.seller?.last_name || 'N/A'}</p>
                <p className="text-gray-600"><span className="font-semibold">Correo Electrónico:</span> {factura.seller?.email || 'N/A'}</p>
                <p className="text-gray-600"><span className="font-semibold">Teléfono:</span> {factura.seller?.phone_number || 'N/A'}</p>
            </div>
        </div>
    ) : (
        <div>La factura no está disponible</div>
    )}
</Modal>


        </div>
    );
};

export default AuctionList;
