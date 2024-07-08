<<<<<<< HEAD
import React, { useState } from 'react';
import mainLogo from '../img/bidLogo.png'
import ComponentsInput from '../Components/input'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



=======
import React, { useState } from "react";
import mainLogo from "../img/bidLogo.png";
import ComponentsInput from "../Components/input";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
>>>>>>> develop

function Login() {
  // const users3 = {
  //   full_name: "josue2"

  // }

  // localStorage.setItem(
  //   process.env.REACT_APP_LOCALHOST_KEY,
  //   JSON.stringify(users3)
  // );
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    console.log(values);

    if (values.password.length < 7) {
      toast.error("Minimo 7 caracteres para la contraseña");
      return false;
    }

    // Add more validations as necessary
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (handleValidation()) {
      const users = {
        email: values.email,
        password: values.password,
      };
      try {
        const response = await fetch("http://localhost:8000/api/auth/login/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(users),
        });

        if (!response.ok) {
          switch (response.status) {
            case 400:
             
              toast.warning("Datos invalidos o datos no existentes");
              break;
            default:
              toast("Error desconocido");
              break;
          }
        } else {
          const usuario = await response.json();
          delete usuario.password;
          localStorage.setItem(
            process.env.REACT_APP_LOCALHOST_KEY,
            JSON.stringify(usuario)
          );
          navigate("/homepage");
        }
      } catch (error) {}
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-2xl ">
        <div className="grid place-content-center h-44 bg-ffc327">
          <div className="flex justify-center">
            <img src={mainLogo} className="w-[90px]" alt="Ejemplo de imagen" />
          </div>
          <div>
            <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-white">
              BidCraft
            </h4>
          </div>
        </div>

        <div className="p-10">
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 "
            onSubmit={(event) => handleSubmit(event)}
          >
            <div className="mb-4 flex flex-col gap-6">
              <ComponentsInput
                inputType="email"
                text="Correo"
                handleChange={handleChange}
                values={values}
                name="email"
                className={"p-4 "}
              />
              <ComponentsInput
                inputType="Password"
                text="Contraseña"
                handleChange={handleChange}
                values={values}
                name="password"
                className={"p-4"}
              />
            </div>
            <div className="inline-flex items-center ">
              <label
                className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                htmlFor="checkbox"
                data-ripple-dark="true"
              ></label>
            </div>
            <div className="w-full flex justify-between">
              <div>
                <button
                  style={{
                    backgroundColor: "none",
                    paddingLeft: "60px",
                    paddingRight: "60px",
                  }}
                  className="underline underline-offset-1 mt-6   select-none   py-5 px-11 text-center align-middle font-sans text-xs font-bold uppercase text-black  shadow-pink-500/20 transition-all   focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  Crear Cuenta
                </button>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: "#FFC327",
                    paddingLeft: "60px",
                    paddingRight: "60px",
                  }}
                  className="mt-6   select-none   py-5  text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="submit"
                  data-ripple-light="true"
                >
                  Aceptar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-around ">
        <div className="text-sm text-gray-700 py-5 px-10">
          <p>Español(Honduras) </p>
        </div>
        <div className="text-sm text-gray-700 py-5 px-10">
          <p>
<<<<<<< HEAD
            <p >Ayuda    </p>
            <p >Privacidad    </p>
            <p >Terminos    </p>
=======
            <a href="">Ayuda </a>
            <a href="">Privacidad </a>
            <a href="">Terminos </a>
>>>>>>> develop
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
