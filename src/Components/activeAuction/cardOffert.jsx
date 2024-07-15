import { useEffect, useState,useRef  } from "react";
import React from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import {
    Input,
    initTWE,
} from "tw-elements";
function CardOfert({ lastOffert, idAuction, jwt, updateAuction }) {


    const firstRender = useRef(true);
    // essto nos sirve para generar numeros ramdon 
    const [baseNumber, setBaseNumber] = useState(null);
    const [firstNumber, setFirstNumber] = useState(null);
    const [secondNumber, setSecondNumber] = useState(null);
    const [thirdNumber, setThirdNumber] = useState(null)
    const autoBitJson = {
        bid_amount:"",
       }

    useEffect(() => {
        initTWE({ Input });
        setBaseNumber(lastOffert)
        console.log("mira aca man " +baseNumber)
      
    },[])


    useEffect(() => {
        if (baseNumber !== "") {
            generateNumbers();
        }
    }, [baseNumber]);

 


   
    //Esta funcion nos va a permitir actualizar el valor del input
    const [values, setValues] = useState({
        bid_amount: "",

    });
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
        console.log(values.bid_amount)
    };
    //esta funcion sirve para hacer una nueva subasta 
    const newBit = async () => {
        try {

            const response = await axios.post(`http://127.0.0.1:8000/api/bids/create/one/${idAuction}/`, values, {
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }
            });

            toast.success(response.data.message);

            updateAuction();
            setBaseNumber(values.bid_amount)
            generateNumbers();
            

        } catch (error) {
            toast.error("Oferta una mayor cantidad que la actual")
        }
    };

   //esta funcion sirve para hacer una nueva subasta 
   const newBit2 = async () => {
    try {

        const response = await axios.post(`http://127.0.0.1:8000/api/bids/create/one/${idAuction}/`, autoBitJson, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        });

        toast.success(response.data.message);

        updateAuction();
        setBaseNumber(autoBitJson.bid_amount)
        generateNumbers();
        

    } catch (error) {
        toast.error("Oferta una mayor cantidad que la actual")
    }
};


    //esta funcion genera numeros para que se pongan automaticamente 
    const generateNumbers = () => {
        const baseNum = Number(baseNumber);
        
        setFirstNumber(baseNum + 100);
        setSecondNumber(baseNum + 500);
        setThirdNumber(baseNum + 1000);
        
       
    };
    //Esta funcion sirve para  las ofertas automaticas
    const  autoBit = (number) => {
        autoBitJson.bid_amount=number
           console.log(autoBitJson)
           newBit2();
    }

   
    

      
   
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
                        <button onClick={() => autoBit(firstNumber)}><div className="w-full border border-black flex justify-center "><p className="p-2">L.${firstNumber !== null ? firstNumber : ''}</p></div> </button>
                        <button onClick={() => autoBit(secondNumber)}><div className="w-full border border-black flex justify-center"><p className="p-2">L.${secondNumber !== null ? secondNumber : ''}</p></div></button>
                        <button onClick={() => autoBit(thirdNumber)}><div className="w-full border border-black flex justify-center"><p className="p-2">L.${thirdNumber !== null ? thirdNumber : ''}</p></div></button>
                    </div>
                    <div className="relative mb-3 p-2" data-twe-input-wrapper-init>

                        <input onChange={(e) => handleChange(e)}
                            name="bid_amount"
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
                        <button onClick={newBit} className="p-[5%] bg-slate-300 my-2">Colocar oferta</button>
                        <button className=" hidden p-[5%] bg-slate-300 my-2">Comprar ahora</button>

                    </section>


                </div>
            </div>

        </div>

    )
}

export default CardOfert