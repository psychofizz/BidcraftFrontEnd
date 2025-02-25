import React, { useState, useEffect } from "react";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";
import PageHeader from "../Components/page-essentials/PageHeader";
// import TagInput from "../Components/auction/TagInput";
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AuctionInfo from "../Components/activeAuction/auctionInfo";

const CreateAuction = () => {
  //----------------------------Esta variable sirve para navegar entre pages-----------------------
  const navigate = useNavigate();
  const [isImageValid, setIsImageValid] = useState(false); // Estado para controlar si la imagen es válida


  //-----------------------------------------------------------------------------------------------

  const [file, setFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null); // Estado para la vista previa de la imagen

  const userId = JSON.parse(localStorage.getItem("User"));

  const [values, setValues] = useState({
    seller: userId.id,
    name: "",
    description: "",
    starting_price: "",
    buy_it_now_price: "",
    category: "", //id de la categoria 
    start_time: "",
    end_time: "",
    tag_name: ""

  });


  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });

  };



  //----------------------------------Este codigo srive para subir la iamgen en el servidor de imgur--------------------
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && !['image/png', 'image/jpeg', 'image/jpg'].includes(selectedFile.type)) {
      toast.error("Solo se permiten archivos PNG o JPG.");
      setIsImageValid(false)
      return;
    }

    setIsImageValid(true)
    setFile(selectedFile);
    // Crear una vista previa de la imagen usando FileReader
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
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

      await axios.post(`${process.env.REACT_APP_API_URL}/api/auction/image/add`, imgData);


      const tabs = {

        tag_name: values.tag_name
      }

      await axios.post(`${process.env.REACT_APP_API_URL}/api/tags/create/${imgData.auction}/`, tabs, {

        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}` // Incluir el token en los headers
        }
      });


    } catch (error) {

    }
  };

  //---------------------------------Esta no sirve para crear una nueva subasta ---------------------------

  const newAuction = async (event) => {
    event.preventDefault()

    // Validación de fecha
    const currentDate = new Date();
    const selectedEndDate = new Date(values.end_time);

    if (selectedEndDate <= currentDate) {
      toast.error("La fecha de finalización no puede ser en el pasado.");
      return;
    }
    if (values.starting_price  >= values.buy_it_now_price) {
      toast.error("El precio inicial no puede ser mayor que el de comprar ahora");
      return;
    }

    if (!isImageValid) {
      toast.error("Por favor, sube una imagen válida antes de crear la subasta.");
      return;
    }
    try {

      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auction/create/one/`, values);





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
        toast.warning("Error al crear subasta")
      }
    }
  };
  //--------------------------------- ---------------------------------------------------------------------------


  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/categories/show/all/`);

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
                  required />
              </div>

              <div className="bg-bidcraft-grey-2 h-40 text-white flex items-center justify-center rounded-lg border-2 border-dashed border-gray-400">
                <input type="file" accept="image/*" onChange={handleFileChange} required />
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
                  required />
              </div>
              <div>
                <label htmlFor="initialPrice" className="block text-sm font-medium mb-2">
                  Precio compra ahora
                </label>
                <input onChange={(e) => handleChange(e)}
                  name="buy_it_now_price"
                  type="text"
                  id="initialPrice"
                  className="w-full p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition" required
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
                  className="w-full p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition" required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="hidden">
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
                    className="w-full p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition" required
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
                  required>
                  <option value="" className="text-white">Seleccionar categoria</option>
                  {categories.map((category) => (
                    <option key={category.category_id} value={category.category_id}>
                      {category.category_name}
                    </option>
                  ))}
                </select>
              </div>

              {/* <TagInput /> */}
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
                  imageUrl={imagePreviewUrl}


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