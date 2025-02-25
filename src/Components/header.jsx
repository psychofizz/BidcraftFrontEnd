import React, { useState } from 'react';

import CampanaImg from '../img/campana.png'
import EstrellaImg from '../img/estrella.png'
import BigLogo from '../img/bidLogo.png'
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate();

  //Aca controlamos todo el localstorage----------------------
  //const storedData = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY); // "miClaveDeUsuario"
 // const usuario = JSON.parse(storedData)
   //Funcion para destruir localstorage-----------------------
   const storageDestroy = () => {
    localStorage.clear()
    navigate("/login")
    
    
};

  //----------------------------------------------------------
  //Aca controlamos todo los slide nav y el perfil------------
  const [isVisible, setIsVisible] = useState(false);
    const [isVisibleDiv2, setIsVisibleDiv2] = useState(false);
    const toggleDiv2 = () => {
        setIsVisibleDiv2(!isVisibleDiv2);
        
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);

    };

  //----------------------------------------------------------
  return(<div>
    <div className='w-full flex justify-normal bg-ffc327 h-[10vh] p-2 fixed  z-30'>
                    <div className=' w-[70%] content-center'>
                        <div className='flex flex-nowrap w-full'>
                           
    <img className='w-[50px]' src={BigLogo} alt="" />
    <div className=' content-center text-[30px] text-white'>BidCraft</div>
    <form className='w-[500px] ml-4'>   
        <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
    </form></div>
    
    
    
                    </div>
                    <div className=' content-center w-[30%]  '>
    
                        <div className="flex justify-end">
    
    
                            {/*--------------------------------------Notificaciones---------------------------------------------------------------------------------------------------------------------  */}
                            <div className='hidden lg:flex'>
                                <button className="  border-none underline underline-offset-1 text-cyan-400 " onClick={toggleVisibility}  ><img className='w-[35px]' src={CampanaImg} alt="" /></button>
                                <span className="relative flex h-3 w-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>
                                <button className=" md:order-1  border px-2 py-1 border-none underline underline-offset-1 text-cyan-400 "  ><img className='w-[45px]' src={EstrellaImg} alt="" /></button>
                                <button className=" md:order-1  border px-2 py-1 border-none underline underline-offset-1 text-white " onClick={toggleVisibility}  >Hola </button>
                            </div>
    
                            <div className='lg:hidden'>
                                <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false" onClick={toggleDiv2}>
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                    </svg>
                                </button>
                            </div>
    
    
    
    
                        </div>
    
                    </div>
    
                </div>
                {isVisible && (
                    <div className='w-full flex justify-end fixed z-20 mt-[80px]  ' id='barradesplegable'>
                        <div tabIndex="0" className=" dropdown-content z-[1]  menu p-2 shadow bg-base-300 rounded-box w-80">
                            <div className="rounded-lg bg-base-300 p-3 drop-shadow-xl divide-y divide-neutral mt-[3%]">
                                <div className="flex space-x-4 items-center p-4 bg-ffc327">
                                    <div className="flex mr-auto items-center space-x-4">
                                        <img src="https://avatars.githubusercontent.com/u/26052038?v=4" alt="Name" className="w-16 h-16 shrink-0 rounded-full" />
                                        <div className="space-y-2 flex flex-col flex-1 truncate text-white">
                                            <div className="relative leading-tight ">
                                                <span className="flex">
                                                    <span className="truncate relative pr-8 "></span>
                                                </span>
                                            </div>
                                            <p className="text-xs">5 seguidores</p>
                                            <p className="text-xs">10 puntos de Bidcraft</p>
                                        </div>
                                    </div>
                                </div>
                                <div aria-label="navigation " className="py-2 bg-white">
                                    <nav className="grid gap-1">
                                        <a href="/perfil" className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md">
                                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M3 5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V9C11 10.1046 10.1046 11 9 11H5C3.89543 11 3 10.1046 3 9V5ZM9 5H5V9H9V5Z" /><path d="M3 15C3 13.8954 3.89543 13 5 13H9C10.1046 13 11 13.8954 11 15V19C11 20.1046 10.1046 21 9 21H5C3.89543 21 3 20.1046 3 19V15ZM9 15H5V19H9V15Z" /><path d="M13 5C13 3.89543 13.8954 3 15 3H19C20.1046 3 21 3.89543 21 5V9C21 10.1046 20.1046 11 19 11H15C13.8954 11 13 10.1046 13 9V5ZM19 5H15V9H19V5Z" /><path d="M13 15C13 13.8954 13.8954 13 15 13H19C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V15ZM19 15H15V19H19V15Z" />
                                            </svg>
                                            <span>Perfil</span>
                                        </a>
                                        <a href="/" className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md">
                                            <svg className="w-7 h-7" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                                                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                            </svg>
                                            <span>Configuracion</span>
                                        </a>
                                        <a href="/" className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md">
                                            <svg className="w-7 h-7" viewBox="0 0 35 35" fill="currentColor">
                                                <path d="M13.2,18.456H8.475a1.25,1.25,0,1,1,0-2.5H13.2a1.25,1.25,0,0,1,0,2.5Z" />
                                                <path d="M10.839,20.82a1.25,1.25,0,0,1-1.25-1.25V14.841a1.25,1.25,0,0,1,2.5,0V19.57A1.25,1.25,0,0,1,10.839,20.82Z" />
                                                <path d="M20.954,18.515a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z" />
                                                <path d="M23.8,15.67a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z" />
                                                <path d="M23.68,21.241a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z" />
                                                <path d="M26.525,18.4a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z" />
                                                <path d="M28.886,34.75a4.9,4.9,0,0,1-4.752-3.663l-1.4-4.1a20.448,20.448,0,0,1-10.436-.068l-1.456,4.257a4.725,4.725,0,0,1-1.717,2.549,4.905,4.905,0,0,1-7.9-3.836V19.2c0-.31.038-.868.054-1.08l-.052-.945A10.494,10.494,0,0,1,11.693,6.641a10.351,10.351,0,0,1,3.728.686,3.821,3.821,0,0,0,1.373.235h1.412a3.751,3.751,0,0,0,1.353-.227A10.32,10.32,0,0,1,23.5,6.643,10.674,10.674,0,0,1,33.781,17.42V29.892A4.881,4.881,0,0,1,28.886,34.75ZM23.5,24.141a1.253,1.253,0,0,1,1.183.846l1.841,5.384a2.438,2.438,0,0,0,2.359,1.879,2.379,2.379,0,0,0,2.395-2.358V17.42a8.163,8.163,0,0,0-7.822-8.277,7.78,7.78,0,0,0-3,.524h0a6.249,6.249,0,0,1-2.255.395H16.794a6.311,6.311,0,0,1-2.269-.4,7.858,7.858,0,0,0-2.832-.52,7.978,7.978,0,0,0-7.974,7.965l.054.955a1.9,1.9,0,0,1,0,.2c-.011.141-.05.66-.05.938V29.892a2.406,2.406,0,0,0,3.871,1.86,2.35,2.35,0,0,0,.855-1.29l1.869-5.475a1.251,1.251,0,0,1,1.59-.777c.062.02,6.155,2.075,11.123.025A1.247,1.247,0,0,1,23.5,24.141ZM20.01,8.5h0Z" />
                                                <path d="M18.294,7.261a1.23,1.23,0,0,1-.105-1.184,1.891,1.891,0,0,1,.874-1.04A4.97,4.97,0,0,1,22.7,4.874a8.184,8.184,0,0,0,4.595.142A3.683,3.683,0,0,0,29.854,1.5,1.278,1.278,0,0,0,28.6.25a1.262,1.262,0,0,0-1.25,1.25c.066,1.244-1.558,1.378-2.5,1.266-1.574-.186-3.049-.792-4.663-.617a5.182,5.182,0,0,0-3.917,2.183,3.982,3.982,0,0,0-.137,4.19c.836,1.372,3,.117,2.158-1.261Z" />
                                            </svg>
                                            <span>Subastas activas</span>
                                        </a>
                                    </nav>
                                </div>
                                <div className="pt-2 bg-white">
                                    <button onClick={storageDestroy} type="button" className="flex items-center space-x-3 py-3 px-4 w-full leading-6 text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md">
                                        <svg className="w-7 h-7" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                                            <path d="M9 12h12l-3 -3"></path>
                                            <path d="M18 15l3 -3"></path>
                                        </svg>
                                        <span>Cerrar Sesion</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
    
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
    
    </div> )
  
}

export default Header;

