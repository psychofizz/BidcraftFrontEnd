import React, { useState, useEffect } from 'react';
import ComponentstCard from '../Components/cardProducts'
import Footer from "../Components/footer";
import { toast } from 'react-toastify'
import Header from '../Components/header';

function HomePage() {
  const [productos, setProductos] = useState([]);

  const obtenerProducto = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/products/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },

        }
      );

      if (!response.ok) {
        switch (response.status) {
          case 400:
            toast.warning("Producto no existe")

            break;
          default:
            toast("Error desconocido")
            break;
        }
      } else {
        const data = await response.json(); // Convertir la respuesta JSON en un objeto JavaScript
        setProductos(data); // Guardar los productos en el estado

        // console.log("Nombre del producto:", nombre);
        // console.log("Precio del producto:", precio);
      }
    } catch (error) {
    }


  }

  useEffect(() => {
    obtenerProducto();
  }, []);



  const [values, setValues] = useState({
    names: "",
    last_names: "",
    id_number: "",
    date_of_birth: "",
    email: "",
    password: "",
    passwordconfirm: "",
  });
  //Esta funcion no pormite capturar los valores de los inputo con la clave name cada vez que se modifiquen agregandolos a la variable values
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  /* Nos ayuda a mostrar el perfil */
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleDiv2, setIsVisibleDiv2] = useState(false);
  const toggleDiv2 = () => {
    setIsVisibleDiv2(!isVisibleDiv2);
    // Opción: esconder el otro div
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);

  };

  return (


    <div className=''>
      <Header />
      <div className='w-full mt-[80px] text-black absolute '>

        {productos.length > 0 ? (
          <ul>
            {productos.map(producto => (
              <ComponentstCard nombreProducto={producto.name} descripcion={producto.description} precio={producto.buy_it_now_price} />

            ))}
          </ul>
        ) : (
          <p>No hay productos disponibles.</p>
        )}

        <ComponentstCard nombreProducto={"Nike"} descripcion={"- Sneakers - Size: Shoes / EU 46"} precio={"Precio de venta: L. 12,000"} />
        <ComponentstCard nombreProducto={"Nike"} descripcion={"- Sneakers - Size: Shoes / EU 46"} precio={"Precio de venta: L. 12,000"} />


        <ComponentstCard nombreProducto={"Nike"} descripcion={"- Sneakers - Size: Shoes / EU 46"} precio={"Precio de venta: L. 12,000"} />
        <Footer />
      </div>

      <div className={` fixed w-[50%] z-40 bg-gray-800 text-white h-full overflow-y-auto transition-transform transform ease-in-out duration-300 ${!isVisibleDiv2 ? '-translate-x-full' : ' translate-x-0'
        }`}
        id="sidebar">

        <div className="p-4">
          <h1 className="text-2xl font-semibold">Sidebar</h1>
          <ul className="mt-4">
            <li className="mb-2"><a href="#" className="block hover:text-indigo-400">Home</a></li>
            <li className="mb-2"><a href="#" className="block hover:text-indigo-400">About</a></li>
            <li className="mb-2"><a href="#" className="block hover:text-indigo-400">Services</a></li>
            <li className="mb-2"><a href="#" className="block hover:text-indigo-400">Contact</a></li>
          </ul>
        </div>

      </div>

    </div>

  )
}

export default HomePage
