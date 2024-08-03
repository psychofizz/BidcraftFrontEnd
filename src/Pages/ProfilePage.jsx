import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import MainNavbar from "../Components/navBar/mainNavbar";
import CategoriesBar from "../Components/navBar/CategoriesBar";
import Footer from "../Components/page-essentials/Footer";
import Modal from "../Components/wonAuction/modalPay";
import Pay from "./PayAuction";
import ProfileHeader from "../Components/profile/profileHeader";
import ProfileTabs from "../Components/profile/profileTabs";
import AuctionHistory from "../Components/profile/auctionHistory";
import Reviews from "../Components/profile/reviews";
import UserAuctions from "../Components/profile/userAuction";
import { Tab, Dropdown, Ripple, initTWE } from "tw-elements";

function ProfilePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBid, setSelectedBid] = useState(null);
    const [selectedAuctionId, setSelectedAuctionId] = useState(null);
    const [productMyInfo, setProductInfo] = useState([]);
    const [auctions, setAuctions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMyAuction, setLoadingMyAuction] = useState(true);
    const [reviews, setReviews] = useState([]);
    const [setLoadingReviews] = useState(false);

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
        setLoadingReviews(true);
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
        } catch (error) {
            console.error("Error fetching reviews:", error);
        } finally {
            setLoadingReviews(false);
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

    return (
        <div className="bg-bidcraft-grey">
            <MainNavbar />
            <CategoriesBar />
            <ProfileHeader user={user} />
            <div
                id="tabs"
                className="mx-[30px] xl:mx-[400px] lg:mx-[200px] md:mx-[100px] sm:mx-[59px]"
            >
                <ProfileTabs />
                <div className="mb-6">
                    <AuctionHistory loading={loading} productMyInfo={productMyInfo} />
                    <Reviews reviews={reviews} />
                    <UserAuctions loadingMyAuction={loadingMyAuction} auctions={auctions} openModal={openModal} />
                </div>
            </div>
            <Footer />
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Pay amountBit={selectedBid} auctionId={selectedAuctionId} />
            </Modal>
        </div>
    );
}

export default ProfilePage;
