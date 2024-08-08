import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// Componentes
import MainNavbar from "../Components/navBar/mainNavbar";
import CategoriesBar from "../Components/navBar/CategoriesBar";
import AuctionInfo from "../Components/activeAuction/auctionInfo";
import CardOffert from "../Components/myActiveAuction/cardOffert";
import CardSeller from "../Components/activeAuction/cardSeller";
import Footer from "../Components/page-essentials/Footer";
import { toast } from "react-toastify";
import LoadingPage from "../Components/loading";



function Auction() {
  const [isActive, setIsActive] = useState(false)

  const [data, setData] = useState({});
  const [bidData, setBidData] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const jwt = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("User"));
  const navigate = useNavigate()   //-------------------Obtener la información de la subasta-----------------------------
  const { id: auctionId } = useParams();



  const infoAuction = useCallback(async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/auction/show/one/${auctionId}/`);
        setData(response.data);

        setIsActive(response.data.is_active)
        

    } catch (error) {
        console.error('Error al obtener la subasta:', error);
    }
}, [auctionId]);
;


  // Función para obtener información de la subasta
  const fetchAuctionData = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/auction/show/one/${auctionId}/`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error al obtener la subasta:", error);
    }
  }, [auctionId]);

  // Función para obtener las ofertas de la subasta
  const fetchBidInfo = useCallback(async () => {
    try {
      const bidInfo = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/bids/auction/${auctionId}/`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
   
      setBidData(bidInfo.data.data);
    } catch (error) {
      toast.error(error)
    }
  }, [auctionId, jwt]);

  // Función para obtener el estado de verificación del usuario
  const fetchUserStatus = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/kyc/detail/`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
          },
        }
      );

      setStatus(response.data.status.status_id);
    } catch (error) {
      console.error("Error al obtener el estado del usuario:", error);
    } finally {
      setLoading(false);
    }
  }, [jwt]);

  // Función para comprobar y alternar el estado de favoritos
  const checkAndToggleFavorite = useCallback(async () => {
    if (!data.auction_id) return;

    try {
      // Comprobar estado de favoritos
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/favorites/check/${data.auction_id}/`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      setIsFavorite(response.data.exists);
    } catch (error) {
      console.error("Error en favorito:", error);
    }
  }, [data.auction_id, jwt]);

  const toggleFavorite = async () => {
    const dataFavorite = {
      user: userId.id,
      auction: data.auction_id,
    };

    try {
      if (isFavorite) {
        await axios.delete(
          `${process.env.REACT_APP_API_URL}/api/favorites/delete/one/auction/${dataFavorite.auction}/`,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
      } else {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/api/favorites/auction/${dataFavorite.auction}/`,
          {},
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Error al alternar favorito:", error);
    }
  };

  // useEffect para la carga inicial de datos
  useEffect(() => {
    if (!jwt) {
      navigate("/login");
    } else {
      fetchUserStatus();
      fetchAuctionData();
      fetchBidInfo();
      infoAuction();
    }
  }, [jwt, navigate, auctionId, fetchAuctionData, fetchBidInfo, fetchUserStatus,infoAuction]);

  // useEffect para verificar el estado de favoritos
  useEffect(() => {
    checkAndToggleFavorite();
  }, [checkAndToggleFavorite]);

  return (
    <div className="flex flex-col min-h-screen bg-bidcraft-grey">
      <MainNavbar />
      <CategoriesBar />
      <div className=" h-[100%] bg-bidcraft-grey min-h-screen">
        {data.name && data.description ? (
          <div className="flex-grow w-full grid grid-cols-1 lg:grid-cols-4 bg-bidcraft-grey" >
            <div className="col-span-2 lg:col-span-3">
              <AuctionInfo
                name={data.name}
                description={data.description}
                idAuction={data.auction_id}
                userId={userId.id}
                imgUrl={data.images[0]}
                toggleFavorite={toggleFavorite}
                isFavorite={isFavorite}
                end_time={data.end_time}
                is_active={isActive}
              />
            </div>
            <div className="md:mr-10 md:mt-4 p-2">
              <div className="flex flex-cols-1 justify-items-center w-full flex-wrap">
                <CardOffert
                  lastOffert={data.highest_bid}
                  idAuction={data.auction_id}
                  jwt={jwt}
                  updateAuction={fetchAuctionData}
                  loading={loading}
                  status={status}
                  bidData={bidData}
                />
                <CardSeller
                  username={data.seller.username}
                  nameSeller={`${data.seller.first_name} ${data.seller.last_name}`}
                  sellerId={data.seller.id}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid place-content-center min-h-screen"><LoadingPage /></div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Auction;
