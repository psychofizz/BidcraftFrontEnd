import React from "react";
import AuctionItem from "./AuctionItem";

const TestAuctionItem = () => {
  const title = "Sample Item";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const price = 200;
  const endDate = new Date("2024-12-31").toISOString();

  return (
    <AuctionItem
      title={title}
      description={description}
      price={price}
      endDate={endDate}
    />
  );
};

export default TestAuctionItem;
