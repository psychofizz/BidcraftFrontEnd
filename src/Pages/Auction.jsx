import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

import AuctionInfo from "../Components/activeAuction/auctionInfo";
import CardOffert from "../Components/activeAuction/cardOffert";
import CardSeller from "../Components/activeAuction/cardSeller";
import Footer from '../Components/page-essentials/Footer';
import React, { useEffect, useState } from "react";
import AuctionInfo from "../Components/activeAuction/auctionInfo"
import CardOffert from "../Components/activeAuction/cardOffert"
import CardSeller from "../Components/activeAuction/cardSeller"
import { useNavigate, useParams } from "react-router-dom";
import Footer from '../Components/page-essentials/Footer'
import MainNavbar from "../Components/navBar/mainNavbar";
import CategoriesBar from "../Components/navBar/CategoriesBar";

import axios from 'axios'

function Auction() {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [isFavorite, setIsFavorite] = useState(false);
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

    const { id: auctionId } = useParams();
    const userId = JSON.parse(localStorage.getItem("User"));

    //-------------------Obtener la información de la subasta-----------------------------
    const infoAuction = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/auction/show/one/${auctionId}/`);
            setData(response.data);
        } catch (error) {
            console.error('Error al obtener la subasta:', error);
        }
    };

    //-----------------------------Lógica de favoritos-----------------------------------------------//
    const dataFavorite = {
        user: userId.id,
        auction: data.auction_id
    };

    const stateFavorite = async () => {
        if (!data.auction_id) return;

        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/favorites/${userId.id}/${data.auction_id}/`);
            setIsFavorite(response.data.exists);
        } catch (error) {
            console.error('Error en favorito:', error);
        }
    };

    const toggleFavorite = async () => {
        try {
            if (isFavorite) {
                await axios.delete(`${process.env.REACT_APP_API_URL}/api/favorites/delete/one/${dataFavorite.user}/${dataFavorite.auction}/`);
            } else {
                await axios.post(`${process.env.REACT_APP_API_URL}/api/favorites/create/one/`, dataFavorite);
            }
            setIsFavorite(!isFavorite);
        } catch (error) {
            console.error('Error en favorito:', error);
        }
    };

    //----------------------------------------------------------------------------------------------------------------------
    useEffect(() => {
        // Estableciendo las rutas protegidas
        if (jwt === null) {
            navigate("/login");
        } else {
            infoAuction();
        }
    }, [jwt, navigate, infoAuction]);

    if (isLoading) return <div className="w-full h-full">Loading...</div>;
    if (error) return <div className="w-full h-full text-red-500">{error}</div>;

}, [jwt, navigate, auctionId]);

useEffect(() => {
    if (data.auction_id) {
        stateFavorite();
    }
}, [data.auction_id]);

//---------------------------------------------------------------------------------------------------------
return (
        <div>
            <MainNavbar />
            <CategoriesBar />
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
                            <AuctionInfo
                                name={data.name}
                                description={data.description}
                                idAuction={data.auction_id}
                                userId={userId.id}
                                imgUrl={data.images[0]}
                                toggleFavorite={toggleFavorite}
                                isFavorite={isFavorite}
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
                ) : (
                    <div className="w-full h-full ">Cargando...</div>
                )}
            </div>
            <Footer />
        </div >
    );
    )
}

export default Auction;

export default Auction;
