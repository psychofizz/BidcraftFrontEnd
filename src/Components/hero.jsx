import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="relative bg-gray-900 text-white overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{
        backgroundImage: "url('/path/to/your/image.jpg')",
        filter: "brightness(0.4)"
      }}
      role="img"
      aria-label="Background image of an auction scene"
    ></div>

    <div className="container mx-auto px-4 py-20 sm:py-32 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Descubre el emocionante mundo de las subastas en línea
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-300">
          ¡Regístrate hoy y empieza a pujar por tus artículos favoritos!
        </p>
        <Link
          to="/login"
          className="inline-block bg-yellow-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-full hover:bg-yellow-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Comienza Ahora
        </Link>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent"></div>
  </section>
);

export default Hero;