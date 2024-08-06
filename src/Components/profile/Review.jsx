import React from 'react';
import { useNavigate } from 'react-router-dom';

function Review({ review }) {
    const navigate = useNavigate();

    if (!review) {
        return null;
    }

    const handleViewAuction = () => {
        navigate(`/myAuction/${review.auction}`);
    };

    return (
        <div className="bg-bidcraft-grey-2 p-4 rounded-lg shadow-md mb-4 m-2">
            <div className="flex justify-between items-center mb-2">
                <p className="font-bold text-white">Comprador: {review.buyer.first_name} {review.buyer.last_name}</p>
                <p className="text-sm text-gray-500">
                    {new Date(review.review_date).toLocaleDateString()}
                </p>
            </div>
            <div className="flex items-center mb-2 ">
                <span className="mr-2 text-white">Calificación:</span>
                {[...Array(5)].map((_, index) => (
                    <span
                        key={index}
                        className={`text-xl ${index < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                    >
                        ★
                    </span>
                ))}
            </div>
            <p className="text-white mb-2">{review.comment}</p>
            <button
                className="bg-bidcraft-main text-white font-bold py-2 px-4 rounded"
                onClick={handleViewAuction}
            >
                Ver Subasta
            </button>
        </div>
    );
}

function ReviewsList({ reviews }) {
    if (!reviews || reviews.length === 0) {
        return (
            <p className="text-center text-xl text-white flex flex-col items-center">
                <span className="mt-1">No hay reseñas disponibles.</span>
            </p>
        );
    }

    return (
        <div>
            {reviews.map((review, index) => (
                <Review key={index} review={review} />
            ))}
        </div>
    );
}

export default ReviewsList;
