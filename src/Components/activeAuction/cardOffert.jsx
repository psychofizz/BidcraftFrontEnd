import React from "react";

function CardOfert({lastOffert}) {
    return (

        <div className="w-[90%]   sm:w-[50%]  my-8 flex flex-col shadow-2xl ">
        <div className="p-[5%] bg-bidcraft-dark text-white h-[25%]">
            <div>Precio actual</div>
            <div className="flex justify-end  text-[15px] md:text-[40px]">L.{lastOffert}</div>
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
                        htmlFor="exampleFormControlInputNumber"
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

    )
}

export default CardOfert