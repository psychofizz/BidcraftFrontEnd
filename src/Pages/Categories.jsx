import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";
import PageHeader from "../Components/page-essentials/PageHeader";
import AuctionItem from "../Components/auction/auctionItem";
import LoadingAuctionItems from "../Components/auction/LoadingAuctionItem";
import axios from 'axios';




const Categories = () => {
    const { category } = useParams();

    const [productInfo, setProductInfo] = useState([]);

    const isEmpty = false;




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
      
          const productData = productResponse.data;
          setProductInfo(productData);
        } catch (error) {
          if (error.response) {
            console.error('Error fetching data:', error.response.data);
          } else {
            console.error('Error fetching data:', error.message);
          }
        }
      };
      


    obtenProducto(category)

    const breadcrumbs = [
        { text: "Categorias", link: "/home" },
        { text: category || "Categoría", link: `/category/${category}` }
    ];

    return (
        <div className="bg-bidcraft-grey">
            <MainNavbar />
            <div className="p-2">

                <PageHeader title={category || "Categoría"} breadcrumbs={breadcrumbs} />
            </div>
            <div>
                {productInfo.length > 0 && isEmpty === false ? (
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
                                />
                            </div>
                        ))}
                    </section>
                ) : isEmpty ? (
                    <div>
                        <span>No hay productos en esta categoria</span>

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