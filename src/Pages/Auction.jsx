

import React, { useEffect } from "react";
import AuctionInfo from "../Components/activeAuction/auctionInfo"
import CardOffert from "../Components/activeAuction/cardOffert"
import CardSeller from "../Components/activeAuction/cardSeller"
import {  useParams  } from 'react-router-dom';
import {
    Input,
    initTWE,
} from "tw-elements";


function Auction() {

    axios.get('https://api.example.com/data')
    .then(response => {
      setData(response.data);
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    });
    useEffect(() => {
        initTWE({ Input });

    })
    
    const auctionId = useParams();
    console.log(auctionId)
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
            <AuctionInfo />
            <div className="grid grid-cols-1 justify-items-center w-full ">
                <CardOffert />
                { //               ------------------------Profile-----------------------------------
                }
                <div className="w-[90%] sm:w-[50%] my-8 shadow-2xl">
                    <CardSeller />
                </div>
            </div>
        </div>
    )
}
export default Auction