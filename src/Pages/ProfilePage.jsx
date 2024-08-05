import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import MainNavbar from "../Components/navBar/mainNavbar";
import CategoriesBar from "../Components/navBar/CategoriesBar";
import Footer from "../Components/page-essentials/Footer";
import Modal from "../Components/wonAuction/modalPay";
import Pay from "./PayAuction";
import ProfileHeader from "../Components/profile/profileHeader";
import Review from "../Components/profile/Review";
import { Tab, Dropdown, Ripple, initTWE } from "tw-elements";
import Tabs from "../Components/profile/Tsbs";
import AuctionHistory from "../Components/profile/auctionHistory";
import AuctionList from "../Components/profile/AuctionList";

function ProfilePage() {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBid, setSelectedBid] = useState(null);
    const [selectedAuctionId, setSelectedAuctionId] = useState(null);
    const [productMyInfo, setProductInfo] = useState([]);
    const [auctions, setAuctions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMyAuction, setLoadingMyAuction] = useState(true);
    const [reviews, setReviews] = useState([]);

    const user = JSON.parse(localStorage.getItem("User"));
    const jwt = JSON.parse(localStorage.getItem("token"));

    const openModal = (bid, auctionId) => {
        setSelectedBid(bid);
        setSelectedAuctionId(auctionId);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const fetchAuctions = useCallback(async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/auctions/win/`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            setAuctions(response.data);
            setLoadingMyAuction(false);
        } catch (err) {
            console.error("Error fetching auctions:", err);
            setLoadingMyAuction(false);
        }
    }, [jwt]);

    useEffect(() => {
        fetchAuctions();
    }, [fetchAuctions]);

    const fetchReviews = useCallback(async () => {

        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/reviews/seller/${user.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            const reviewsData = response.data.data;
            setReviews(reviewsData);
            console.log("Review data: " + reviewsData)
        } catch (error) {
            console.error("Error fetching reviews:", error);
        } finally {
        }
    }, [jwt, user.id]);

    const myAuctions = useCallback(async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/auction/show/all/user/`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                    "Content-Type": "application/json",
                },
            });
            setProductInfo(response.data);

        } catch (error) {
            console.error("Error fetching auctions:", error);
        } finally {
            setLoading(false);
        }
    }, [jwt]);

    useEffect(() => {
        initTWE({ Tab, Dropdown, Ripple });
        myAuctions();
        fetchReviews();
    }, [myAuctions, fetchReviews]);


    //const AuctionList = ({ auctions, loadingMyAuction, openModal }) => {
    const tabData = [
        {
            id: 'tabs-history',
            label: 'Historial De Subastas',
            content: <AuctionHistory loading={loading} productMyInfo={productMyInfo} myAuctions={myAuctions}></AuctionHistory>
        },
        {
            id: 'tabs-review',
            label: 'reseñas',
            content: <Review reviews={reviews}></Review>
        },
        {
            id: 'tabs-purchases',
            label: 'Compras',
            content: <AuctionList auctions={auctions} loadingMyAuction={loadingMyAuction} openModal={openModal}></AuctionList>
        }
    ];

    return (
        <div className="bg-bidcraft-grey">
            <MainNavbar />
            <CategoriesBar />
            <ProfileHeader user={user} />
            <div className="min-w-screen">
                <Tabs tabs={tabData}></Tabs>
            </div>

            <Footer />
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Pay amountBit={selectedBid} auctionId={selectedAuctionId} />
            </Modal>
        </div>
    );
}

export default ProfilePage;
