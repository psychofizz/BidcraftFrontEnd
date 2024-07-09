import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
    Tab,
    initTWE,
  } from "tw-elements";
  
  initTWE({ Tab });
function Profile() {
    

    return (
<div>
<div id='imgProfile' >

<section class="w-full overflow-hidden dark:bg-gray-900">
    <div class="w-full mx-auto">
       
        <img src="https://images.unsplash.com/photo-1560697529-7236591c0066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y292ZXJ8ZW58MHwwfHx8MTcxMDQ4MTEwNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="User Cover"
                class="w-full xl:h-[20rem] lg:h-[22rem] md:h-[16rem] sm:h-[13rem] xs:h-[9.5rem]" />

      
        <div class="w-full mx-auto flex justify-center">
            <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8cGVvcGxlfGVufDB8MHx8fDE3MTA0ODExOTN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="User Profile"
                    class="rounded-full object-cover xl:w-[16rem] xl:h-[16rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] xs:w-[8rem] xs:h-[8rem] outline outline-2 outline-offset-2 outline-yellow-500 shadow-xl relative xl:bottom-[7rem] lg:bottom-[8rem] md:bottom-[6rem] sm:bottom-[5rem] xs:bottom-[4.3rem]" />
        </div>

        <div
            class="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] xs:-top-[2.2rem]">
       
            <h1 class="text-center text-gray-800 dark:text-white text-4xl font-serif">Samuel Abera</h1>
           
        </div>
    </div>
</section>
</div>
 <div id='tabs' className='mx-[30px] xl:mx-[200px] lg:mx-[200px] md:mx-[100px] sm:mx-[59px]   '>
 

<ul
  class="mb-5 flex list-none flex-row flex-wrap border-b-0 ps-0"
  role="tablist"
  data-twe-nav-ref>
  <li role="presentation" class="flex-grow basis-0 text-center">
    <a
      href="#tabs-home02"
      class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
      data-twe-toggle="pill"
      data-twe-target="#tabs-home02"
      data-twe-nav-active
      role="tab"
      aria-controls="tabs-home02"
      aria-selected="true"
      >Home</a>
  </li>
  <li role="presentation" class="flex-grow basis-0 text-center">
    <a
      href="#tabs-profile02"
      class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
      data-twe-toggle="pill"
      data-twe-target="#tabs-profile02"
      role="tab"
      aria-controls="tabs-profile02"
      aria-selected="false"
      >Profile</a>
  </li>
  <li role="presentation" class="flex-grow basis-0 text-center">
    <a
      href="#tabs-messages02"
      class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
      data-twe-toggle="pill"
      data-twe-target="#tabs-messages02"
      role="tab"
      aria-controls="tabs-messages02"
      aria-selected="false"
      >Messages</a>
  </li>

</ul>


<div class="mb-6">
  <div
    class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
    id="tabs-home02"
    role="tabpanel"
    aria-labelledby="tabs-home-tab02"
    data-twe-tab-active>
 <section class="text-gray-600 body-font grip ">
  <div class="container flex md:flex-row flex-col items-center">
    <div class="lg:max-w-[300px] lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br class="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-end w-full">
        <button class="inline-flex text-white  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /></button>
      </div>
    </div>
  </div>
  <div class="container flex md:flex-row flex-col items-center mt-8">
    <div class="lg:max-w-[300px] lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br class="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-end w-full">
        <button class="inline-flex text-white  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /></button>
      </div>
    </div>
  </div>
</section>
  </div>
  <div
    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
    id="tabs-profile02"
    role="tabpanel"
    aria-labelledby="tabs-profile-tab02">
    Tab 2 content
  </div>
  <div
    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
    id="tabs-messages02"
    role="tabpanel"
    aria-labelledby="tabs-profile-tab02">
    Tab 3 content
  </div>
  <div
    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
    id="tabs-contact02"
    role="tabpanel"
    aria-labelledby="tabs-contact-tab02">
    Tab 4 content
  </div>
</div>


    
 </div>





</div>



    )
}
export default Profile ;