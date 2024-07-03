import React from 'react';
import mainLogo from '../img/bidLogo.png'

const Footer = () => {
  return (
    <footer className="bg-ffc327 text-white py-8 mt-[20%]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex flex-col md:flex-row md:space-x-8 w-full">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="font-bold">Sobre Bidcraft</h3>
            <ul>
              <li><a href="#quienes-somos" className="hover:underline">Quienes Somos</a></li>
              <li><a href="#contactenos" className="hover:underline">Contactenos</a></li>
            </ul>
            <select className="bg-black text-white p-2 rounded mt-4 w-80">
              <option>Español (Honduras)</option>
            </select>
          </div>
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="font-bold">Como funciona</h3>
            <ul>
              <li><a href="#como-subastar" className="hover:underline">Como subastar</a></li>
              <li><a href="#como-comprar" className="hover:underline">Como comprar</a></li>
              <li><a href="#finalizar-venta" className="hover:underline">Finalizar la venta</a></li>
            </ul>
          </div>
          <div className="flex-2 mb-4 md:mb-0">
            <h3 className="font-bold">Cuenta Bidcraft</h3>
            <ul>
              <li><a href="#registro" className="hover:underline">Registro</a></li>
              <li><a href="#login" className="hover:underline">Login</a></li>
              <li><a href="#ayuda" className="hover:underline">Ayuda</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end mt-4 md:mt-0 w-full">
          <img src={mainLogo} alt="Logo" className="h-16 w-16 mb-4" />
          <div className="text-center md:text-right">
            <p>Copyright 2024 Bidcraft Inc.</p>
            <a href="#privacidad" className="hover:underline">Privacidad</a> | <a href="#terminos" className="hover:underline">Terminos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
