import React, { useState, useEffect } from "react";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";
import PageHeader from "../Components/page-essentials/PageHeader";
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AuctionInfo from "../Components/activeAuction/auctionInfo";
import { useParams } from "react-router-dom";

function EditAuction() {
    const navigate = useNavigate();
    const { id: auctionId } = useParams();

    // State para manejar el archivo de imagen
    // const [file, setFile] = useState(null);

    const userId = JSON.parse(localStorage.getItem("User"));

    // State para manejar los valores del formulario
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

    // Manejar cambios en los inputs del formulario
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    // Manejar cambios en el input de archivo
    // const handleFileChange = (e) => {
    //     setFile(e.target.files[0]);
    // };

    // // Subir imagen a Imgur
    // const handleImageUpload = async () => {
    //     const formData = new FormData();
    //     formData.append('image', file);

    //     try {
    //         const response = await axios.post('https://api.imgur.com/3/image', formData, {
    //             headers: {
    //                 Authorization: 'Client-ID 66a3c4364f2dc63', // Reemplaza con tu propio Client ID
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         });

    //         if (response.status === 200) {
    //             const data = response.data;
    //             const u = `https://i.imgur.com/${data.data.id}.png`;
    //             return u;
    //         } else {
    //             console.error('Error al subir la imagen a Imgur');
    //             return null;
    //         }
    //     } catch (error) {
    //         console.error('Error de red:', error);
    //         return null;
    //     }
    // };

    // // Guardar imagen en el servidor
    // const saveImgur = async (idAuction, urlmage) => {
    //     const imgData = {
    //         auction: idAuction,
    //         image_url: urlmage
    //     };
    //     try {
    //         await axios.post(`${process.env.REACT_APP_API_URL}/api/auction/image/add`, imgData);

    //         const tabs = {
    //             tag_name: values.tag_name
    //         };

    //         await axios.post(`${process.env.REACT_APP_API_URL}/api/tags/create/${imgData.auction}/`, tabs);
    //     } catch (error) {
    //         console.error('Error guardando imagen en el servidor:', error);
    //     }
    // };

    // Editar la subasta
    const editAuction = async (event) => {
        event.preventDefault();
        const { name, description, starting_price, buy_it_now_price, category,end_time } = values;

        const updatedAuctionData = {
            name,
            description,
            starting_price,
            buy_it_now_price,
            category,
            end_time
        };

        try {

            await axios.patch(`${process.env.REACT_APP_API_URL}/api/auction/edit/one/${auctionId}/`, updatedAuctionData);

            toast.success("Subasta editada exitosamente");
            navigate("/home");
            // const imageUrl = await handleImageUpload();
            // if (imageUrl) {
            //     saveImgur(response.data.data.auction_id, imageUrl);
              
            // }
        } catch (error) {
            if (error.response && error.response.data) {
                console.error('Error:', error.response.data);
            } else {
                console.error('Error:', error);
            }
        }
    };

    // State para manejar las categorías
    const [categories, setCategories] = useState([]);

    // Obtener categorías y datos de la subasta al montar el componente
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

        const fetchAuctionData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/auction/show/one/${auctionId}/`);
                const data = response.data;
                console.log(data)
                setValues({
                    seller: data.seller.id,
                    name: data.name,
                    description: data.description,
                    starting_price: data.starting_price,
                    buy_it_now_price: data.buy_it_now_price,
                    category: data.category.category_id,
                    end_time: data.end_time.split('T')[0], // Solo la fecha
                    tag_name: data.tags ? data.tags.join(', ') : '', // Asumiendo que tags es un array
                    imgUrl: data.images[0]
                });
            } catch (error) {
                console.error('Error fetching auction data:', error);
            }
        };

        fetchCategories();
        fetchAuctionData();
    }, [auctionId]);

    const breadcrumbs = [
        { text: "Subastas", link: "/home" },
        { text: "Editar Subasta", link: `/auctions/edit/${auctionId}` }
    ];

    return (
        <div className="min-h-screen bg-bidcraft-grey-2">
            <MainNavbar />

            <main className="container mx-auto min-w-full px-2 py-2">
                <PageHeader title="Editar Subasta" breadcrumbs={breadcrumbs} />

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
                    <div className="lg:col-span-1">
                        <form className="bg-bidcraft-modal-bg p-6 rounded-xl text-white space-y-2" onSubmit={editAuction}>
                            <h2 className="text-xl font-semibold mb-4">Editar Item</h2>

                            <div>
                                <label htmlFor="title" className="block text-sm font-medium mb-2">
                                    Titulo
                                </label>
                                <input
                                    value={values.name}
                                    onChange={handleChange}
                                    name="name"
                                    type="text"
                                    id="title"
                                    className="w-full p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                                />
                            </div>

                            <div className="bg-bidcraft-grey-2 h-40 text-white flex items-center justify-center rounded-lg border-2 border-dashed border-gray-400 hidden">
                                {/* <input type="file" accept="image/*" onChange={handleFileChange} /> */}
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium mb-2">
                                    Descripción de la Subasta
                                </label>
                                <textarea
                                    value={values.description}
                                    onChange={handleChange}
                                    name="description"
                                    id="description"
                                    className="w-full h-48 p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                                />
                            </div>
                            <div>
                                <label htmlFor="buyItNowPrice" className="block text-sm font-medium mb-2">
                                    Precio compra ahora
                                </label>
                                <input
                                    value={values.buy_it_now_price}
                                    onChange={handleChange}
                                    name="buy_it_now_price"
                                    type="text"
                                    id="buyItNowPrice"
                                    className="w-full p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="startingPrice" className="block text-sm font-medium mb-2">
                                    Precio inicial
                                </label>
                                <input
                                    value={values.starting_price}
                                    onChange={handleChange}
                                    name="starting_price"
                                    type="text"
                                    id="startingPrice"
                                    className="w-full p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                <div className="hidden">
                                    <label htmlFor="startDate" className="block text-sm font-medium mb-2">
                                        Fecha Inicial
                                    </label>
                                    <input
                                        value={values.start_time}
                                        onChange={handleChange}
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
                                    <input
                                        value={values.end_time}
                                        onChange={handleChange}
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
                                <select
                                    value={values.category}
                                    onChange={handleChange}
                                    name="category"
                                    id="category"
                                    className="w-full p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                                >
                                    <option value="" className="text-white">Seleccionar categoria</option>
                                    {categories.map((category) => (
                                        <option key={category.category_id} value={category.category_id}>
                                            {category.category_name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* <TagInput /> */}
                            <div className="hidden">
                                <label htmlFor="tagName" className="block text-sm font-medium mb-2">
                                    Agregar Tag
                                </label>
                                <input
                                    value={values.tag_name}
                                    onChange={handleChange}
                                    name="tag_name"
                                    type="text"
                                    id="tagName"
                                    className="w-full p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                            >
                                Guardar Cambios
                            </button>
                        </form>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="bg-bidcraft-modal-bg text-white h-full rounded-xl overflow-hidden">
                            <h3 className="p-6 text-xl font-semibold">Vista Previa</h3>
                            <div>
                                <AuctionInfo
                                    name={values.name}
                                    description={values.description}
                                    imgUrl={values.imgUrl}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default EditAuction;
