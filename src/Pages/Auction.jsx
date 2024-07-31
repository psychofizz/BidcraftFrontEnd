import React, { useEffect, useState, useCallback } from "react";
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
    const [isFavorite, setIsFavorite] = useState(false);
    const jwt = JSON.parse(localStorage.getItem("token"));
    const navigate = useNavigate();
    const { id: auctionId } = useParams();
    const userId = JSON.parse(localStorage.getItem("User"));
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(true);



 //-----------------------------------------------------Este nos ayudara a ver si el usuario ya envio su verificacion------------------
 const StatusUser = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/kyc/detail/`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                "Content-Type": "application/json",
            },
        });
        
        setStatus(response.data.status.status_id);
    
    } catch (error) {
        
    } finally {
        setLoading(false); // Termina la carga después de obtener el estado
    }
};
    //-------------------Obtener la información de la subasta-----------------------------
    const infoAuction = useCallback(async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/auction/show/one/${auctionId}/`);
            setData(response.data);
        } catch (error) {
            console.error('Error al obtener la subasta:', error);
        }
    }, [auctionId]);

    //-----------------------------Lógica de favoritos-----------------------------------------------//


    const stateFavorite = useCallback(async () => {
        const dataFavorite = {
            user: userId.id,
            auction: data.auction_id
        };

        if (!data.auction_id) return;

        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/favorites/check/${dataFavorite.auction}/`,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`, // Incluir el token en los headers
                    }
                }
            );

            setIsFavorite(response.data.exists);
        } catch (error) {
            console.error('Error en favorito:', error);
        }
    }, [data.auction_id, userId.id]);

    const toggleFavorite = async () => {
        const dataFavorite = {
            user: userId.id,
            auction: data.auction_id
        };
        try {
            const token = JSON.parse(localStorage.getItem("token"))

            if (isFavorite) {
                await axios.delete(
                    `${process.env.REACT_APP_API_URL}/api/favorites/delete/one/auction/${dataFavorite.auction}/`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}` // Incluir el token en los headers
                        }
                    }
                );
            } else {

                await axios.post(
                    `${process.env.REACT_APP_API_URL}/api/favorites/auction/${dataFavorite.auction}/`,
                    {}, // Cuerpo de la solicitud (vacío en este caso)
                    {
                        headers: {
                            Authorization: `Bearer ${token}` // Incluir el token en los headers
                        }
                    }
                );
            }
            setIsFavorite(!isFavorite);
        } catch (error) {
            console.error('Error en favorito:', error);
        }
    };

    //----------------------------------------------------------------------------------------------------------------------
    useEffect(() => {
        StatusUser();
        // Estableciendo las rutas protegidas
        if (jwt === null) {
            navigate("/login");
        } else {
            infoAuction();
        }
    }, [jwt, navigate, auctionId, infoAuction]);

    useEffect(() => {
        if (data.auction_id) {
            stateFavorite();
        }
     
    }, [data.auction_id, stateFavorite]);
 
    //---------------------------------------------------------------------------------------------------------
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
                                toggleFavorite={toggleFavorite}
                                isFavorite={isFavorite}
                            />
                        </div>
                        <div className="md:mr-10 md:mt-4 p-2">
                            <div className="grid grid-cols-1 justify-items-center w-full gap-y-4">
                                <CardOffert
                                    lastOffert={data.highest_bid}
                                    idAuction={data.auction_id}
                                    jwt={jwt}
                                    updateAuction={infoAuction}
                                    loading={loading}
                                    status={status}
                                />
                                <CardSeller nameSeller={data.seller.username} />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="w-full h-full ">Cargando...</div>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Auction;