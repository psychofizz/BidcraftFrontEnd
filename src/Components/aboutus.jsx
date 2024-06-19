import React from 'react';

const AboutUs = () => (
  <section className="relative py-20 bg-black text-white">
    {/* Imagen de fondo opacada */}
    <img
      src="https://imgur.com/SJct479.png"
      alt="Subasta en vivo"
      className="absolute inset-0 object-cover w-full h-full opacity-50"
    />
    {/* Fondo oscuro semi-transparente */}
    <div className="absolute inset-0 bg-black opacity-50"></div>
    {/* Contenido */}
    <div className="container relative mx-auto z-10 text-center">
      <h2 className="text-3xl font-bold">Sobre Nosotros</h2>
      <p className="mt-6 max-w-2xl mx-auto">Sé parte de la familia de BidCraft y vive la emoción de las subastas como nunca antes.</p>
    </div>
  </section>
);

export default AboutUs;
