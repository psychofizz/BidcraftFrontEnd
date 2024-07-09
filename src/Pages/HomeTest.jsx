import React from "react";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";
import AuctionItem from "../Components/auction/auctionItem";

const HomeTest = () => {
  return (
    <div className="min-h-screen">
      <MainNavbar />
      <div className="grid grid-cols-3 m-2 p-2 shadow-2 space-x-1 space-y-1">
        <AuctionItem
          title="Camara"
          d
          description="Yo se lo que tengo"
          price="500"
          endDate="2019"
          num_of_favorites="12"
        ></AuctionItem>

        <AuctionItem
          title="Camara"
          d
          description="Yo se lo que tengo"
          price="500"
          endDate="2019"
          num_of_favorites="12"
        ></AuctionItem>
        <AuctionItem
          title="Camara"
          d
          description="Yo se lo que tengo"
          price="500"
          endDate="2019"
          num_of_favorites="12"
        ></AuctionItem>
      </div>
    </div>
  );
};

export default HomeTest;
