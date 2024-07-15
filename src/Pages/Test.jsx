import React from "react";
import AuctionCarousel from "../Components/auction/auctionCarousel";
import AuctionItem from "../Components/auction/auctionItem";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";
import CategoryCard from "../Components/categoryCard";
import CategorySelector from "../Components/auction/CategorySelector";
import AuctionFilter from "../Components/auction/AuctionFilter";
import cat1 from "../img/cat-1.jpeg";
import cat2 from "../img/cat-2.jpeg";
import cat3 from "../img/cat-3.jpeg";
import cat4 from "../img/cat-4.jpeg";
import cat5 from "../img/cat-5.jpeg";
import cat6 from "../img/cat-6.jpeg";


const Test = () => {
  const categories = [
    {
      id: 1,
      name: "Electrónicos",
      image: cat1,
      link: "/Electronics",
    },
    {
      id: 2,
      name: "Ropa",
      image: cat2,
      link: "/Clothes",
    },
    {
      id: 3,
      name: "Hogar",
      image: cat3,
      link: "/HomeCat",
    },
    {
      id: 4,
      name: "Muebles",
      image: cat4,
      link: "/Furniture",
    },
    {
      id: 5,
      name: "Juguetes",
      image: cat5,
      link: "/VideoGames",
    },
    {
      id: 6,
      name: "Deportes",
      image: cat6,
      link: "/Sports",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Producto 1",
      description: "Descripción del producto 1",
      price: "$100",
      image:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Producto 2",
      description: "Descripción del producto 2",
      price: "$120",
      image:
        "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Producto 3",
      description: "Descripción del producto 3",
      price: "$150",
      image:
        "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="bg-gray-200">
      <div>
        <MainNavbar></MainNavbar>

        <div className="flex items-center gap-4 mb-4">
          <AuctionFilter className="flex-1" />
        </div>

        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Test Page</h1>
          <CategorySelector />
        </div>

        {/* Carrusel de subastas */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            Ejemplo de Carousel de Subastas
          </h1>
          <div className="max-w-full overflow-x-auto">
            <AuctionCarousel products={products} />
          </div>
        </div>

        {/* Ejemplo de productos */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Ejemplo productos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <AuctionItem
                key={product.id}
                title={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>

        {/* Sección de categorías */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Categorías</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                imageUrl={category.image}
                categoryName={category.name}
                linkTo={category.link}
              />
            ))}
          </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default Test;
