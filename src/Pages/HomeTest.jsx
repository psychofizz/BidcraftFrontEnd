import React, { useState, useEffect, useCallback } from "react";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";
import AuctionItem from "../Components/auction/auctionItem";
import CategoriesBar from "../Components/navBar/CategoriesBar";
import LoadingAuctionItems from "../Components/auction/LoadingAuctionItem";
import axios from "axios";
import LoadingPage from "../Components/loading";

const HomeTest = () => {
  const [productInfo, setProductInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = useCallback(async (pageNumber) => {
    if (!hasMore) return;

    setLoading(true);

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/auction/show/all/`, {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          page: pageNumber,
        },
      });

      const { results, next } = response.data;

      if (pageNumber === 1) {
        setProductInfo(results);
      } else {
        setProductInfo((prevProducts) => [...prevProducts, ...results]);
      }

      setHasMore(!!next);
      setPage(pageNumber);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  }, [hasMore]);

  useEffect(() => {
    fetchProducts(1);
  }, [fetchProducts]);

  const handleLoadMore = () => {
    fetchProducts(page + 1);
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="min-h-screen bg-bidcraft-grey">
        <MainNavbar />
        <CategoriesBar />
        <div>
          {productInfo.length > 0 ? (
            <section className="grid grid-cols-1 md:grid-cols-3 m-2 p-2 lg:grid-cols-4 xl:grid-cols-5">
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
          {loading && <LoadingPage />}
          {!loading && hasMore && (
            <div className="container mx-auto flex justify-center align-middle">
              <button onClick={handleLoadMore} className="mt-4 p-2 m-4 rounded-xl bg-bidcraft-main text-white">
                Cargar más subastas
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeTest;