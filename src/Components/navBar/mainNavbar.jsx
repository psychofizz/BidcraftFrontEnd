import React, { Component } from "react";
import SearchBar from "./SearchBar";
import FavoritesModal from "./FavoritesModal";
import NotificationsModal from "./NotificationsModal";
import UserModal from "./UserModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBell } from "@fortawesome/free-solid-svg-icons";

class MainNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFavoritesModal: false,
      showNotificationsModal: false,
      showUserModal: false,
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

  handleCloseFavoritesModal = () => {
    this.setState({ showFavoritesModal: false });
  };

  handleCloseNotificationsModal = () => {
    this.setState({ showNotificationsModal: false });
  };

  handleCloseUserModal = () => {
    this.setState({ showUserModal: false });
  };

  render() {
    const { showFavoritesModal, showNotificationsModal, showUserModal } =
      this.state;

    return (
      <div className="bg-bidcraft-main text-white">
        <div className="container mx-auto flex items-center justify-between py-4 space-x-2">
          <div className="flex-1 items-center">
            <SearchBar />
          </div>
          <div className="bg-white underline p-2">Subastar</div>

          <div className="flex items-center space-x-4">
            <button
              className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white"
              onClick={this.toggleFavoritesModal}
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>

            <button
              className="nav-icon relative"
              onClick={this.toggleNotificationsModal}
            >
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white">
                <FontAwesomeIcon icon={faBell} />
              </div>
            </button>

            <button
              className="nav-icon underline"
              onClick={this.toggleUserModal}
            >
              Hola Usuario
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
      </div>
    );
  }
}

export default MainNavbar;
