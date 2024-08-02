import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ReviewForm({ auctionId }) {
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!auctionId) {
            toast.error('Auction ID is missing.');
            return;
        }

        if (rating === 0) {
            toast.error('Please select a rating.');
            return;
        }

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/review/create/${auctionId}/`, {
                rating,
                comment,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            navigate('/profile');
        } catch (error) {
            console.error('Error submitting review:', error);
            toast.error('Failed to submit review. Please try again.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <ToastContainer />
            <h2 className="text-2xl font-bold mb-4">Dejar una reseña</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2">Rating:</label>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            className={`text-2xl ${rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                            ★
                        </button>
                    ))}
                </div>
                <div className="mb-4">
                    <label htmlFor="comment" className="block mb-2">Descripción:</label>
                    <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full p-2 border rounded"
                        rows="4"
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Enviar Reseña
                </button>
            </form>
        </div>
    );
}

export default ReviewForm;
