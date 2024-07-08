import React from "react";
import ImageComponent from "../page-essentials/image";

const AuctionItem = ({ title, description, price, endDate }) => {
  return (
    <div className="block rounded-lg bg-white p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
      <div className="mr-2">
        <ImageComponent
          src="https://picsum.photos/200"
          className="w-20 h-20 object-cover rounded-lg"
        />
      </div>
      <h5 className="mb-2 text-xl font-medium leading-tight">{title}</h5>
      <p className="mb-4 text-base">{description}</p>
      <p className="mb-4 text-base">Price: ${price}</p>
      <p className="mb-4 text-base">
        End Date: {new Date(endDate).toLocaleDateString()}
      </p>
      <button
        type="button"
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        Button
      </button>
    </div>
  );
};

export default AuctionItem;
