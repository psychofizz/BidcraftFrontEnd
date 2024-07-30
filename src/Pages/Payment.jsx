import React from "react";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";
import AuctionInfo from "../Components/activeAuction/auctionInfo";
import PaymentInfo from "../Components/payment/PaymentInfo";

function Payment() {
    return (
        <div>
            <MainNavbar></MainNavbar>
            <div className="grid grid-cols-2">
                <AuctionInfo></AuctionInfo>
                <PaymentInfo></PaymentInfo>
            </div>
            <Footer></Footer>
        </div>
    )

}

export default Payment