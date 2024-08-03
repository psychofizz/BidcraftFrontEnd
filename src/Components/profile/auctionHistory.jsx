import React from 'react';
import LoadingPage from '../loading';
import MyAuctions from './myAuction'

function AuctionHistory({ loading, productMyInfo, myAuctions }) {
    return (
        <div
            className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
            id="tabs-home02"
            role="tabpanel"
            aria-labelledby="tabs-home02-tab02"
            data-twe-tab-active
        >
            {loading ? (
                <LoadingPage />
            ) : (
                <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-bidcraft-grey">
                    {productMyInfo.length > 0 ? (
                        productMyInfo.map((producto) => (
                            <MyAuctions
                                key={producto.auction_id}
                                idAuction={producto.auction_id}
                                name={producto.name}
                                highestBid={producto.highest_bid}
                                updateAuction={myAuctions}
                                imgUrl={producto.images[0]}
                             
                            />
                        ))
                    ) : (
                        <p className="text-center text-xl text-white flex flex-col items-center">
                            <span className="mt-1">No hay productos disponibles.</span>
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

export default AuctionHistory;
