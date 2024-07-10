import React from "react";
import bidLogo from "../bidLogo.png";

const Footer = () => {
  return (
    <div className="bottom-0 w-full">
      <footer className="grid p-4 md:grid-cols-4 bg-bidcraft-main w-full ">
        <div className="flex flex-col p-4 text-white items-center md:items-start ">
          <span className="font-bold">Sobre Bidcraft</span>
          <div className="font-light underline flex flex-col md:items-start  items-center">
            <a href="/como-subastar" className="hover:scale-105 transition-all">
              Como Subastar
            </a>
            <a href="/como-comprar" className="hover:scale-105 transition-all">
              Como Comprar
            </a>
            <a
              href="/finalizar-venta"
              className="hover:scale-105 transition-all"
            >
              Como Finalizar Venta
            </a>
          </div>
        </div>

        <div className="flex flex-col p-4 text-white items-center md:items-start ">
          <span className="font-bold">Cuenta</span>
          <div className="font-light underline flex flex-col md:items-start items-center">
            <a href="/form" className="hover:scale-105 transition-all">
              Registro
            </a>
            <a href="/login" className="hover:scale-105 transition-all">
              Login
            </a>
            <a href="/help" className="hover:scale-105 transition-all">
              Ayuda
            </a>
          </div>
        </div>
        <div></div>
        <div className="flex p-4 flex-col items-center">
          <img
            src={bidLogo}
            className="h-20 w-20 flex-shrink-0"
            alt="Bidcraft Logo"
          />
          <span className="font-bold text-white">Bidcraft Inc</span>
          <span className="font-light text-white">Copyleft © 2024</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
