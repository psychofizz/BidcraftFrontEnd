import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Await, Link, Navigate, useNavigate } from 'react-router-dom';
import mainLogo from'../img/beta.png';
import Components_input from '../Components/input'
import { ToastContainer, toast } from 'react-toastify';

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

const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
};

const handleValidation = () => {
    const {names,last_names,id_number,date_of_birth,email,password,passwordconfirm } = values;
    console.log(values);

    if (password.length < 7) {
        toast.error("Minimo 7 caracteres para la contraseña");
        return false;
    }

    // Add more validations as necessary
    return true;
};

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
          "http://localhost:5000/login",
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
      const usuario2= await response.json();
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
        <nav className="relative flex w-full flex-wrap items-center justify-between py-2 lg:py-2" style={{ backgroundColor: '#FFC327'}}>
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <div className="ms-2">
            <img src={mainLogo} alt="Ejemplo de imagen" />
            </div>
          </div>
        </nav>
      
      <div className="flex flex-col min-h-screen items-center justify-center">
      
      <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-2xl ">
          
       <div className="p-10">
       <p  className="normal-case text-center mx-auto font-bold" >Crea una cuenta Bidcraft</p>
       <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-9`6`" onSubmit={(event) => handleSubmit(event)}>
              <div className="mb-2 flex flex-col gap-6">
                <Components_input handleChange={handleChange} values={values} inputType={"Text"} text={"Nombre"} name="names"/>
                <Components_input handleChange={handleChange} values={values} inputType={"Text"} text={"Apellidos "} name="last_names"/>
                <Components_input handleChange={handleChange} values={values} inputType={"number"} text={"No.Identidad "} name="id_number"/>
                <Components_input handleChange={handleChange} values={values} inputType={"email"} text={"Correo"} name="email"/>
                <Components_input handleChange={handleChange} values={values} inputType={"date"} text={"Fecha de nacimiento"} name="date_of_birth"/>
                <Components_input handleChange={handleChange} values={values} inputType={"password"} text={"Contraseña"} name="password"/>
                <Components_input handleChange={handleChange} values={values} inputType={"password"} text={"Repetir Contraseña"} name="passwordconfirm"/>
              
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
                            <input type="radio" name="verificar" className="form-radio h-5 w-5 checked:bg-ffc327;"  />
                            <span className="text-gray-400">Llamada</span>
                        </label>
                    </div>
                </div>




            <div className='w-full flex justify-between'>  
            <div></div>
         <div >
              <button style={{ backgroundColor: '#FFC327',paddingLeft:'60px',paddingRight:'60px' }}
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