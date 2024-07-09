import React from "react";
import AuctionForm from "../Components/auction/AuctionForm";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";

const CreateAuction = () => {
  return (
    <div>
      <MainNavbar></MainNavbar>
      <AuctionForm></AuctionForm>
      <Footer></Footer>
    </div>
  );
};

export default CreateAuction;
