import React from "react";
import Notification from "./NotificationItem"; // Adjust the path as per your file structure

const TestNotification = () => {
  return (
    <Notification
      image="https://picsum.photos/200"
      itemName="Example Item"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      link="#example-link"
      onErase={() => {

      }}
    />
  );
};

export default TestNotification;
