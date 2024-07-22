import React, { useState } from "react";
import mainLogo from "../img/bidLogo.png";
import ComponentsInput from "../Components/input";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {


    if (values.password.length < 7) {
      toast.error("Minimo 7 caracteres para la contraseña");
      return false;
    }

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
        const response = await axios.post("http://localhost:8000/api/auth/login/", users, {
          headers: {
            "Content-Type": "application/json",
          }
        });
      
        const resultado = response.data;
      
        localStorage.setItem("token", JSON.stringify(resultado.access_token));
        localStorage.setItem("refresh_token", JSON.stringify(resultado.refresh_token));
        toast.done("Login exitoso");
        navigate("/home");
      } catch (error) {
        if (error.response) {
          const resultado = error.response.data;
          toast.warning(resultado.detail);
        } else {
          // Manejo de errores de red u otros errores
          toast.warning("Error en la solicitud");
        }
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-[#EEEDEB]">
      <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-2xl bg-slate-50">
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
              <div className="w-40 h-[50] flex items-center justify-center underline">
                <a
                  className=""
                  type="button"
                  data-ripple-light="true"
                  href="/register"
                >
                  Crear Cuenta
                </a>
              </div>
              <div>
                <button
                  className="
                bg-bidcraft-dark w-40 h-[50] text-white"
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
      <div className="flex justify-around">
        <div className="text-sm text-gray-700 py-5 px-10">
          <p>Español(Honduras) </p>
        </div>
        <div className="text-sm text-gray-700 py-5 px-10 flex flex-col md:flex-row">
          <p className="pl-2">Ayuda </p>
          <p className="pl-2">Privacidad </p>
          <p className="pl-2">Terminos </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
