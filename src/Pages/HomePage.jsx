import React from "react";
import MainNavbar from "../Components/navBar/mainNavbar";
import TestAuctionItem from "../Components/auction/TestAuctionItem";

const Homepage = () => {
  return (
    <div>
      <MainNavbar />
      <div className="flex flex-col space-y-1 w-3/4">
        <TestAuctionItem></TestAuctionItem>
        <TestAuctionItem></TestAuctionItem>
      </div>
    </div>
  );
};

export default Homepage;
