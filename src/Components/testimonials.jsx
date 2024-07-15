import React from 'react'
import t1 from '../img/t-1.jpg'
import t2 from '../img/t-2.png'
import t3 from '../img/t-3.jpg'

const testimonials = [
  {
    text: "¡Esta plataforma ha transformado la forma en que gestiono mis subastas! Es fácil de usar y me permite llegar a un público más amplio.",
    img: t1,
    alt: "Testimonio 1",
  },
  {
    text: "BIDCRAFT es una herramienta increíble para subastas. Las funciones son intuitivas y me han ayudado a conseguir excelentes ofertas en mis artículos.",
    img: t2,
    alt: "Testimonio 2",
  },
  {
    text: "Recomiendo encarecidamente BIDCRAFT a todos los compradores y vendedores. La plataforma es segura, confiable y ofrece una gran variedad de artículos.",
    img: t3,
    alt: "Testimonio 3",
  },
];

const Testimonials = () => (
  <section className="py-20 bg-gray-100" aria-labelledby="testimonials-heading">
    <div className="container mx-auto">
      <h2 id="testimonials-heading" className="text-3xl text-ffc327 font-bold text-center mb-10">Testimonios</h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="shadow-lg p-6 rounded-lg flex flex-col h-full text-center bg-white">
              <blockquote className="italic mb-4 text-gray-700">
                "{testimonial.text}"
              </blockquote>
              <img src={testimonial.img} alt={testimonial.alt} className="mx-auto h-24 w-24 rounded-full border-4 border-gray-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
