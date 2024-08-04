import React from "react";
import { Link } from 'react-router-dom';
import { differenceInDays, isPast } from 'date-fns';
import TagItem from "../page-essentials/TagItem";

const CountdownOrDaysSince = ({ endDate }) => {
  const today = new Date();
  const end = new Date(endDate);
  const diffDays = Math.abs(differenceInDays(end, today));

  const isPastDate = isPast(end);

  const message = isPastDate
    ? `${diffDays} dia${diffDays !== 1 ? 's' : ''} desde`
    : `${diffDays} dia${diffDays !== 1 ? 's' : ''} faltan`;

  return (
    <div className="text-xs text-gray-500">
      {message}
    </div>
  );
};

const AuctionItem = ({
  title,
  description,
  price,
  endDate,
  auctionId,
  category,
  imgUrl
}) => {


  return (
    <Link to={`/Auction/${auctionId}`} className="block m-2">
      <div className="relative bg-bidcraft-grey-2 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] z-10">
        <img
          src={imgUrl ? imgUrl.image_url : 'https://placehold.jp/30/2e2e2e/ffffff/600x400.png?text=Sin imagen'}
          alt={title}
          className="w-full h-80 object-cover"
        />
        <div className="absolute top-2 left-2 flex gap-2 flex-wrap z-20">
          <TagItem category={category} color="bg-blue-100 text-blue-800" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm rounded-t-lg p-4 transform translate-y-1/2 hover:translate-y-0 transition-transform duration-300 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-900 truncate">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-500 uppercase">Precio Actual</span>
            <span className="text-xl font-bold text-green-600">{`L.${price}`}</span>

          </div>
          <p className="text-sm text-gray-600 line-clamp-2 mt-4">
            {description}
          </p>
          <CountdownOrDaysSince endDate={endDate} />
        </div>
      </div>
    </Link>
  );
};

export default AuctionItem;