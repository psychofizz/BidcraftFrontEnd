import React from 'react';
import aboutimg from '../img/au-1.jpg'

const AboutUs = () => (
  <section className="relative py-20 bg-black text-white">
    <img
      img src={aboutimg} 
      alt="Subasta en vivo" 
      className="absolute inset-0 object-cover w-full h-full opacity-50"
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="container relative mx-auto z-10 px-4">
      <h2 className="text-3xl text-ffc327 font-bold text-center">Sobre Nosotros</h2>
      <p className="mt-6 text-center max-w-2xl mx-auto">Sé parte de la familia de BidCraft y vive la emoción de las subastas como nunca antes.</p>
    </div>
  </section>
);

export default AboutUs;
