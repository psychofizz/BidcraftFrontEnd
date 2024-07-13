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
        <div className="w-full px-2 md:px-0 flex flex-col md:flex-row items-center justify-between pt-4 pb-4 space-y-2 md:space-y-0 md:space-x-2">
          <div className="flex-1 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
            <a href="/home" tabIndex="0">
              <img src={bidLogo} className="h-10" alt="Bid Logo" />
            </a>
            <SearchBar tabIndex="1" />
          </div>

          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <a
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full py-2 px-4 cursor-pointer hover:bg-bidcraft-main-3"
              href="/create-auction"
              tabIndex="2"
            >
              Subastar
            </a>
            <button
              className="h-10 w-10 flex flex-shrink-0 items-center justify-center rounded-full bg-bidcraft-main-2 text-white focus:outline-none hover:bg-bidcraft-main-3"
              onClick={this.toggleFavoritesModal}
              tabIndex="3"
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>

            <button
              className="h-10 w-10 flex items-center flex-shrink-0 justify-center rounded-full bg-bidcraft-main-2 text-white focus:outline-none hover:bg-bidcraft-main-3"
              onClick={this.toggleNotificationsModal}
              tabIndex="4"
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
