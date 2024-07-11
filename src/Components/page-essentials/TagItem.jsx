import React from "react";

const TagItem = ({ tag, category, color }) => {
  const displayText = tag ? `#${tag}` : category;
  const bgColor = color ? color : "bg-gray-400";

  return (
    <span className={`p-[2%] rounded-lg text-center text-white ${bgColor}`}>
      {displayText}
    </span>
  );
};

export default TagItem;
