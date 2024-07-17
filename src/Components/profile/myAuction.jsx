
import React, { useEffect } from "react"
import axios from "axios";
import {
    Modal,
    Ripple,
    initTWE,
} from "tw-elements";
import { toast } from "react-toastify";


function MyAuctions({ idAuction, name, description, highest_bid,updateAuction }) {

   

    
    //---------------------------------------Funcion para eliminar ------------------------------------------


    useEffect(() => {
        initTWE({ Modal, Ripple });
    }, []);

    const deleteAuction = async () => {
        console.log(idAuction)
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/auction/delete/one/${idAuction}/`);
            toast.success("Subasta eliminada")
            updateAuction();
         
        } catch (error) {
console.log(error)
        }
    };




    //-------------------------------------------------------------------------------------------------------
    return (
        <div className="w-full flex flex-col-2 h-[20%] shadow-2xl pb-3">
            <div className="w-[30%] bg-slate-400">holap</div>
            <div className="w-[70%] flex flex-col-2">
                <div className="w-[70%] p-5 shadow-2xl">
                    <h1>{name} -{description}</h1>
                    <h1>Precio de venta  :L. {highest_bid}</h1>
                </div>
                <div className="w-[30%] flex flex-col justify-center px-11 ">
                    <button className="border-2 border-blue-600 px-3 py-2 rounded-md">Editar</button>
                    <button className="border-2 border-red-500 px-3 py-2 mt-1 rounded-md" data-twe-toggle="modal"
                        data-twe-target="#exampleModal"
                        data-twe-ripple-init
                        data-twe-ripple-color="light">Eliminar</button>

                </div>
            </div>
            {/* modad*/}
            <div
                data-twe-modal-init
                className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div
                    data-twe-modal-dialog-ref
                    className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
                    <div
                        className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark">
                        <div
                            className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10">
                            <h5
                                className="text-xl font-medium leading-normal text-surface dark:text-white"
                                id="exampleModalLabel">
                                ¿Esta seguro que desea eliminar esta subasta?
                            </h5>
                            <button
                                type="button"
                                className="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                                data-twe-modal-dismiss
                                aria-label="Close">
                                <span className="[&>svg]:h-6 [&>svg]:w-6">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                        {/* modal body*/}
                        <div className="relative flex-auto p-4" data-twe-modal-body-ref>
                            Estos Cambios no se pueden revertir
                        </div>

                        {/* modal footer*/}
                        <div
                            className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 p-4 dark:border-white/10">
                            <button
                                onClick={deleteAuction}
                                type="button"
                                className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
                                data-twe-modal-dismiss
                                data-twe-ripple-init
                                data-twe-ripple-color="light">
                                Close
                            </button>
                            <button
                                onClick={deleteAuction}
                                type="button"
                                className="ms-1 inline-block rounded bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                data-twe-ripple-init
                                data-twe-ripple-color="light">
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>





    )
}
export default MyAuctions