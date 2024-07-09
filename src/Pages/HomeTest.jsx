import React from "react";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";
import AuctionItem from "../Components/auction/auctionItem";
import CategoriesBar from "../Components/navBar/CategoriesBar";

const HomeTest = () => {
  return (
    <div className="">
      <MainNavbar />
      <CategoriesBar></CategoriesBar>
      <div className="flex flex-col md:flex-row m-2 p-2 shadow-lg">
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
      <div className="h-96"></div>
      <Footer></Footer>
    </div>
  );
};

export default HomeTest;
