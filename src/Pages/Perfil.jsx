import React, { useState, useEffect } from 'react';


import mainLogo from'../img/beta.png';
import ComponentsInput from '../Components/input'
import {toast } from 'react-toastify';




function Perfil() {  


    const [open, setOpen] = useState("home");

    const handleTabOpen = (tabCategory) => {
      setOpen(tabCategory);
    };
    
    
    return(

<section className="w-full overflow-hidden dark:bg-white">
    <div className="w-full mx-auto">
      
        <img src="https://images.unsplash.com/photo-1560697529-7236591c0066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y292ZXJ8ZW58MHwwfHx8MTcxMDQ4MTEwNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="User Cover"
                className="w-full xl:h-[20rem] lg:h-[22rem] md:h-[16rem] sm:h-[13rem] xs:h-[9.5rem]" />

      
        <div className="w-full mx-auto flex justify-center">
            <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8cGVvcGxlfGVufDB8MHx8fDE3MTA0ODExOTN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="User Profile"
                    className="rounded-full object-cover xl:w-[16rem] xl:h-[16rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] xs:w-[8rem] xs:h-[8rem] outline outline-2 outline-offset-2 outline-yellow-500 shadow-xl relative xl:bottom-[7rem] lg:bottom-[8rem] md:bottom-[6rem] sm:bottom-[5rem] xs:bottom-[4.3rem]" />
        </div>

        <div
            className="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] xs:-top-[2.2rem]">

 <section className='w-full' id='historialSubastas'>
 <div className="mt-10  bg-white  shadow-md overflow-hidden w-full">
    <div className="md:flex">
        <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-full" src="https://loremflickr.com/g/320/240/team" />
        </div>
        <div className="p-8 xs:p-4 lg:p-8 w-full">
            <div className="h-5/6 "><h1>Nike - Sneakers - Size: Shoes / EU 46</h1><p>Precio de venta  :L. 12,000</p></div>
            <div className="text-right ">Satisfaccion *****</div>
          
        </div>
    </div>
</div>
<div className="mt-10  bg-white  shadow-md overflow-hidden w-full">
    <div className="md:flex">
        <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-full" src="https://loremflickr.com/g/320/240/team" />
        </div>
        <div className="p-8 xs:p-4 lg:p-8 w-full">
            <div className="h-5/6 "><h1>Nike - Sneakers - Size: Shoes / EU 46</h1><p>Precio de venta  :L. 12,000</p></div>
            <div className="text-right ">Satisfaccion *****</div>
          
        </div>
    </div>
</div>


 </section>

 <section id='reseñas' className='w-full'>
 <div className="mt-10 flex flex-col sm:flex-row shadow-md overflow-hidden py-1 px-1 w-full text-center sm:text-left">
    <div className="flex-shrink-0  m-4 w-16 h-16 rounded-full bg-gray-400 self-center"></div>
    <div className="flex flex-col py-2 pr-2">
      <h4 className="text-lg font-light">Hello World</h4>
      <p className="text-sm font-hairline">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed porro, mollitia soluta, dignissimos labore ab magni temporibus sequi maiores.</p>
    </div>
  </div>
  <div className="mt-10 flex flex-col sm:flex-row shadow-md overflow-hidden py-1 px-1 w-full text-center sm:text-left">
    <div className="flex-shrink-0  m-4 w-16 h-16 rounded-full bg-gray-400 self-center"></div>
    <div className="flex flex-col py-2 pr-2">
      <h4 className="text-lg font-light">Hello World</h4>
      <p className="text-sm font-hairline">Lorem, ipsumzxccccccccccccccccccccccccccccccccccccccccccccccccadsssssssssssssssssssssssssssssssssssssssss dolor sit amet consectetur adipisicing elit. Sed porro, mollitia soluta, dignissimos labore ab magni temporibus sequi maiores.</p>
    </div>
  </div>
 </section>

 <section className='w-full'>
 <div class="flex justify-center items-center min-h-screen">
    <div class="h-80 px-7 w-[700px] rounded-[12px] bg-white p-4 shadow-md border">
        <p class="text-xl font-semibold text-blue-900 cursor-pointer transition-all hover:text-black">
            Add Comment
        </p> 
        <textarea class="h-40 px-3 text-sm py-1 mt-5 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm" placeholder="Add your comments here"></textarea>  
        
        <div class="flex justify-between mt-2"> 
            <p class="text-sm text-blue-900 ">Enter atleast 15 characters</p>
            <button class="h-12 w-[150px] bg-blue-400 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-600">
                Submit comment
            </button>
        </div>   
    </div>   
</div>



 </section>
 
         
          
            
        </div>
    </div>
</section>


    )
    
    
    }

    const TabContent = ({ open, tabCategory, details }) => {
    if (open==="home") {
            return (

                <div className={`  ${
                    open === tabCategory ? "block" : "hidden"
                  } `}>







                  </div>

            )
        }

        if (open==="about") {
            return (
                <div className={` w-full p-6  text-body-color dark:text-dark-6 ${
                    open === tabCategory ? "block" : "hidden"
                  } `}>
<div>about</div>


                  </div>

            )
        }
        if (open==="team") {
            return ("team")
        }



        
      };
    export default Perfil;