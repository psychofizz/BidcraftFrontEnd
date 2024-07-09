import React, { useState, useEffect } from "react";
import MainNavbar from "../Components/navBar/mainNavbar";
import { useNavigate } from "react-router-dom";

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
      const response = await fetch("http://127.0.0.1:8000/api/auth/test/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
      } else {
        const dataUser = await response.json();
        setUserInfo(dataUser);
      }
    } catch (error) {}
  };
  return (
    <div>
      <MainNavbar userName={userInfo ? userInfo.first_name : null} />
      <div className="flex flex-col space-y-1 w-3/4"></div>
    </div>
  );
};

export default Homepage;
