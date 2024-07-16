

import React, { useEffect, useState } from "react";
import AuctionInfo from "../Components/activeAuction/auctionInfo"
import CardOffert from "../Components/activeAuction/cardOffert"
import CardSeller from "../Components/activeAuction/cardSeller"
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Footer from '../Components/page-essentials/Footer'
import MainNavbar from "../Components/navBar/mainNavbar";
import CategoriesBar from "../Components/navBar/CategoriesBar";

import axios from 'axios'
function Auction() {
    const [data, setData] = useState({});
    const jwt = JSON.parse(localStorage.getItem("token"));
    const navigate = useNavigate();

    var userId = JSON.parse(localStorage.getItem("User"));
    console.log(userId.id)

    useEffect(() => {


        //Estableciendo las rutas protegidas
        if (jwt === null) {

            navigate("/login");
        } else {

            infoAuction();
        }

    }, [])

    const auctionId = useParams();





    //aca obtenemos la informacion de cada subasta si
    const infoAuction = async () => {
        try {
            if (data) {
                const response = await axios.get(`http://127.0.0.1:8000/api/auction/show/one/${auctionId.id}/`);
                setData(response.data);
                console.log(response.data)
            }

        } catch (error) {

        }
    };




    return (
        <div>
            <MainNavbar></MainNavbar>
            <CategoriesBar></CategoriesBar>
            <div className="w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 bg-bidcraft-grey">
                {data.name && data.description ? (
                    <>
                        <div className="col-span-2 lg:col-span-3">
                            <AuctionInfo name={data.name} description={data.description} idAuction={data.auction_id} userId={userId.id} />
                        </div>
                        <div className="mr-10 mt-4">

                            <div className="grid grid-cols-1 justify-items-center w-full gap-y-4">
                                <CardOffert lastOffert={data.highest_bid} idAuction={data.auction_id} jwt={jwt} updateAuction={infoAuction} />
                                <CardSeller nameSeller={data.seller.username} />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="w-full h-full ">Cargando...</div>
                )
                }

            </div >
            <Footer></Footer>
        </div>

    )
}
export default Auction