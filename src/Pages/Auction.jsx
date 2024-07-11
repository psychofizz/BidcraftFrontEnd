

import React, { useEffect } from "react";
import {
    Input,
    initTWE,
} from "tw-elements";

initTWE({ Input });
function Auction(params) {
    useEffect(() => {
        initTWE({ Input });
    })


    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">

            <div className="w-full  flex-col px-[30px]">
                <div className=" text-[40px] w-[80%]"><h1>Nike Air Force 1 Low Catechu Women Sneakers 41</h1></div>

                <section className="text-gray-600 body-font    ">
                    <div className="container  flex flex-wrap  ">

                        <div className="flex flex-wrap  w-full   ">
                            <div className="flex flex-wrap w-[90%]">
                                <div className=" p-1 w-1/2">
                                    <img alt="gallery" className="w-full object-cover  object-center block" src="https://dummyimage.com/500x300" />
                                </div>
                                <div className=" p-1 w-[50%]">
                                    <img alt="gallery" className="w-full object-cover  object-center block" src="https://dummyimage.com/501x301" />
                                </div>
                                <div className=" p-1 w-full">
                                    <img alt="gallery" className="w-full  object-cover object-center block" src="https://dummyimage.com/600x360" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <div ><h1 className="text-[40px]">Descripcion</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus accusantium fuga excepturi facere, distinctio sunt, hic impedit quaerat architecto dolore, commodi quisquam error deserunt ipsa neque omnis officiis suscipit tenetur?</p></div>
            </div>
            <div className="grid grid-cols-1 justify-items-center w-full ">

                <div className="w-[90%]   sm:w-[50%]  my-8 flex flex-col shadow-2xl ">
                    <div className="p-[5%] bg-bidcraft-dark text-white h-[25%]">
                        <div>Precio actual</div>
                        <div className="flex justify-end  text-[15px] md:text-[40px]">L.300,000</div>
                    </div>
                    <div className="p-[5%] bg-white h-[75%] ">
                        <div>
                            <div><center>Ofertas</center></div>
                            <div className="grid grid-cols-3 gap-x-2 my-[10px] ">
                                <div className="w-full border border-black flex justify-center "><p className="p-2">L.9,200</p></div>
                                <div className="w-full border border-black flex justify-center"><p className="p-2">L.9,200</p></div>
                                <div className="w-full border border-black flex justify-center"><p className="p-2">L.9,200</p></div>


                            </div>
                            <div className="relative mb-3 p-2" data-twe-input-wrapper-init>

                                <input
                                    type="number"
                                    className=" peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3  leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInputNumber"
                                    placeholder="Example label" />
                                <label
                                    for="exampleFormControlInputNumber"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                                >Number input
                                </label>
                            </div>
                            <section className="flex flex-col">
                                <button className="p-[5%] bg-slate-300 my-2">Colocar oferta</button>
                                <button className="p-[5%] bg-slate-300 my-2">Comprar ahora</button>

                            </section>


                        </div>
                    </div>

                </div>
                { //               ------------------------Profile-----------------------------------
                }
                <div className="w-[90%] sm:w-[50%] my-8 shadow-2xl">



                    <div class=" max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden ">
                        <div class="border-b px-4 pb-6">
                            <div class="text-center my-4">
                                <img class="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4 "
                                    src="https://randomuser.me/api/portraits/women/21.jpg" alt="" />
                                <div class="py-2">
                                    <h3 class="font-bold text-2xl text-gray-800 dark:text-white mb-1">Cait Genevieve</h3>
                                    <div class="inline-flex text-gray-700 dark:text-gray-300 items-center">
                                        <svg class="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1" fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                            <path class=""
                                                d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                                        </svg>
                                        New York, NY
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-2 px-2">
                                <button
                                    class="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
                                    Follow
                                </button>
                                <button
                                    class="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2">
                                    Message
                                </button>
                            </div>
                        </div>
                       



                    </div>

                </div>

            </div>


        </div>



    )
}

export default Auction