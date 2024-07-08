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
      <div className="bg-bidcraft-dark text-white">
        <div className="container mx-auto flex items-center justify-between py-4 space-x-2">
          <div className="flex-1 flex items-center space-x-2">
            <img src={bidLogo} className="h-10" alt="Bid Logo" />
            <SearchBar />
          </div>

          <div
            className="bg-blue-500 text-white rounded-full py-2 px-4 cursor-pointer hover:bg-blue-600"
            onClick={this.toggleAuctionModal}
          >
            Subastar
          </div>

          <div className="flex items-center space-x-4">
            <button
              className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-500 text-white focus:outline-none hover:bg-blue-600"
              onClick={this.toggleFavoritesModal}
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>

            <button
              className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-500 text-white focus:outline-none hover:bg-blue-600"
              onClick={this.toggleNotificationsModal}
            >
              <FontAwesomeIcon icon={faBell} />
            </button>

            <button
              className="h-10 w-40 flex items-center justify-center rounded-full bg-blue-500 text-white focus:outline-none hover:bg-blue-600"
              onClick={this.toggleUserModal}
            >
              Hola {this.props.userName}
            </button>
          </div>
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
