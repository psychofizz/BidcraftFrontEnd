import React, { useEffect, useState } from "react";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";
import AuctionItem from "../Components/auction/auctionItem";
import { useNavigate } from "react-router-dom";
import CategoriesBar from "../Components/navBar/CategoriesBar";
import LoadingAuctionItems from "../Components/auction/LoadingAuctionItem";

const HomeTest = () => {


  const [productInfo, setProductInfo] = useState([]);

  //Esto nos sirve para obtener todos los productos
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
        console.log(data)


      }
    } catch (error) { }
  };

  obtenProducto()

  return (
    <div className="min-h-screen bg-bidcraft-grey">
      <MainNavbar />
      <CategoriesBar></CategoriesBar>
      <div>
        {productInfo.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-3 m-2 p-2 shadow-lg lg:grid-cols-4 xl:grid-cols-5">
            {productInfo.map((producto) => (
              <div key={producto.auction_id}>
                <AuctionItem
                  userId={producto.seller}
                  title={producto.name}
                  description={producto.description}
                  price={producto.highest_bid}
                  endDate={producto.end_time}
                  num_of_favorites="12"
                  auctionId={producto.auction_id}
                  category={producto.category.category_name}
                  imgUrl={producto.images[0]}
                ></AuctionItem>
              </div>
            ))}
          </section>
        ) : (

          <LoadingAuctionItems count={6} />
        )}
      </div>
      <div>

      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeTest;
