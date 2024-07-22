import React, { useState, useEffect } from "react";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";
import TagItem from "../Components/page-essentials/TagItem";
import PageHeader from "../Components/page-essentials/PageHeader";
import TagInput from "../Components/auction/TagInput";
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AuctionInfo from "../Components/activeAuction/auctionInfo";

const CreateAuction = () => {
  //----------------------------Esta variable sirve para navegar entre pages-----------------------
  const navigate = useNavigate();

  //-----------------------------------------------------------------------------------------------

  const [file, setFile] = useState(null);

  const userId = JSON.parse(localStorage.getItem("User"));

  const [values, setValues] = useState({
    seller: userId.id,
    name: "",
    description: "",
    starting_price: "",
    buy_it_now_price: 200.00,
    category: "", //id de la categoria 
    start_time: "",
    end_time: "",
    tag_name: ""

  });

  const [values2, setValues2] = useState({

    tag_name: ""
  });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });

  };



  //----------------------------------Este codigo srive para subir la iamgen en el servidor de imgur--------------------
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('https://api.imgur.com/3/image', formData, {
        headers: {
          Authorization: 'Client-ID 66a3c4364f2dc63', // Reemplaza con tu propio Client ID
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        const data = response.data;

        const u = `https://i.imgur.com/${data.data.id}.png`;
        return u;
      } else {
        console.error('Error al subir la imagen a Imgur');
        return null;
      }
    } catch (error) {
      console.error('Error de red:', error);
      return null;
    }
  };
  //---------------------------------Esta nos srive para enviar la imagen al servidor la url ---------------------------


  const saveImgur = async (idAuction, urlmage) => {
    const imgData = {
      auction: idAuction,
      image_url: urlmage
    }
    try {

      const response = await axios.post(`http://127.0.0.1:8000/api/auction/image/add`, imgData);


      const tabs = {

        tag_name: values.tag_name
      }

      const response2 = await axios.post(`http://127.0.0.1:8000/api/tags/create/${imgData.auction}/`, tabs);


    } catch (error) {

    }
  };

  //---------------------------------Esta no sirve para crear una nueva subasta ---------------------------

  const newAuction = async (event) => {
    event.preventDefault()
    try {

      const response = await axios.post(`http://127.0.0.1:8000/api/auction/create/one/`, values);





      const imageUrl = await handleImageUpload();
      if (imageUrl) {




        saveImgur(response.data.data.auction_id, imageUrl);
        toast.success(response.data.message)
        navigate("/home")

      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errors = error.response.data;
        for (const field in errors) {
          if (errors.hasOwnProperty(field)) {
            errors[field].forEach((errorMessage) => {

              toast.warning(errorMessage)
            });
          }
        }
      } else {
        console.error('An unknown error occurred.');
      }
    }
  };
  //--------------------------------- ---------------------------------------------------------------------------


  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/categories/show/all/');
      
        const data = response.data;
      
        setCategories(data);
      } catch (error) {
        if (error.response) {
          console.error('Error fetching categories:', error.response.data);
        } else {
          console.error('Error fetching categories:', error.message);
        }
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
            <form className="bg-bidcraft-modal-bg p-6 rounded-xl text-white space-y-2" onSubmit={(event) => newAuction(event)} >
              <h2 className="text-xl font-semibold mb-4">Nuevo Item</h2>

              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">
                  Titulo
                </label>
                <input onChange={(e) => handleChange(e)}
                  name="name"
                  type="text"
                  id="title"
                  className="w-full p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                />
              </div>

              <div className="bg-bidcraft-grey-2 h-40 text-white flex items-center justify-center rounded-lg border-2 border-dashed border-gray-400">
                <input type="file" accept="image/*" onChange={handleFileChange} />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2">
                  Descripción de la Subasta
                </label>
                <textarea
                  onChange={(e) => handleChange(e)}
                  name="description"
                  id="description"
                  className="w-full h-48 p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                />
              </div>
              <div>
                <label htmlFor="initialPrice" className="block text-sm font-medium mb-2">
                  Precio compra ahora
                </label>
                <input onChange={(e) => handleChange(e)}
                  name="buy_it_now_price"
                  type="text"
                  id="initialPrice"
                  className="w-full p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                />
              </div>
              <div>
                <label htmlFor="initialPrice" className="block text-sm font-medium mb-2">
                  Precio Inicial
                </label>
                <input onChange={(e) => handleChange(e)}
                  name="starting_price"
                  type="text"
                  id="initialPrice"
                  className="w-full p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium mb-2">
                    Fecha Inicio
                  </label>
                  <input onChange={(e) => handleChange(e)}
                    name="start_time"
                    type="date"
                    id="startDate"
                    className="w-full p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                  />
                </div>
                <div>
                  <label htmlFor="endDate" className="block text-sm font-medium mb-2">
                    Fecha Final
                  </label>
                  <input onChange={(e) => handleChange(e)}
                    name="end_time"
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
                <select onChange={(e) => handleChange(e)}
                  name="category"
                  id="category"
                  className="w-full p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                >
                  <option value="" className="text-white">Seleccionar categoria</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.category_id}>
                      {category.category_name}
                    </option>
                  ))}
                </select>
              </div>

              <TagInput />
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">
                  Agregar Tag
                </label>
                <input onChange={(e) => handleChange(e)}
                  name="tag_name"
                  type="text"
                  id="title"
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
              <div >
                <AuctionInfo
                  name={values.name}
                  description={values.description}


                ></AuctionInfo>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreateAuction;