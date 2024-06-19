import React from 'react';

const Features = () => (
  <section className="py-20">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">¿Qué es BIDCRAFT?</h2>
      <div className="flex flex-wrap justify-center -mx-4">
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-primary text-black p-6 rounded shadow-lg flex flex-col h-full">
            <img src="https://imgur.com/eCPyLC8.png" alt="Persona pujando" className="mb-4 mx-auto w-24" />
            <h3 className="text-xl font-bold text-center">Subastas dinámicas y emocionantes</h3>
            <p className="mt-2 text-center">
              Participa en subastas en tiempo real y puja por los artículos que te interesan. Nuestra plataforma te permite realizar ofertas fácilmente y seguir el progreso de las subastas en todo momento.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-primary text-black p-6 rounded shadow-lg flex flex-col h-full">
            <img src="https://imgur.com/97uXy4K.png" alt="Colección de objetos" className="mb-4 mx-auto w-24" />
            <h3 className="text-xl font-bold text-center">Amplia variedad de artículos</h3>
            <p className="mt-2 text-center">
              Descubre una gran selección de artículos de distintas categorías. Ya sea que busques antigüedades, objetos de colección, o artículos de uso cotidiano, BIDCRAFT te ofrece la oportunidad de encontrar lo que necesitas a un precio increíble.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-primary text-black p-6 rounded shadow-lg flex flex-col h-full">
            <img src="https://imgur.com/vt2lvNv.png" alt="Seguridad" className="mb-4 mx-auto w-24" />
            <h3 className="text-xl font-bold text-center">Seguridad y confianza</h3>
            <p className="mt-2 text-center">
              BIDCRAFT se compromete con la seguridad y la transparencia en todas las transacciones. Nuestro sistema de pago seguro garantiza la protección de tu información financiera. Además, contamos con un equipo de soporte dedicado a ayudarte en cualquier momento.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
