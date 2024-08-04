import React from 'react';
import LoadingPage from '../loading';

function UserAuctions({ loadingMyAuction, auctions, openModal }) {
    return (
        <div
            className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
            id="tabs-miSubastas"
            role="tabpanel"
            aria-labelledby="tabs-home-tab02"
        >
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-bidcraft-grey">
                {loadingMyAuction ? (
                    <div className="col-span-full text-center text-gray-500">
                        <LoadingPage />
                    </div>
                ) : auctions && auctions.length > 0 ? (
                    auctions.map((auction) => (
                        <div onClick={() => openModal(auction.highest_bid, auction.auction.auction_id)}
                            key={auction.completed_auction_id}>
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
                                <p className="text-white font-bold">
                                    Precio más alto: ${auction.highest_bid}
                                </p>
                                <p className="text-gray-600">
                                    Fecha de finalización: {new Date(auction.date_completed).toLocaleDateString()}
                                </p>
                                <p className={auction.is_paid ? "text-green-600" : "text-red-600"}>
                                    {auction.is_paid ? "Subasta pagada" : "Pendiente de pago"}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500">
                        No hay productos
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserAuctions;