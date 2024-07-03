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
  const [quantity, setQuantity] = useState("");

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

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const clearForm = () => {
      setTitle("");
      setDescription("");
      setStartDate(null);
      setInitialPrice("");
      setFinalPrice("");
      setQuantity("");
    };
    
 
    const auctionProduct = {
      name: title,
      description: description,
      starting_price: initialPrice,
      buy_it_now_price: finalPrice,
      quantity: quantity,
      date_listed: startDate,
    };

    try {
      const response = await fetch("http://localhost:8000/auction/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(auctionProduct),
      });

      if (!response.ok) {
        switch (response.status) {
          case 400:
            const errorData = await response.json();
            console.error(
              "Error en la creación de la subasta:",
              errorData
            );
            break;
          default:
            console.error("Error al crear la subasta");
            break;
        }
      } else {
        const createdAuction = await response.json();
        console.log("La subasta creado exitosamente:", createdAuction);
        clearForm();
      }
    } catch (error) {

    }

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
          <div className="flex items-center mt-2">
            <p className="mr-2 text-black font-bold">Cantidad del articulo</p>
          </div>
          <div className="flex justify-center items-center">
            <input
              type="number"
              id="quantity"
              className="w-80 border rounded-md p-2 text-black bg-white-700"
              placeholder="Cantidad de producto"
              value={quantity}
              onChange={handleQuantity}
            />
          </div>
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
