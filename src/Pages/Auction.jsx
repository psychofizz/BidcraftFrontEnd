import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

import AuctionInfo from "../Components/activeAuction/auctionInfo";
import CardOffert from "../Components/activeAuction/cardOffert";
import CardSeller from "../Components/activeAuction/cardSeller";
import Footer from '../Components/page-essentials/Footer';
import MainNavbar from "../Components/navBar/mainNavbar";
import CategoriesBar from "../Components/navBar/CategoriesBar";

function Auction() {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const jwt = JSON.parse(localStorage.getItem("token"));
    const navigate = useNavigate();
    const userId = JSON.parse(localStorage.getItem("User"));
    const { id: auctionId } = useParams();

    const infoAuction = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/auction/show/one/${auctionId}/`);
            setData(response.data);
            setError(null);
        } catch (error) {
            console.error("Error fetching auction info:", error);
            setError("Failed to load auction data. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    }, [auctionId]);

    useEffect(() => {
        if (jwt === null) {
            navigate("/login");
        } else {
            infoAuction();
        }
    }, [jwt, navigate, infoAuction]);

    if (isLoading) return <div className="w-full h-full">Loading...</div>;
    if (error) return <div className="w-full h-full text-red-500">{error}</div>;

    return (
        <div>
            <MainNavbar />
            <CategoriesBar />
            <div className="w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 bg-bidcraft-grey">
                {data.name && data.description ? (
                    <>
                        <div className="col-span-2 lg:col-span-3">
                            <AuctionInfo
                                name={data.name}
                                description={data.description}
                                idAuction={data.auction_id}
                                userId={userId.id}
                                imgUrl={data.images[0]}
                            />
                        </div>
                        <div className="mr-10 mt-4">
                            <div className="grid grid-cols-1 justify-items-center w-full gap-y-4">
                                <CardOffert
                                    lastOffert={data.highest_bid}
                                    idAuction={data.auction_id}
                                    jwt={jwt}
                                    updateAuction={infoAuction}
                                />
                                <CardSeller nameSeller={data.seller.username} />
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
            <Footer />
        </div>
    );
}

export default Auction;