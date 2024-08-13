import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";
import LoadingPage from "../Components/loading";

function ProfileView() {
    const { userId } = useParams();
    const [seller, setSeller] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");

    const fetchData = useCallback(async () => {
        try {
            const token = JSON.parse(localStorage.getItem("token"));
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/reviews/seller/${userId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const responseData = response.data;
            setMessage(responseData.message);

            if (responseData.message === "Reseñas obtenidas satisfactoriamente.") {
                setSeller(responseData.data[0].seller);
                setReviews(responseData.data);
            } else if (responseData.message === "No existen reseñas para este vendedor.") {
                setSeller(responseData.seller);
                setReviews([]);
            } else {
                throw new Error("Unexpected response from server");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [userId]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (loading) return <LoadingPage></LoadingPage>;
    if (error) return <div>Error: {error.message}</div>;
    if (!seller) return <div>Seller not found</div>;

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
                            src={`https://ui-avatars.com/api/?name=${seller.first_name}&background=random`}
                            alt={seller.first_name}
                            className="w-48 h-48 rounded-full border-2 border-white"
                        />
                        <h1 className="text-center text-gray-800 dark:text-white text-4xl font-serif text-white">
                            {seller.first_name} {seller.last_name}
                        </h1>
                    </div>
                </div>
            </section>

            <div className="mx-[30px] xl:mx-[400px] lg:mx-[200px] md:mx-[100px] sm:mx-[59px]">
                <h2 className="text-2xl text-white font-bold mb-4">Reseñas</h2>
                {message === "Reseñas obtenidas satisfactoriamente." ? (
                    reviews.map((review) => (
                        <Review key={review.review_id} review={review} />
                    ))
                ) : (
                    <p className="text-white pt-4 pb-8">{message}</p>
                )}
            </div>

            <Footer />
        </div>
    );
}

function Review({ review }) {
    const navigate = useNavigate();

    const handleViewAuction = () => {
        navigate(`/auction/${review.auction}`);
    };

    return (
        <div className="bg-bidcraft-grey-2 p-4 rounded-lg shadow-md mb-4 text-white">
            <div className="flex justify-between items-center mb-2">
                <p className="font-bold">Comprador: {review.buyer.first_name} {review.buyer.last_name}</p>
                <p className="text-sm ">
                    {new Date(review.review_date).toLocaleDateString()}
                </p>
            </div>
            <div className="flex items-center mb-2">
                <span className="mr-2">Calificación:</span>
                {[...Array(5)].map((_, index) => (
                    <span
                        key={index}
                        className={`text-xl ${index < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                    >
                        ★
                    </span>
                ))}
            </div>
            <p className=" mb-2">{review.comment}</p>
            <button
                className="bg-bidcraft-main text-white font-bold py-2 px-4 rounded"
                onClick={handleViewAuction}
            >
                Ver Subasta
            </button>
        </div>
    );
}

export default ProfileView;