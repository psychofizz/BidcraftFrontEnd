import React, { useState } from "react";
import MainNavbar from "../Components/navBar/mainNavbar";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const Homepage = () => {
  //Validando que  este el token en el local storage
  const [userInfo, setUserInfo] = useState(null);
  const jwt = JSON.parse(localStorage.getItem("token"));

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
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/test/`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
    
      const dataUser = response.data;
      setUserInfo(dataUser);
    } catch (error) {
      // Manejo de errores, si es necesario
    }
    
  };
  return (
    <div className="">
      <MainNavbar userName={userInfo ? userInfo.first_name : null} />
      <div className="flex flex-col space-y-1 w-3/4"></div>

      <div id="main" className=" w-full">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
