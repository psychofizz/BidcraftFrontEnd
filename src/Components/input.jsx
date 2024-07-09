import React from "react";
//import styled from "styled-components";
//import { Await, Link, Navigate, useNavigate } from 'react-router-dom';

function Input({ inputType, text, handleChange, values, name, className }) {
  return (
    <input
      className={`border border-gray ${className}    focus:border-2 focus:border-ffc327  focus:outline-0  `}
      name={name}
      type={inputType}
      placeholder={text}
      onChange={(e) => handleChange(e)}
      value={values[name] || ""}
      required
    />
  );
}

export default Input;
