import React, { Component } from "react";
import SearchBar from "./SearchBar";
import FavoritesModal from "./FavoritesModal";
import NotificationsModal from "./NotificationsModal";
import UserModal from "./UserModal";
import AuctionModal from "./AuctionModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBell } from "@fortawesome/free-solid-svg-icons";
import bidLogo from "../bidLogo.png";

class MainNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFavoritesModal: false,
      showNotificationsModal: false,
      showUserModal: false,
      showAuctionModal: false,
    };
  }

  toggleFavoritesModal = () => {
    this.setState((prevState) => ({
      showFavoritesModal: !prevState.showFavoritesModal,
    }));
  };

  toggleAuctionModal = () => {
    this.setState((prevState) => ({
      showAuctionModal: !prevState.showAuctionModal,
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

    return (
      <div className="bg-bidcraft-dark text-white pl-2 pr-2">
        <div className="w-full px-2 md:px-0 flex flex-col md:flex-row items-center justify-between pt-4 pb-4 space-y-2 md:space-y-0 md:space-x-2 ">
          <div className="flex-1 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
            <img src={bidLogo} className="h-10" alt="Bid Logo" />
            <SearchBar />
          </div>

          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <div
              className="bg-bidcraft-main-2 text-white rounded-full py-2 px-4 cursor-pointer hover:bg-bidcraft-main-3"
              onClick={this.toggleAuctionModal}
            >
              Subastar
            </div>
            <button
              className="h-10 w-10 flex flex-shrink-0 items-center justify-center rounded-full bg-bidcraft-main-2 text-white focus:outline-none hover:bg-bidcraft-main-3"
              onClick={this.toggleFavoritesModal}
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>

            <button
              className="h-10 w-10 flex items-center  flex flex-shrink-0 justify-center rounded-full bg-bidcraft-main-2 text-white focus:outline-none hover:bg-bidcraft-main-3"
              onClick={this.toggleNotificationsModal}
            >
              <FontAwesomeIcon icon={faBell} />
            </button>
          </div>
          <button
            className="h-10 md:w-40 pl-2 pr-2 flex  items-center justify-center rounded-full bg-bidcraft-main-2 text-white focus:outline-none hover:bg-bidcraft-main-3"
            onClick={this.toggleUserModal}
          >
            Hola Usuario
          </button>
        </div>

        {showFavoritesModal && (
          <FavoritesModal
            handleClose={this.handleCloseFavoritesModal}
            show={showFavoritesModal}
          />
        )}
        {showNotificationsModal && (
          <NotificationsModal
            handleClose={this.handleCloseNotificationsModal}
            show={showNotificationsModal}
          />
        )}
        {showUserModal && (
          <UserModal
            handleClose={this.handleCloseUserModal}
            show={showUserModal}
          />
        )}
        {showAuctionModal && (
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
