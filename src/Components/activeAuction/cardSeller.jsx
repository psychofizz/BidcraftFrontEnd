import React from "react";
import { Link } from 'react-router-dom';


function CardSeller({ nameSeller, sellerId }) {
    return (
        <div className="w-full shadow-lg  bg-bidcraft-dark rounded-lg">
            <div className="m-2">
                <div className="text-center flex justify-center align-middle my-4 flex-col">
                    <div className="flex justify-center align-middle">

                        <img
                            src={`https://ui-avatars.com/api/?name=${nameSeller}&background=random`}
                            alt={nameSeller}
                            className="w-20 h-20 rounded-full border-2 border-white"
                        />
                    </div>
                    <div className="py-2">
                        <h3 className="font-bold text-2xl text-white dark:text-white mb-1">
                            {nameSeller}
                        </h3>

                    </div>
                </div>
                <div className="flex gap-2 px-2 mb-8">
                    <Link
                        to={`/seller/${sellerId}`}
                        className="flex-1 rounded-full bg-yellow-500 text-black antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2 transition duration-300 inline-block text-center"
                    >
                        Perfil
                    </Link>
                    <button className=" hidden flex-1 rounded-full border-2 border-gray-400 font-semibold text-black bg-bidcraft-grey-2 dark:text-white px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300">
                        Message
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardSeller;