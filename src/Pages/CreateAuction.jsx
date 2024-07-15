import React, { useState, useEffect } from "react";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";
import TagItem from "../Components/page-essentials/TagItem";
import PageHeader from "../Components/page-essentials/PageHeader";

const CreateAuction = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/categories/show/all/');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const breadcrumbs = [
    { text: "Subastas", link: "/home" },
    { text: "Crear Subasta", link: "/auctions/create" }
  ];
  return (
    <div className="min-h-screen bg-bidcraft-grey-2">
      <MainNavbar />

      <main className="container mx-auto min-w-full px-2 py-2">
        <PageHeader title="Crear Subasta" breadcrumbs={breadcrumbs} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          <div className="lg:col-span-1">
            <form className="bg-bidcraft-modal-bg p-6 rounded-xl text-white space-y-2">
              <h2 className="text-xl font-semibold mb-4">Nuevo Item</h2>

              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">
                  Titulo
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                />
              </div>

              <div className="bg-bidcraft-grey-2 h-40 text-white flex items-center justify-center rounded-lg border-2 border-dashed border-gray-400">
                Carga de imagenes
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2">
                  Descripción de la Subasta
                </label>
                <textarea
                  id="description"
                  className="w-full h-48 p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                />
              </div>

              <div>
                <label htmlFor="initialPrice" className="block text-sm font-medium mb-2">
                  Precio Inicial
                </label>
                <input
                  type="number"
                  id="initialPrice"
                  className="w-full p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium mb-2">
                    Fecha Inicio
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    className="w-full p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                  />
                </div>
                <div>
                  <label htmlFor="endDate" className="block text-sm font-medium mb-2">
                    Fecha Final
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    className="w-full p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium mb-2">
                  Categoria
                </label>
                <select
                  id="category"
                  className="w-full p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                >
                  <option value="" className="text-white">Seleccionar categoria</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.category_name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="tags" className="block text-sm font-medium mb-2">
                  Tags
                </label>
                <textarea
                  id="tags"
                  className="w-full p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              >
                Crear
              </button>
            </form>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-bidcraft-modal-bg text-white h-full rounded-xl overflow-hidden">
              <h3 className="p-6 text-xl font-semibold">Vista Previa</h3>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreateAuction;