import React from 'react';
import ft1 from '../img/ft-1.jpg';
import ft2 from '../img/ft-2.png';
import ft3 from '../img/ft-3.jpg';

const FeatureCard = ({ image, alt, title, description }) => (
  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-lg flex flex-col h-full transition-transform duration-300 hover:scale-105">
      <img src={image} alt={alt} className="mb-6 mx-auto w-32 h-32 object-cover rounded-full border-4 border-blue-600" />
      <h3 className="text-xl text-blue-700 font-bold mb-3">{title}</h3>
      <p className="mt-auto">{description}</p>
    </div>
  </div>
);

const features = [
  {
    image: ft1,
    alt: "Persona pujando",
    title: "Subastas dinámicas y emocionantes",
    description: "Participa en subastas en tiempo real y puja por los artículos que te interesan. Nuestra plataforma te permite realizar ofertas fácilmente y seguir el progreso de las subastas en todo momento."
  },
  {
    image: ft2,
    alt: "Colección de objetos",
    title: "Amplia variedad de artículos",
    description: "Descubre una gran selección de artículos de distintas categorías. Ya sea que busques antigüedades, objetos de colección, o artículos de uso cotidiano, BIDCRAFT te ofrece la oportunidad de encontrar lo que necesitas a un precio increíble."
  },
  {
    image: ft3,
    alt: "Seguridad",
    title: "Seguridad y confianza",
    description: "BIDCRAFT se compromete con la seguridad y la transparencia en todas las transacciones. Nuestro sistema de pago seguro garantiza la protección de tu información financiera. Además, contamos con un equipo de soporte dedicado a ayudarte en cualquier momento."
  }
];

const Features = () => (
  <section className="py-20 bg-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl text-white font-bold text-center mb-12">¿Qué es BIDCRAFT?</h2>
      <div className="flex flex-wrap -mx-4 justify-center">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

export default Features;