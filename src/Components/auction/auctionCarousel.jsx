import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AuctionCarousel = ({ products }) => {
  return (
    <div className="flex justify-center mb-4">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        className="mx-auto max-w-[600] w-full "
      >
        {products.map((product, index) => (
          <div key={index} className="carousel-item">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-lg font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AuctionCarousel;
