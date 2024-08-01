import React, { useState, useEffect } from "react";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";
import AuctionItem from "../Components/auction/auctionItem";
import CategoriesBar from "../Components/navBar/CategoriesBar";
import LoadingAuctionItems from "../Components/auction/LoadingAuctionItem";
import axios from "axios";

const HomeTest = () => {
  const [productInfo, setProductInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [hasMore, setHasMore] = useState(true); // Track if there's more data to load

  const fetchProducts = async (url) => {
    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { results, next } = response.data;

      // Update the state with new data
      setProductInfo((prevProducts) => [...prevProducts, ...results]);

      // Update pagination state
      setNextPage(next);
      setHasMore(!!next); // Set hasMore to false if no next page
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch on component mount
    fetchProducts(`${process.env.REACT_APP_API_URL}/api/auction/show/all/`);
  }, []);

  const handleLoadMore = () => {
    if (nextPage) {
      fetchProducts(nextPage);
    }
  };

  if (loading) return <LoadingAuctionItems count={6} />;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
    <div className="min-h-screen bg-bidcraft-grey">
      <MainNavbar />
      <CategoriesBar />
      <div>
        {productInfo.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-3 m-2 p-2  lg:grid-cols-4 xl:grid-cols-5">
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
                />
              </div>
            ))}
          </section>
        ) : (
          <LoadingAuctionItems count={6} />
        )}
        {hasMore && (
          <button onClick={handleLoadMore} className="mt-4 p-2 bg-blue-500 text-white">
            Load More
          </button>
        )}
      </div>

    </div>
          <Footer />
    </>
  );
};

export default HomeTest;
