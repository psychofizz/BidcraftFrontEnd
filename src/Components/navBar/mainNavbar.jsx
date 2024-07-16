import React, { Component } from "react";
import SearchBar from "./SearchBar";
import FavoritesModal from "./FavoritesModal";
import NotificationsModal from "./NotificationsModal";
import UserModal from "./UserModal";
import AuctionModal from "./AuctionModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBell, faBars } from "@fortawesome/free-solid-svg-icons";

import bidLogo from "../bidLogo.png";

class MainNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFavoritesModal: false,
      showNotificationsModal: false,
      showUserModal: false,
      showAuctionModal: false,
      mobileMenuOpen: false,
    };
  }

  toggleFavoritesModal = () => {
    this.setState((prevState) => ({
      showFavoritesModal: !prevState.showFavoritesModal,
    }));
  };

  toggleNotificationsModal = () => {
    this.setState((prevState) => ({
      showNotificationsModal: !prevState.showNotificationsModal,
    }));
  };

  toggleUserModal = () => {
    this.setState((prevState) => ({
      showUserModal: !prevState.showUserModal,
    }));
  };

  toggleAuctionModal = () => {
    this.setState((prevState) => ({
      showAuctionModal: !prevState.showAuctionModal,
    }));
  };

  handleCloseFavoritesModal = () => {
    this.setState({ showFavoritesModal: false });
  };

  handleCloseNotificationsModal = () => {
    this.setState({ showNotificationsModal: false });
  };

  handleCloseUserModal = () => {
    this.setState({ showUserModal: false });
  };

  handleCloseAuctionModal = () => {
    this.setState({ showAuctionModal: false });
  };

  render() {
    const {
      showFavoritesModal,
      showNotificationsModal,
      showUserModal,
      showAuctionModal,
    } = this.state;

    const { isLandingPage, userName } = this.props;

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
                onClick={() => this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }))}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>

            <div className="w-full md:w-auto md:flex-grow md:max-w-xl">

            </div>

            <div className={`flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto ${this.state.mobileMenuOpen ? 'block' : 'hidden md:flex'}`}>
              {isLandingPage ? (
                <>
                  <a
                    href="/register"
                    className="w-full md:w-auto bg-green-500 text-white rounded-full py-2 px-4 text-center cursor-pointer hover:bg-green-600 transition-colors"
                    tabIndex="2"
                  >
                    Registrarse
                  </a>
                  <a
                    href="/login"
                    className="w-full md:w-auto bg-blue-500 text-white rounded-full py-2 px-4 text-center cursor-pointer hover:bg-blue-600 transition-colors"
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
                    onClick={this.toggleFavoritesModal}

                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                  <button
                    className="hidden w-full md:w-10 h-10 flex items-center justify-center rounded-full bg-bidcraft-main-2 text-white focus:outline-none hover:bg-bidcraft-main-3 transition-colors"
                    onClick={this.toggleNotificationsModal}

                  >
                    <FontAwesomeIcon icon={faBell} />
                  </button>
                  <button
                    className="w-full md:w-40 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white focus:outline-none hover:bg-blue-600 transition-colors"
                    onClick={this.toggleUserModal}
                  >
                    Hola {userName}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {!isLandingPage && showFavoritesModal && (
          <FavoritesModal
            handleClose={this.handleCloseFavoritesModal}
            show={showFavoritesModal}
          />
        )}
        {!isLandingPage && showNotificationsModal && (
          <NotificationsModal
            handleClose={this.handleCloseNotificationsModal}
            show={showNotificationsModal}
          />
        )}
        {!isLandingPage && showUserModal && (
          <UserModal
            handleClose={this.handleCloseUserModal}
            show={showUserModal}
          />
        )}
        {!isLandingPage && showAuctionModal && (
          <AuctionModal
            handleClose={this.handleCloseAuctionModal}
            show={showAuctionModal}
          />
        )}
      </div>
    );
  }
}

export default MainNavbar;