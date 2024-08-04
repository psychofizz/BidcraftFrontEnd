import React from 'react';
import { toast } from 'react-toastify';

const AuctionList = ({ auctions, loadingMyAuction, openModal }) => {

    const isArray = Array.isArray(auctions);

    if (loadingMyAuction) {
        return (
            <div className="flex items-center justify-center ">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!isArray || auctions.length === 0) {
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
                        if (auction.is_paids) {
                            toast.success("Subasta Pagada")
                        } else {
                            
                        }
                    } }
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
                                <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${auction.is_paid ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                                    }`}>
                                    {auction.is_paid ? "Pagada" : "Pendiente"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AuctionList;
