import React, { useEffect, useState } from "react";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";
import AuctionItem from "../Components/auction/auctionItem";
import { useNavigate } from "react-router-dom";
import CategoriesBar from "../Components/navBar/CategoriesBar";

const HomeTest = () => {
  //Validando que  este el token en el local storage
  const [userInfo, setUserInfo] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const jwt = JSON.parse(localStorage.getItem("token"));

  const navigate = useNavigate();
  useEffect(() => {
    //Estableciendo las rutas protegidas
    if (jwt === null) {

      navigate("/login");
    } else {
      console.log("probando uses efect")
      obtenInfo(jwt);
      obtenProducto();
    }
  }, [jwt]);

  //Esto nos srive para obtener informacion del usuario

  const obtenInfo = async (token) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
      } else {
        const dataUser = await response.json();
        localStorage.setItem("User", JSON.stringify(dataUser));
        console.log(dataUser);
        setUserInfo(dataUser);
      }
    } catch (error) { }
  };

  //Esto nos srive para obtener todos los productos
  const obtenProducto = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/auction/show/all/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
      } else {
        const data = await response.json();
        setProductInfo(data);

      }
    } catch (error) { }
  };

  return (
    <div className="min-h-screen">
      <MainNavbar userName={userInfo ? userInfo.first_name : null} />
      <CategoriesBar></CategoriesBar>
      <div>
        {productInfo.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-3 m-2 p-2 shadow-lg lg:grid-cols-4 xl:grid-cols-5">
            {productInfo.map((producto) => (
              <div key={producto.auction_id}>
                <AuctionItem
                  userId={userInfo.id}
                  title={producto.name}
                  description={producto.description}
                  price={producto.starting_price}
                  endDate={producto.end_time}
                  num_of_favorites="12"
                  auctionId={producto.auction_id}
                ></AuctionItem>
              </div>
            ))}
          </section>
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
      <div>

      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeTest;
