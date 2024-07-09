import React, { useState, useEffect } from "react";
import MainNavbar from "../Components/navBar/mainNavbar";
import TestAuctionItem from "../Components/auction/TestAuctionItem";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  //Validando que  este el token en el local storage
  const [userInfo, setUserInfo] = useState(null);
  const jwt = JSON.parse(localStorage.getItem('token'))

  const navigate = useNavigate();
  //useEffect(() => {


  //Estableciendo las rutas protegidas 
  //   if (jwt === null) {
  //     navigate('/login')
  //   } else {
  //     obtenInfo(jwt);


  //   }

  // }, [jwt])

  //Obteniendo informacion del token
  const obtenInfo = async (token) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/test/",
        {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        }
      );
      if (!response.ok) {
      } else {
        const dataUser = await response.json()
        setUserInfo(dataUser);


      }
    } catch (error) {
    }
  }
  return (
    <div className="">
      <MainNavbar userName={userInfo ? userInfo.first_name : null} />
      <div className="flex flex-col space-y-1 w-3/4">



      </div>
      
      <div id="main" className=" w-full">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
              <TestAuctionItem></TestAuctionItem>
              <TestAuctionItem></TestAuctionItem>
              <TestAuctionItem></TestAuctionItem>
              <TestAuctionItem></TestAuctionItem>
              <TestAuctionItem></TestAuctionItem>
              <TestAuctionItem></TestAuctionItem>
              <TestAuctionItem></TestAuctionItem>
              <TestAuctionItem></TestAuctionItem>

            </div>
          </div>
        </section>



      </div>
    </div>
  );
};

export default Homepage;
