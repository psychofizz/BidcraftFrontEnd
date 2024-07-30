/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import AuctionItem from "../../Components/auction/auctionItem"
import MainNavbar from "../../Components/navBar/mainNavbar"
import Footer from "../../Components/page-essentials/Footer"

const Home = () => {

  const [homeAuctions, setHomeAuctions] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/categories/show/all/")
      .then((response) => response.json())
      .then((data) => setHomeAuctions(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


//-----------Esto sirve solo para generar productos aleatorios-------------

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomString(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  for (let i = 1; i <= 10; i++) {
    const producto = {
      id: i,
      title: `Producto ${i}`,
      description: `Descripción del Producto ${i}`,
      price: getRandomNumber(50, 500),
      endDate: `2024-07-${getRandomNumber(10, 31)}`,
      num_of_favorites: getRandomNumber(0, 20),
    };

    homeAuctions.push(producto);
  }
  console.log(homeAuctions);

//-----------Esto sirve solo para generar productos aleatorios-------------

  return (
    <div>
      <MainNavbar></MainNavbar>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mt-8 mb-4">
          Productos de Ropa
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {homeAuctions.map((producto) => (
            <AuctionItem
              key={producto.id}
              title={producto.title}
              description={producto.description}
              price={producto.price}
              endDate={producto.endDate}
              num_of_favorites={producto.num_of_favorites}
            />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home
