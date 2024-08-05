import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ReviewForm({ auctionId }) {
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const jwt = localStorage.getItem("token")?.replace(/^"|"$/g, '');


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!auctionId) {
            toast.error('Subasta invalida');
            return;
        }

        if (rating === 0) {
            toast.error('Seleccione una rating');
            return;
        }

        try {
            console.log(jwt);
            await axios.post(`${process.env.REACT_APP_API_URL}/api/review/create/${auctionId}/`, {
                comment,
                rating
            }, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            toast.success('Reseña agregada exitosamente');
            navigate('/profile');
        } catch (error) {
            console.error('Error al agregar reseña:', error);

            if (error.response && error.response.data && error.response.data.error === 'Ya has realizado una reseña para esta subasta.') {
                toast.error('Ya has agregado una reseña para esta subasta');
            } else {
                toast.error('Error al agregar reseña');
            }
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
