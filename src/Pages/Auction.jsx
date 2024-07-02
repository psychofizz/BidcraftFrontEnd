import React from "react";
import { useState } from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";

function Auction() {
  const [title, setTitle] = useState("");
  const [gallery, setGallery] = useState([]);
  const [description, setDescription] = useState("");
  const [deliveryDescription, setDeliveryDescription] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [initialPrice, setInitialPrice] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const [region, setRegion] = useState("");
  const [deliveryCost, setDeliveryCost] = useState("");

  const handleGalleryChange = (event) => {
    const files = Array.from(event.target.files);
    if (gallery.length + files.length <= 10) {
      setGallery([...gallery, ...files]);
    } else {
      alert("Solo se pueden subir 10 imagenes");
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDeliveryDescriptionChange = (event) => {
    setDeliveryDescription(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleInitialPriceChange = (event) => {
    setInitialPrice(event.target.value);
  };

  const handleFinalPriceChange = (event) => {
    setFinalPrice(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleDeliveryCostChange = (event) => {
    setDeliveryCost(event.target.value);
  };

  const handleRemoveImage = (index) => {
    const newGallery = gallery.filter((_, i) => i !== index);
    setGallery(newGallery);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Datos para llenar formulario de subasta
    console.log({
      gallery,
      description,
      deliveryDescription,
      startDate,
      endDate,
      initialPrice,
      finalPrice,
      region,
      deliveryCost,
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <form onSubmit={handleSubmit} className="bg-primary p-6">
        <div className="flex justify-center text-xl font-bold text-black mb-8">
          <h1>Creacion de nueva subasta</h1>
        </div>
        <div className="mb-4 rounded-md px-4 py-2 shadow-md">
          <h2 className="text-xl font-bold text-black mb-2">
            Articulo a subastar
          </h2>
          <div className="flex items-center">
            <p className="text-black">Titulo del articulo</p>
          </div>
          <textarea
            className="w-full resize-none border rounded-md text-black bg-white-700 mx-auto max-w-[40%]"
            value={title}
            onChange={handleTitleChange}
          />
          <div className="flex items-center mt-2">
            <label htmlFor="gallery-input" className="ml-2">
              <button
                type="button"
                className="bg-ffc327 hover:bg-comp1 text-white font-bold py-1 px-2 rounded-lg"
                onClick={() => document.getElementById("gallery-input").click()}
              >
                Agregar fotos
              </button>
            </label>
            <input
              type="file"
              id="gallery-input"
              className="hidden"
              onChange={handleGalleryChange}
              multiple
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2 md:grid-cols-4 lg:grid-cols-5">
            {gallery.map((file, index) => (
              <div
                key={index}
                className="relative bg-gray-100 rounded-md p-auto overflow-hidden"
              >
                <button
                  type="button"
                  className="absolute top-0 right-0 m-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
                  onClick={() => handleRemoveImage(index)}
                >
                  x
                </button>
                <img
                  src={URL.createObjectURL(file)}
                  alt="Imagen del producto"
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4 rounded-md px-4 py-2 shadow-md">
          <h2 className="text-xl font-bold text-black mb-2">
            Descripcion del Articulo
          </h2>
          <div className="flex items-center">
            <p className="text-black">Establecer una descripcion</p>
          </div>
          <textarea
            className="w-full flex justify-center resize-none border rounded-md p-2 mt-2 text-black bg-white-700 mx-auto h-40 min-h-[10rem] max-w-[70%]"
            placeholder="Escribe una descripción del producto..."
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="mb-4 rounded-md px-4 py-2 shadow-md">
          <h2 className="text-xl font-bold text-black mb-2">Fecha</h2>
          <div className="flex items-center">
            <p className="text-black">Programar fecha de subasta</p>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-2">
            <label htmlFor="start-date" className="mr-2 text-black">
              Fecha de inicio
            </label>
            <input
              type="date"
              id="start-date"
              className="border rounded-md p-2 text-black bg-white-700"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center mt-2">
            <label htmlFor="end-date" className="mr-2 text-black">
              Fecha de finalizacion
            </label>
            <input
              type="date"
              id="end-date"
              className="border rounded-md p-2 text-black bg-white-700"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>
        </div>
        <div className="mb-4 rounded-md px-4 py-2 shadow-md">
          <h2 className="text-xl font-bold text-black mb-2">
            Precio del articulo
          </h2>
          <div className="flex items-center">
            <p className="text-black">Establecer precio inicial</p>
          </div>
          <div className="flex justify-center items-center">
            <input
              type="number"
              className="w-80 border rounded-md p-2 mt-2 text-black bg-white-700"
              placeholder="Precio inicial"
              value={initialPrice}
              onChange={handleInitialPriceChange}
            />
          </div>
          <div className="flex items-center mt-2">
            <p className="text-black">Establecer precio de venta</p>
          </div>
          <div className="flex justify-center items-center">
            <input
              type="number"
              className="w-80 border rounded-md p-2 mt-2 text-black bg-white-700"
              placeholder="Precio de venta"
              value={finalPrice}
              onChange={handleFinalPriceChange}
            />
          </div>
        </div>
        <div className="mb-4 rounded-md px-4 py-2 shadow-md">
          <h2 className="text-xl font-bold text-black mb-2">Region de venta</h2>
          <div className="flex items-center">
            <p className="text-black">Establecer region de venta</p>
          </div>
          <div className="flex items-center mt-2">
            <select
              id="region"
              className="w-full border rounded-md p-2 text-black bg-white"
              value={region}
              onChange={handleRegionChange}
            >
              {/* Opciones para los 18 departamentos de Honduras */}
              <option value="">Selecciona un departamento</option>
              <option value="Atlántida">Atlántida</option>
              <option value="Colón">Colón</option>
              <option value="Comayagua">Comayagua</option>
              <option value="Copán">Copán</option>
              <option value="Cortés">Cortés</option>
              <option value="Choluteca">Choluteca</option>
              <option value="El Paraíso">El Paraíso</option>
              <option value="Francisco Morazán">Francisco Morazán</option>
              <option value="Gracias a Dios">Gracias a Dios</option>
              <option value="Intibucá">Intibucá</option>
              <option value="Islas de la Bahía">Islas de la Bahía</option>
              <option value="La Paz">La Paz</option>
              <option value="Lempira">Lempira</option>
              <option value="Ocotepeque">Ocotepeque</option>
              <option value="Olancho">Olancho</option>
              <option value="Santa Bárbara">Santa Bárbara</option>
              <option value="Valle">Valle</option>
              <option value="Yoro">Yoro</option>
            </select>
          </div>
          <div className="flex items-center mt-2">
            <p className="text-black">Establecer descripcion de entrega</p>
          </div>
          <textarea
            className="w-full flex justify-center resize-none border rounded-md p-2 mt-2 text-black bg-white-700 mx-auto h-40 min-h-[10rem] max-w-[70%]"
            placeholder="Escribe una descripción de la entrega..."
            value={deliveryDescription}
            onChange={handleDeliveryDescriptionChange}
          />
        </div>
        <div className="mb-4 rounded-md px-4 py-2 shadow-md">
          <div className="flex items-center mt-2">
            <p className="mr-2 text-black font-bold">
              Costo de entrega (Opcional)
            </p>
          </div>
          <div className="flex justify-center items-center">
            <input
              type="number"
              id="delivery-cost"
              className="w-80 border rounded-md p-2 text-black bg-white-700"
              placeholder="Costo de entrega"
              value={deliveryCost}
              onChange={handleDeliveryCostChange}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-ffc327 hover:bg-comp2 text-white font-bold py-2 px-4 rounded"
          >
            Aceptar
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Auction;
