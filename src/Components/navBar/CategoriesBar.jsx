import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
const CategoryItem = ({ id, name }) => {
  return (
    <Link
      to={`/category/${name}`}
      className="px-4 py-2 whitespace-nowrap hover:bg-gray-700 transition-colors duration-200"
    >
      {name}
    </Link>
  );
};

const MobileMenu = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white focus:outline-none"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="px-4 py-2">
              {categories.map((category) => (
                <div key={category.category_id} className="py-2 border-b border-gray-700 last:border-b-0">
                  <CategoryItem id={category.category_id} name={category.category_name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CategoriesBar = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {


    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/categories/show/all`);
        setCategories(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError('Failed to fetch categories. Please try again later.');
        setIsLoading(false);
      }
    };


    fetchCategories();
  }, []);

  if (isLoading) {
    return <div className="bg-black text-white p-2 animate-pulse">Cargando categorias...</div>;
  }

  if (error) {
    return <div className="text-white">{error}</div>;
  }

  return (
    <nav className="bg-black text-white sm:flex">
      <div className="flex items-center justify-between p-2">
        <span className="font-bold">Categorias</span>
        <MobileMenu categories={categories} />
      </div>
      <div className="hidden sm:flex overflow-x-auto">
        {categories.map((category) => (
          <CategoryItem
            key={category.category_id}
            id={category.category_name}
            name={category.category_name}
          />
        ))}
      </div>
    </nav>
  );
};

export default CategoriesBar;