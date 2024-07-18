import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FavoritesModal from "./FavoritesModal";
import NotificationsModal from "./NotificationsModal";
import UserModal from "./UserModal";
import AuctionModal from "./AuctionModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBell, faBars } from "@fortawesome/free-solid-svg-icons";

import bidLogo from "../bidLogo.png";

const MainNavbar = ({ isLandingPage }) => {
  const [showFavoritesModal, setShowFavoritesModal] = useState(false);
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showAuctionModal, setShowAuctionModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [productInfo, setProductInfo] = useState([]);

  const navigate = useNavigate();

  const getUserName = () => {
    const userString = localStorage.getItem("User");
    if (userString) {
      const user = JSON.parse(userString);
      return user.first_name || "Usuario";
    }
    return "Usuario";
  };

  const getUserId = () => {
    const userString = localStorage.getItem("User");
    if (userString) {
      const user = JSON.parse(userString);
      return user.id || "Usuario";

    }
    return "Usuario";
  };

  useEffect(() => {
    const jwt = JSON.parse(localStorage.getItem("token"));
    if (jwt === null) {
      navigate("/login");
    } else {
      obtenInfo(jwt);
    }
  }, [navigate]);

  const obtenInfo = async (token) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const dataUser = await response.json();
        localStorage.setItem("User", JSON.stringify(dataUser));
        setUserInfo(dataUser);
      }
    } catch (error) {
      console.error("Error al conseguir la informacion de usuario:", error);
    }
  };


  const toggleModal = (modalState, setModalState) => {
    setModalState(!modalState);
  };

  return (
    <div className="bg-bidcraft-dark text-white px-4 py-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 space-x-4">
          <div className="flex items-center w-full md:w-auto space-around md:justify-start space-x-4">
            <a href="/home" tabIndex="0" className="flex-shrink-0">
              <img src={bidLogo} className="h-10" alt="Bid Logo" />
            </a>
            <button
              className="md:hidden h-10 w-10 flex items-center justify-center text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>

          <div className="w-full md:w-auto md:flex-grow md:max-w-xl">
            {/* Add search functionality here if needed */}
          </div>

          <div className={`flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto ${mobileMenuOpen ? 'block' : 'hidden md:flex'}`}>
            {isLandingPage ? (
              <>
                <a
                  href="/register"
                  className="w-full md:w-auto bg-bidcraft-grey-2 text-white rounded-full py-2 px-4 text-center cursor-pointer hover:bg-bidcraft-grey transition-colors"
                  tabIndex="2"
                >
                  Registrarse
                </a>
                <a
                  href="/login"
                  className="w-full md:w-auto bg-yellow-500 text-black rounded-full py-2 px-4 text-center cursor-pointer hover:bg-yellow-400 transition-colors"
                  tabIndex="3"
                >
                  Iniciar Sesión
                </a>
              </>
            ) : (
              <>
                <a
                  className="w-full md:w-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full py-2 px-4 text-center cursor-pointer hover:opacity-90 transition-opacity"
                  href="/create-auction"
                >
                  Subastar
                </a>
                <button
                  className="w-full md:w-10 h-10 flex items-center justify-center rounded-full bg-bidcraft-main-2 text-white focus:outline-none hover:bg-bidcraft-main-3 transition-colors"
                  onClick={() => toggleModal(showFavoritesModal, setShowFavoritesModal)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <button
                  className="hidden w-full md:w-10 h-10 flex items-center justify-center rounded-full bg-bidcraft-main-2 text-white focus:outline-none hover:bg-bidcraft-main-3 transition-colors"
                  onClick={() => toggleModal(showNotificationsModal, setShowNotificationsModal)}
                >
                  <FontAwesomeIcon icon={faBell} />
                </button>
                <button
                  className="w-full md:w-40 h-10 flex items-center justify-center rounded-full text-[#131743] bg-[#EEEDEB] focus:outline-none hover:bg-[#DEDDCB] transition-colors"
                >
                  <a href="/auctiontags">Busqueda</a>
                </button>
                <button
                  className="w-full md:w-40 h-10 flex items-center justify-center rounded-full text-[#131743] bg-[#EEEDEB] focus:outline-none hover:bg-[#DEDDCB] transition-colors"
                  onClick={() => toggleModal(showUserModal, setShowUserModal)}
                >
                  Hola {getUserName()}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {!isLandingPage && showFavoritesModal && (
        <FavoritesModal
          handleClose={() => setShowFavoritesModal(false)}
          show={showFavoritesModal}
          id={getUserId()}
        />
      )}
      {!isLandingPage && showNotificationsModal && (
        <NotificationsModal
          handleClose={() => setShowNotificationsModal(false)}
          show={showNotificationsModal}

        />
      )}
      {!isLandingPage && showUserModal && (
        <UserModal
          handleClose={() => setShowUserModal(false)}
          show={showUserModal}
        />
      )}
      {!isLandingPage && showAuctionModal && (
        <AuctionModal
          handleClose={() => setShowAuctionModal(false)}
          show={showAuctionModal}
        />
      )}
    </div>
  );
};

export default MainNavbar;