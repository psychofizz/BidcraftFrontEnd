import React from "react";

const ImageComponent = ({ src, alt = "", className = "" }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 ${className}`}
    />
  );
};

export default ImageComponent;
