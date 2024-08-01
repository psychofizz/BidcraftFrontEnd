import React from 'react';

const LoadingAuctionItem = () => {
    return (
        <div className="block m-2">
            <div className="relative bg-bidcraft-grey-2 rounded-lg shadow-lg overflow-hidden">
                <div className="w-full h-80 bg-gray-300 animate-pulse" />
                <div className="absolute top-2 left-2 flex gap-2 flex-wrap z-40">
                    <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 animate-pulse">&nbsp;</div>
                    <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 animate-pulse">&nbsp;</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm rounded-t-lg p-4 flex flex-col">
                    <div className="h-8 bg-gray-300 rounded w-3/4 mb-2 animate-pulse" />
                    <div className="flex items-center justify-between mb-4">
                        <div className="h-4 bg-gray-300 rounded w-1/4 animate-pulse" />
                        <div className="h-6 bg-gray-300 rounded w-1/4 animate-pulse" />
                    </div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-2 animate-pulse" />
                    <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse" />
                </div>
            </div>
        </div>
    );
};

const LoadingAuctionItems = ({ count = 6 }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3  p-2 shadow-lg lg:grid-cols-4 xl:grid-cols-5">
            {[...Array(count)].map((_, index) => (
                <LoadingAuctionItem key={index} />
            ))}
        </div>
    );
};

export default LoadingAuctionItems;