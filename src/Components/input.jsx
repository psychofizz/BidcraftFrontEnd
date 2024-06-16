import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Await, Link, Navigate, useNavigate } from 'react-router-dom';



function Input({ inputType,text}) {

  //Aca mas que todo establecemos los valores ,handleChange nos ayuda a camputrar los valires 
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
   
  });
//Aca nos ayuda a camputurar los valores cuando algun input se cambien
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });

  };
// Aca mas que todo validamos los datos 
  const handleValidation = () => {
    const { name, email, password } = values;
  console.log()
  }

    return (
      <div className="relative h-11 w-full min-w-[200px]">
      <input className='border border-gray  p-4 w-full focus:border-2 focus:border-ffc327  focus:outline-0  ' type={inputType} placeholder={text} required  />
      </div>
    );
}

export default Input