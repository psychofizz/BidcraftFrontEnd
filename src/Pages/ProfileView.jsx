import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";

function ProfileView() {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUserData = useCallback(async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/${userId}`);
            setUser(response.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
            setError(error);
        }
    }, [userId]);

    const fetchReviews = useCallback(async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/reviews/seller/${userId}`
            );
            setReviews(response.data.data);
        } catch (error) {
            console.error("Error fetching reviews:", error);
            setError(error);
        }
    }, [userId]);

    useEffect(() => {
        fetchUserData();
        fetchReviews();
        setLoading(false);
    }, [fetchUserData, fetchReviews]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!user) return <div>User not found</div>;

    return (
        <div className="bg-bidcraft-grey">
            <MainNavbar />

            <section className="w-full overflow-hidden dark:bg-gray-900">
                <div className="w-full mx-auto">
                    <img
                        src="https://images.unsplash.com/photo-1560697529-7236591c0066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y292ZXJ8ZW58MHwwfHx8MTcxMDQ4MTEwNnww&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="User Cover"
                        className="w-full xl:h-[20rem] lg:h-[22rem] md:h-[16rem] sm:h-[13rem] xs:h-[9.5rem]"
                    />

                    <div className="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] xs:-top-[2.2rem]">
                        <img
                            src={`https://ui-avatars.com/api/?name=${user.first_name}&background=random`}
                            alt={user.first_name}
                            className="w-48 h-48 rounded-full border-2 border-white"
                        />
                        <h1 className="text-center text-gray-800 dark:text-white text-4xl font-serif text-white">
                            {user.first_name + " " + user.last_name}
                        </h1>
                    </div>
                </div>
            </section>

            <div className="mx-[30px] xl:mx-[400px] lg:mx-[200px] md:mx-[100px] sm:mx-[59px]">
                <h2 className="text-2xl font-bold mb-4">Reseñas</h2>
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <Review key={review.review_id} review={review} />
                    ))
                ) : (
                    <p>No hay reseñas disponibles</p>
                )}
            </div>

            <Footer />
        </div>
    );
}

function Review({ review }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex justify-between items-center mb-2">
                <p className="font-bold">Comprador: {review.buyer}</p>
                <p className="text-sm text-gray-500">
                    {new Date(review.review_date).toLocaleDateString()}
                </p>
            </div>
            <div className="flex items-center mb-2">
                <span className="mr-2">Calificación:</span>
                {[...Array(5)].map((_, index) => (
                    <span
                        key={index}
                        className={`text-xl ${index < review.rating ? "text-yellow-400" : "text-gray-300"
                            }`}
                    >
                        ★
                    </span>
                ))}
            </div>
            <p className="text-gray-700">{review.comment}</p>
        </div>
    );
}

export default ProfileView;