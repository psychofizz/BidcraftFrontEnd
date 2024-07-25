import React from 'react';

const AboutUs = () => (
  <section className="relative py-20 bg-black text-white">
    <div
      className="bg-fixed bg-cover absolute inset-0 w-full h-full opacity-50"
      style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
      aria-hidden="true"
    ></div>
    <div className="absolute inset-0 bg-black opacity-50" aria-hidden="true"></div>
    <div className="container relative mx-auto z-10 px-4">
      <h2 className="text-4xl text-yellow-400 font-bold text-center mb-6">
        Sobre Nosotros
      </h2>
      <p className="text-lg text-center max-w-2xl mx-auto leading-relaxed">
        Sé parte de la familia de BidCraft y vive la emoción de las subastas como nunca antes.
      </p>
    </div>
  </section>
);

export default AboutUs;
