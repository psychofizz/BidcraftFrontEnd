import React from 'react';

const Testimonials = () => (
  <section className="py-20">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center">Testimonios</h2>
      <div className="flex flex-wrap justify-center mt-10">
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="shadow-lg p-6 rounded flex flex-col h-full text-center">
            <blockquote className="italic mb-4">
              "¡Esta plataforma ha transformado la forma en que gestiono mis subastas! Es fácil de usar y me permite llegar a un público más amplio."
            </blockquote>
            <img src="https://imgur.com/nuhkY57.png" alt="t-1" className="mx-auto h-24 w-24 rounded-full" />
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="shadow-lg p-6 rounded flex flex-col h-full text-center">
            <blockquote className="italic mb-4">
              "BIDCRAFT es una herramienta increíble para subastas. Las funciones son intuitivas y me han ayudado a conseguir excelentes ofertas en mis artículos."
            </blockquote>
            <img src="https://imgur.com/Jd3nErP.png" alt="t-2" className="mx-auto h-24 w-24 rounded-full" />
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="shadow-lg p-6 rounded flex flex-col h-full text-center">
            <blockquote className="italic mb-4">
              "Recomiendo encarecidamente BIDCRAFT a todos los compradores y vendedores. La plataforma es segura, confiable y ofrece una gran variedad de artículos."
            </blockquote>
            <img src="https://imgur.com/38zAMnM.png" alt="t-3" className="mx-auto h-24 w-24 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
