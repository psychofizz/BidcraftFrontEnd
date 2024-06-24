import React from 'react';
import { Link } from 'react-router-dom';
import h1 from '../img/h-1.jpg'

const Hero = () => (
  <section className="bg-primary text-black text-center py-0">
    <div className="relative">
      <img src= {h1} alt="Subasta en vivo" className="absolute inset-0 object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto relative px-4 py-40 sm:py-80">
        <p className="mt-4 text-4xl sm:text-6xl font-serif text-white leading-tight">
          ¡Regístrate hoy y empieza a pujar por tus artículos favoritos!
        </p>
        <Link
          to="/login"
          className="mt-8 sm:mt-10 bg-ffc327 text-black font-bold px-6 py-3 sm:py-4  hover:shadow-lg transition-shadow duration-300 inline-block"
        >
          Comienza Ahora
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;
