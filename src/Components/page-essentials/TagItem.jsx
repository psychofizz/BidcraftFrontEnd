import { Link } from 'react-router-dom';

const TagItem = ({ tag, category, color }) => {
  const displayText = tag ? `#${tag}` : category;
  const bgColor = color ? color : "bg-gray-400";

  return (
    <Link to={`/category/${category}`} className={`p-2 rounded-lg text-center text-black ${bgColor}`}>
      <span>{displayText}</span>
    </Link>
  );
};

export default TagItem;
