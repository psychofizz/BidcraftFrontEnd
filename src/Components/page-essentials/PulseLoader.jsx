import React from 'react';

const PulseLoader = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-bidcraft-dark h-12 w-12"></div>
                <div className="rounded-full bg-bidcraft-dark   h-12 w-12"></div>
                <div className="rounded-full bg-bidcraft-dark   h-12 w-12"></div>
            </div>
        </div>
    );
};

export default PulseLoader;