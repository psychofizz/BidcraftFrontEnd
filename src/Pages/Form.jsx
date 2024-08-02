import React, { useState } from "react";
import mainLogo from "../img/bidLogo.png";
import ComponentsInput from "../Components/input";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios"
function Form() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    names: "",
    last_names: "",
    id_number: "",
    date_of_birth: "",
    email: "",
    password: "",
    passwordconfirm: "",
    userName: "",
  });
  //Esta funcion no pormite capturar los valores de los inputo con la clave name cada vez que se modifiquen agregandolos a la variable values
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  //Aca simplemente hacemos validaciones  sobre los input con lo datos controlados
  const handleValidation = () => {
    const { id_number, password, passwordconfirm } = values;


    if (password.length < 7) {
      toast.error("Minimo 7 caracteres para la contraseña");
      return false;
    }
    //Miramos si la contraseña y la de confirmar contraseña son iguales
    if (password !== passwordconfirm) {
      toast.error("Las contraseñas no coinciden");
      return false;
    }

    //Miramos si el numero de identificacion son validos (Honduras)

    const idNumberPattern = /^\d{13}$/;
    if (!idNumberPattern.test(id_number)) {
      toast.error("ID inválido. Escriba un ID válido, sin guiones.");
      return false;
    }

    // Add more validations as necessary
    return true;
  };

  // Validación del id_number

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (handleValidation()) {
      const usuario = {
        id: values.id_number,
        email: values.email,
        username: values.userName,
        first_name: values.names,
        second_name: values.names,
        last_name: values.last_names,
        last_name2: values.last_names,
        phone_number: 1234567890,
        password: values.password,
        password_confirm: values.password,
        address_id: 1
      };
      try {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/api/auth/register/`,
          usuario,
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        toast.success("Registro exitoso"); // Change success message as needed
        navigate("/Autc");
      } catch (error) {
        console.error("Registration error:", error);
  
        // Error mapping
        const errorMapping = {
          "user with this id already exists.": "El usuario con este ID ya existe.",
          "user with this email already exists.": "El usuario con este correo electrónico ya existe.",
          "user with this username already exists.": "El usuario con este nombre de usuario ya existe."
        };
  
        // Extract errors from response and show them in Spanish
        const errors = error.response?.data || {};
        for (const [ messages] of Object.entries(errors)) {
          messages.forEach(message => {
            const translatedMessage = errorMapping[message] || message;
            toast.error(translatedMessage);
          });
        }
      }
    }
  };
  return (
    //NAVBAR DE REGISTRO
    <div className="min-h-screen flex flex-col">
      <nav className="relative flex w-full  py-2 lg:py-2 bg-ffc327">
        <div className=" w-full  px-3">
          <div className="ms-2 flex flex-nowrap">
            <div>
              <img
                src={mainLogo}
                className="w-[75px] "
                alt="Ejemplo de imagen"
              />
            </div>
            <div className="content-center ml-[15px]">
              <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-white">
                BidCraft
              </h4>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-col min-h-screen items-center justify-center">
        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-2xl mt-10 ">
          <div className="p-10">
            <p className="normal-case text-center mx-auto font-bold">
              Crea una cuenta Bidcraft
            </p>
            <form
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-9`6`"
              onSubmit={(event) => handleSubmit(event)}
            >
              <div className="mb-2 flex flex-col gap-6">
                <ComponentsInput
                  handleChange={handleChange}
                  values={values}
                  inputType={"Text"}
                  text={"Nombre"}
                  name="names"
                  className={"p-4"}
                />
                <ComponentsInput
                  handleChange={handleChange}
                  values={values}
                  inputType={"Text"}
                  text={"Apellidos "}
                  name="last_names"
                  className={"p-4"}
                />
                <ComponentsInput
                  handleChange={handleChange}
                  values={values}
                  inputType={"text"}
                  text={"No.Identidad "}
                  name="id_number"
                  className={"p-4"}
                />
                <ComponentsInput
                  handleChange={handleChange}
                  values={values}
                  inputType={"email"}
                  text={"Correo"}
                  name="email"
                  className={"p-4"}
                />
                <ComponentsInput
                  handleChange={handleChange}
                  values={values}
                  inputType={"Text"}
                  text={"Nombre de usuario"}
                  name="userName"
                  className={"p-4"}
                />
                <ComponentsInput
                  handleChange={handleChange}
                  values={values}
                  inputType={"date"}
                  text={"Fecha de nacimiento"}
                  name="date_of_birth"
                  className={"p-4"}
                />
                <ComponentsInput
                  handleChange={handleChange}
                  values={values}
                  inputType={"password"}
                  text={"Contraseña"}
                  name="password"
                  className={"p-4"}
                />
                <ComponentsInput
                  handleChange={handleChange}
                  values={values}
                  inputType={"password"}
                  text={"Repetir Contraseña"}
                  name="passwordconfirm"
                  className={"p-4"}
                />
              </div>

              <div className="mt-10 mb-2 flex flex-col gap-6"></div>

              <div className="inline-flex items-center">
                <label
                  className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                  htmlFor="checkbox"
                  data-ripple-dark="true"
                ></label>
              </div>





              <div className='w-full flex justify-between'>
                <div></div>
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
                    Siguiente
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
              <h1 >Ayuda    </h1>
              <h1 >Privacidad    </h1>
              <h1 >Terminos    </h1>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
