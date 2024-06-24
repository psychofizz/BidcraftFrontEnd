import React from 'react';
import { Link } from 'react-router-dom';
import bidlogo from '../img/bidcraft.JPG'

const Header = () => (
  <header className="bg-primary p-4">
    <nav className="flex flex-wrap justify-between items-center">
      <div className="ml-2 flex-shrink-0">
        <img src={bidlogo} alt="bidcraft" className="h-20 w-auto" />
      </div>
      <div className="w-full sm:w-auto flex justify-center mt-4 sm:mt-0">
        <ul className="flex space-x-4 text-black">
          <li>
            <Link
              to="/login"
              className="bg-ffc327 text-black font-bold px-6 py-2 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              Iniciar Sesión
            </Link>
          </li>
          <li>
            <Link
              to="/form"
              className="bg-ffc327 text-black font-bold px-6 py-2  shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              Registrar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
