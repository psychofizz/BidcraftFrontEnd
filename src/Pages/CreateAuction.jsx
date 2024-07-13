import React from "react";

import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";

import TagItem from "../Components/page-essentials/TagItem";

const CreateAuction = () => {
  return (
    <div className="bg-bidcraft-grey-2">
      <MainNavbar></MainNavbar>

      <div className="flex flex-col bg-bidcraft-grey-2">
        <h1 className="bg-bidcraft-modal-bg text-xl p-4 text-white w-fulls rounded-xl ml-2 mr-2 mt-2 mb-1 ">
          Crear Subasta
        </h1>
        <section className="grid grid-cols-4 h-[700] ml-2 mr-2 mt-1 mb-2 space-x-2">
          <div className="flex flex-col overflow-y-auto">
            <form className="space-y-6 bg-bidcraft-modal-bg p-6 col-span-1 rounded-xl text-white">
              <div>
                <h2 className="text-xl font-light mb-2">Nuevo Item</h2>
                <label className="block text-sm font-light text-white mb-2">
                  Titulo
                </label>
                <input
                  type="text"
                  className="block w-full p-2 h-10 text-white rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-200 bg-bidcraft-grey-2"
                />
              </div>
              <div className="bg-bidcraft-grey-2 h-40 text-white items-center justify-center flex rounded-lg">
                Carga de imagenes
              </div>
              <div>
                <label className="block text-sm font-light text-white mb-2">
                  Descripción de la Subasta
                </label>
                <textarea className="block w-full h-48 text-white p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-200 bg-bidcraft-grey-2" />
              </div>
              <div>
                <label className="block text-sm font-light text-white mb-2">
                  Precio Inicial
                </label>
                <input
                  type="number"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-200 bg-bidcraft-grey-2"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Fecha Inicio
                  </label>
                  <input
                    type="date"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-200 bg-bidcraft-grey-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Fecha Final
                  </label>
                  <input
                    type="date"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-200 bg-bidcraft-grey-2"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Categoria
                </label>
                <input
                  type="text"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-200 bg-bidcraft-grey-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Tags
                </label>
                <textarea
                  type="text"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-200 bg-bidcraft-grey-2"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
                >
                  Crear
                </button>
              </div>
            </form>
          </div>
          <div className=" col-span-3 ">
            <div className="bg-bidcraft-modal-bg text-white h-full">
              <div className="bg-bidcraft-grey flex-1">
                <span className="p-4 m-4 ">Vista Previa</span>
                <div className="grid grid-rows-3 h-full ">
                  <div className="row-span-2">
                    <img
                      src="https://picsum.photos/400"
                      className="rounded-lg w-40 h-20 overflow-auto md: h-40 w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col p-4 space-y-4 bg-white shadow-lg rounded-lg">
                    <div className="flex items-center space-x-4">
                      <TagItem tag="Electronica" color="bg-green-500" />
                      <TagItem tag="Canon" />
                      <TagItem tag="Usada" />
                    </div>

                    <span className="text-xl font-semibold text-gray-600">
                      Yo sé lo que tengo
                    </span>

                    <div className="text-lg font-medium text-gray-700">
                      <span className="">Precio Inicial: </span>
                      <span className="text-gray-800">L.9000</span>
                    </div>

                    <div className="text-lg font-medium text-gray-700">
                      <span>9/28/2024</span>
                      <span> -- </span>
                      <span>9/31/2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="mt-8">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default CreateAuction;
