import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Await, Link, Navigate, useNavigate } from 'react-router-dom';


function input({ inputType,text}) {
    return (
      <div className="relative h-11 w-full min-w-[200px]">
      <input className='border border-gray  p-4 w-full focus:border-2 focus:border-ffc327  focus:outline-0  ' type={inputType} placeholder={text} required  />
      </div>
    );
}

export default input