import React from 'react';
import ft1 from '../img/ft-1.jpg'
import ft2 from '../img/ft-2.png'
import ft3 from '../img/ft-3.jpg'

const Features = () => (
  <section className="py-20">
    <div className="container mx-auto">
      <h2 className="text-3xl text-ffc327 font-bold text-center">¿Que es BIDCRAFT?</h2>
      <div className="flex flex-wrap justify-center mt-10">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-primary text-black p-6 rounded shadow-lg flex flex-col h-full">
            <img src={ft1} alt="Persona pujando" className="mb-4 mx-auto" />
            <h3 className="text-xl text-ffc327 font-bold">Subastas dinámicas y emocionantes</h3>
            <p className="mt-2">
              Participa en subastas en tiempo real y puja por los artículos que te interesan. Nuestra plataforma te permite realizar ofertas fácilmente y seguir el progreso de las subastas en todo momento.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-primary text-black p-6 rounded shadow-lg flex flex-col h-full">
            <img src={ft2} alt="Colección de objetos" className="mb-4 mx-auto" />
            <h3 className="text-xl text-ffc327 font-bold">Amplia variedad de artículos</h3>
            <p className="mt-2">
              Descubre una gran selección de artículos de distintas categorías. Ya sea que busques antigüedades, objetos de colección, o artículos de uso cotidiano, BIDCRAFT te ofrece la oportunidad de encontrar lo que necesitas a un precio increíble.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-primary text-black p-6 rounded shadow-lg flex flex-col h-full">
            <img src={ft3} alt="Seguridad" className="mb-4 mx-auto" />
            <h3 className="text-xl text-ffc327 font-bold">Seguridad y confianza</h3>
            <p className="mt-2">
              BIDCRAFT se compromete con la seguridad y la transparencia en todas las transacciones. Nuestro sistema de pago seguro garantiza la protección de tu información financiera. Además, contamos con un equipo de soporte dedicado a ayudarte en cualquier momento.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
