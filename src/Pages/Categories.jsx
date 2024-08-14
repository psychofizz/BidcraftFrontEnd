import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";
import PageHeader from "../Components/page-essentials/PageHeader";
import AuctionItem from "../Components/auction/auctionItem";
import LoadingAuctionItems from "../Components/auction/LoadingAuctionItem";
import axios from 'axios';

const Categories = () => {
  const { category } = useParams();
  const [productInfo, setProductInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const obtenProducto = async (categoryName) => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/categories/show/all/`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const categories = response.data;

        const category = categories.find((cat) => cat.category_name === categoryName);

        if (!category) {
          throw new Error(`Category '${categoryName}' not found`);
        }

        const productResponse = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/auction/show/all/category/${category.category_id}/`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
console.log("mira aca estan los productos "+ JSON.stringify(productResponse.data[0].images[0].image_url))
        const productData = productResponse.data;

        if (productData.length === 0) {
          setIsEmpty(true);
        } else {
          setProductInfo(productData);
        }

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.response ? error.response.data : error.message);
      }
    };

    obtenProducto(category);
  }, [category]);

  const breadcrumbs = [
    { text: "Categorias", link: "/home" },
    { text: category || "Categoría", link: `/category/${category}` }
  ];

  if (isLoading) {
    return (
      <div className="bg-bidcraft-grey">
        <MainNavbar />
        <div className="p-2">
          <PageHeader title={category || "Categoría"} breadcrumbs={breadcrumbs} />
        </div>
        <LoadingAuctionItems count={8}></LoadingAuctionItems>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-bidcraft-grey">
        <MainNavbar />
        <div className="p-2">
          <PageHeader title={category || "Categoría"} breadcrumbs={breadcrumbs} />
        </div>
        <div className="p-2 text-white text-center min-h-96">
          {typeof error === 'string' ? error : 'No existen productos en esta categoria'}
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-bidcraft-grey">
      <MainNavbar />
      <div className="p-2">
        <PageHeader title={category || "Categoría"} breadcrumbs={breadcrumbs} />
      </div>
      <div>
        {productInfo.length > 0 && !isEmpty ? (
          <section className="grid grid-cols-1 md:grid-cols-3 m-2 p-2 shadow-lg lg:grid-cols-4 xl:grid-cols-5">
            {productInfo.map((producto) => (
             
              <div key={producto.auction_id}>
                <AuctionItem
                  userId={producto.seller}
                  title={producto.name}
                  description={producto.description}
                  price={producto.starting_price}
                  endDate={producto.end_time}
                  num_of_favorites="12"
                  auctionId={producto.auction_id}
                  category={producto.category.category_name}
                  imgUrl={producto.images[0]}
                />
              </div>
            ))}
          </section>
        ) : isEmpty ? (
          <div className="p-2 text-white">
            <span>No hay productos en esta categoría</span>
          </div>
        ) : (
          <LoadingAuctionItems count={6} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Categories;
