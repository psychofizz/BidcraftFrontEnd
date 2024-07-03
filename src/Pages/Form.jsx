import React, { useState, useEffect } from 'react';
import mainLogo from '../img/bidLogo.png';
import ComponentsInput from '../Components/input'
import { toast } from 'react-toastify';

function Form() {
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
  //Aca simplemente hacemos validaciones  sobre los input con lo datos controlados
  const handleValidation = () => {
    const { names, last_names, id_number, date_of_birth, email, password, passwordconfirm } = values;
    console.log(values);

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
        names: values.names,
        last_names: values.last_names,
        id_number: values.id_number,
        date_of_birth: values.date_of_birth,
        email: values.email,
        password: values.password
      }

      try {
        const response = await fetch(
          "http://localhost:8000/user/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
          }
        );

        if (!response.ok) {
          switch (response.status) {
            case 400:
              const resultado = await response.json();
              toast(resultado);
              break;
            default:
              toast("Error desconocido")
              break;
          }
        } else {
          const usuario2 = await response.json();
          delete usuario2.password;
          localStorage.setItem(
            process.env.REACT_APP_LOCALHOST_KEY,
            JSON.stringify(usuario2)
          );
          console.log("Form submitted successfully", values);
        }
      } catch (error) {
      }

    }
  };



  return (
    //NAVBAR DE REGISTRO
    <div className="min-h-screen flex flex-col" >
      <nav className="relative flex w-full  py-2 lg:py-2 bg-ffc327" >
        <div className=" w-full  px-3">
          <div className="ms-2 flex flex-nowrap">
            <div><img src={mainLogo} className='w-[75px] ' alt="Ejemplo de imagen" /></div>
            <div className='content-center ml-[15px]'>
              <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-white">BidCraft</h4>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-col min-h-screen items-center justify-center">

        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-2xl mt-10 ">

          <div className="p-10">
            <p className="normal-case text-center mx-auto font-bold" >Crea una cuenta Bidcraft</p>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-9`6`" onSubmit={(event) => handleSubmit(event)}>
              <div className="mb-2 flex flex-col gap-6">
                <ComponentsInput handleChange={handleChange} values={values} inputType={"Text"} text={"Nombre"} name="names" className={'p-4'} />
                <ComponentsInput handleChange={handleChange} values={values} inputType={"Text"} text={"Apellidos "} name="last_names" className={'p-4'} />
                <ComponentsInput handleChange={handleChange} values={values} inputType={"number"} text={"No.Identidad "} name="id_number" className={'p-4'} />
                <ComponentsInput handleChange={handleChange} values={values} inputType={"email"} text={"Correo"} name="email" className={'p-4'} />
                <ComponentsInput handleChange={handleChange} values={values} inputType={"date"} text={"Fecha de nacimiento"} name="date_of_birth" className={'p-4'} />
                <ComponentsInput handleChange={handleChange} values={values} inputType={"password"} text={"Contraseña"} name="password" className={'p-4'} />
                <ComponentsInput handleChange={handleChange} values={values} inputType={"password"} text={"Repetir Contraseña"} name="passwordconfirm" className={'p-4'} />

              </div>

              <div className="mt-10 mb-2 flex flex-col gap-6">

              </div>

              <div className="inline-flex items-center">
                <label
                  className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                  htmlFor="checkbox"
                  data-ripple-dark="true"
                >

                </label>
              </div>

              <p className="normal-case mx-auto text-gray-400 md:text-left">Verificar con</p>
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="verificar" className="form-radio h-5 w-5 checked:bg-ffc327" />
                    <span className="text-gray-400">Mensaje de Texto</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="verificar" className="form-radio h-5 w-5 checked:bg-ffc327;" />
                    <span className="text-gray-400">Llamada</span>
                  </label>
                </div>
              </div>




              <div className='w-full flex justify-between'>
                <div></div>
                <div >
                  <button style={{ backgroundColor: '#FFC327', paddingLeft: '60px', paddingRight: '60px' }}
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
            <p>Español(Honduras)                    </p>
          </div>
          <div className="text-sm text-gray-700 py-5 px-10">
            <p>
              <a href="">Ayuda    </a>
              <a href="">Privacidad    </a>
              <a href="">Terminos    </a>
            </p>

          </div>
        </div>



      </div>
    </div>
  )

}
export default Form