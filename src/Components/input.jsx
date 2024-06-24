import React, { useState, useEffect } from 'react';
//import styled from "styled-components";
//import { Await, Link, Navigate, useNavigate } from 'react-router-dom';



function Input({ inputType, text, handleChange, values,name}) {
    return (
      
      <div className="relative h-11 w-full min-w-[200px]">
      <input  className='border border-gray  p-4 w-full focus:border-2 focus:border-ffc327  focus:outline-0  ' name={name} type={inputType} placeholder={text} onChange={(e) => handleChange(e)}
                value={values[name] || ''} required  />
      </div>
    );
}

export default Input