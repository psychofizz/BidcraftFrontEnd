

import React, { useEffect, useState } from "react";
import AuctionInfo from "../Components/activeAuction/auctionInfo"
import CardOffert from "../Components/activeAuction/cardOffert"
import CardSeller from "../Components/activeAuction/cardSeller"
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import {
    Input,
    initTWE,
} from "tw-elements";
import axios from 'axios'
function Auction() {
    const [data, setData] = useState({});
    const jwt = JSON.parse(localStorage.getItem("token"));
    const navigate = useNavigate();




    useEffect(() => {
      
            //Estableciendo las rutas protegidas
            if (jwt === null) {
              
              navigate("/login");
            } else {
            
            infoAuction();
            }
        initTWE({ Input });

    }, [])

    const auctionId = useParams();




    
//aca obtenemos la informacion de cada subasta si
        const infoAuction = async () => {
            try {
                if(data){
                    const response = await axios.get(`http://127.0.0.1:8000/api/auction/show/one/${auctionId.id}/`);
                    setData(response.data);
                    console.log(response.data)
                }
                
            } catch (error) {
             
            } finally {
               
            }
        };

      


    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
            {data.name && data.description   ? (
                <>      
                    <AuctionInfo name={data.name} description={data.description} />
                    <div className="grid grid-cols-1 justify-items-center w-full">
                        <CardOffert lastOffert={data.starting_price} />
                        <div className="w-[90%] sm:w-[50%] my-8 shadow-2xl">
                        <CardSeller nameSeller={data.seller.username} />
                        </div>
                    </div>
                </>
            ) : (
                <div className="w-full h-full ">Cargando...</div>
            )}
        </div>
    )
}
export default Auction