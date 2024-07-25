import React from "react";
import axios from "axios";
import MainNavbar from "../Components/navBar/mainNavbar";

import AuctionItem from "../Components/auction/auctionItem";
import { useState } from "react";
import LoadingAuctionItems from "../Components/auction/LoadingAuctionItem";

function TagsAuction() {

  //-------------------------------------Esta nos ayuda a obtener el nombre de los usuario----------------------------------------
  var user = JSON.parse(localStorage.getItem("User"));
  //-----------------------------------------------------------------------------------------------
  const [values, setValues] = useState({
    nameTags: "",
  });
  const [productInfo, setProductInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Estado para manejar el loading

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });

  };

  //------------------------- Esta funcion nos ayuda a buscar por tags-------------------
  const searchTags = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Inicia el loading
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/tags/find/all/auctions/${values.nameTags}/`);

      setProductInfo(response.data[0])

    } catch (error) {

    } finally {
      setIsLoading(false); // Termina el loading
    }
  };

  //------------------------- Esta funcion nos ayuda a traer las subastas relacionado a esos tags-------------------
  const searchAuctionByTags = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/auctions/tag/17/`);

    } catch (error) {

    }
  };

  return (
    <div className="w-full h-full bg-bidcraft-dark" >
      <MainNavbar userName={user ? user.first_name : null} />
      <div>
        <form className="max-w-md mx-auto" onSubmit={(event) => searchTags(event)}>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onChange={(e) => handleChange(e)}
              name="nameTags"
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Busca por tags "
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Buscar
            </button>
          </div>
        </form>
      </div>
      <div>
        {isLoading ? (
          <LoadingAuctionItems count={6} />
        ) : productInfo && productInfo.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-3 m-2 p-2 shadow-lg lg:grid-cols-4 xl:grid-cols-5">
            {productInfo.map((producto) => (
              <div key={producto.auction_id}>
                <AuctionItem
                  title={producto.name}
                  description={producto.description}
                  price={producto.highest_bid}
                  endDate={producto.end_time}
                  num_of_favorites="12"
                  auctionId={producto.auction_id}
                  category={producto.category.category_name}
                  imgUrl={producto.images[0]}
                />
              </div>
            ))}
          </section>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
export default TagsAuction;
