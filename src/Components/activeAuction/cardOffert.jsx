import { useEffect, useState, useRef } from "react";
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
    const autobitAmount = {
        bid_amount: "",
    }


    useEffect(() => {
        initTWE({ Input });
        setBaseNumber(lastOffert)


    }, [])


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
    const newBitAuto = async () => {
        try {

            const response = await axios.post(`http://127.0.0.1:8000/api/bids/create/one/${idAuction}/`, autobitAmount, {
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }
            });

            toast.success(response.data.message);

            updateAuction();
            setBaseNumber(autobitAmount.bid_amount)
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
    const autoBit = (number) => {
        autobitAmount.bid_amount = number

        newBitAuto();
    }






    return (

        <div className="w-full mt-2 ">
            <div className="p-[5%] bg-white text-bidcraft-dark h-[25%] rounded-t-lg">
                <div>Precio actual</div>
                <div className="flex justify-end  text-[15px] md:text-[40px]">L.{lastOffert}</div>
            </div>
            <div className="p-[5%] bg-bidcraft-dark h-[75%] rounded-b-lg ">
                <div>
                    <div ><center className="text-white">Ofertas</center></div>
                    <div className="grid grid-cols-3 gap-x-2 my-[10px] ">
                        <button onClick={() => autoBit(firstNumber)}><div className="w-full border text-white border-yellow-500 flex justify-center "><p className="p-2">L.{firstNumber !== null ? firstNumber : ''}</p></div> </button>
                        <button onClick={() => autoBit(secondNumber)}><div className="w-full border text-white border-yellow-500 flex justify-center"><p className="p-2">L.{secondNumber !== null ? secondNumber : ''}</p></div></button>
                        <button onClick={() => autoBit(thirdNumber)}><div className="w-full border text-white border-yellow-500 flex justify-center"><p className="p-2">L.{thirdNumber !== null ? thirdNumber : ''}</p></div></button>
                    </div>
                    <div className="relative mb-3 mt-4">
                        <input
                            onChange={(e) => handleChange(e)}
                            name="bid_amount"
                            type="number"
                            className="peer w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all bg-bidcraft-dark text-white"
                            id="exampleFormControlInputNumber"
                            placeholder=" "
                        />
                        <label
                            htmlFor="exampleFormControlInputNumber"
                            className="absolute left-3 top-2 text-white transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-white peer-placeholder-shown:top-2 peer-placeholder-shown:text-base"
                        >
                            Valor
                        </label>
                    </div>
                    <section className="flex flex-col">
                        <button onClick={newBit} className="p-[5%] bg- my-2 rounded-full bg-yellow-500 font-bold">Colocar oferta</button>
                        <button className=" hidden p-[5%]my-2">Comprar ahora</button>
                    </section>


                </div>
            </div>

        </div>

    )
}

export default CardOfert