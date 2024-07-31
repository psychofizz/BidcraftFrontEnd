import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";
import AuctionInfo from "../Components/activeAuction/auctionInfo";
import PaymentInfo from "../Components/payment/PaymentInfo"

function Payment() {
    const [auctionData, setAuctionData] = useState(null);
    const { id } = useParams(); // Assuming you're using react-router and the URL is like /payment/:id

    useEffect(() => {
        const fetchAuctionData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/auction/show/one/${id}`);
                setAuctionData(response.data);
            } catch (error) {
                console.error("Error fetching auction data:", error);
            }
        };

        if (id) {
            fetchAuctionData();
        }
    }, [id]);

    if (!auctionData) {
        return <div></div>;
    }

    return (
        <div className="bg-bidcraft-dark">
            <MainNavbar />
            <div className="grid grid-cols-2 m-2 rounded-lg">
                <AuctionInfo
                    name={auctionData.name}
                    description={auctionData.description}
                    idAuction={auctionData.auction_id}
                    userId={auctionData.seller.id}
                    imgUrl={auctionData.images[0]?.image_url}
                />
                <PaymentInfo
                    auctionItem={auctionData.name}
                    finalPrice={auctionData.highest_bid}
                />
            </div>
            <Footer />
        </div>
    );
}

export default Payment;