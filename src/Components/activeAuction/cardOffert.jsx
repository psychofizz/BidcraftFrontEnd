import React, { useEffect, useState, useCallback } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import { Input, initTWE } from "tw-elements";
import Modal from 'react-modal'

function CardOfert({ lastOffert, idAuction, jwt, updateAuction, loading, status, is_active, buy_it_now_price, name, image }) {

    // State declarations
    const [baseNumber, setBaseNumber] = useState(null);
    const [firstNumber, setFirstNumber] = useState(null);
    const [secondNumber, setSecondNumber] = useState(null);
    const [thirdNumber, setThirdNumber] = useState(null);
    const [values, setValues] = useState({ bid_amount: "" });
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const autobitAmount = { bid_amount: "" };

    // useCallback for generateNumbers
    const generateNumbers = useCallback(() => {
        const baseNum = Number(baseNumber);
        setFirstNumber(baseNum + 100);
        setSecondNumber(baseNum + 500);
        setThirdNumber(baseNum + 1000);
    }, [baseNumber]);

    // useEffects
    useEffect(() => {
        initTWE({ Input });
        setBaseNumber(lastOffert);
    }, [lastOffert]);

    useEffect(() => {
        if (baseNumber !== "") {
            generateNumbers();
        }
    }, [baseNumber, generateNumbers]);

    // Event handlers
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    //Comprar ahora
    /* const buyItNow = async () => {

        if (!is_active) {
            toast.warning("La subasta ha finalizo")
            return

        }

        if (status!==2) {
            toast.warning("¡Verifícate en tu perfil para poder subastar y pujar por tus subastas favoritas!")
            return
        }
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/auction/buy/now/${idAuction}/`,
                values,
                { headers: { 'Authorization': `Bearer ${jwt}` } }
            );
            console.log(response)
            toast.success(response.data.message);
            updateAuction();
            setBaseNumber(values.bid_amount);
            generateNumbers();
        } catch (error) {
            toast.error("Oferta una mayor cantidad que la actual");
        }
    };
    */

    const buyItNow = async () => {
        if (!is_active) {
            toast.warning("La subasta ha finalizado");
            return;
        }
        if (status !== 2) {
            toast.warning("¡Verifícate en tu perfil para poder subastar y pujar por tus subastas favoritas!");
            return;
        }
        setModalIsOpen(true); // Muestra el modal de confirmación
    };

    const handleConfirmBuyItNow = async () => {
        setModalIsOpen(false); // Cierra el modal
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/auction/buy/now/${idAuction}/`,
                values,
                { headers: { 'Authorization': `Bearer ${jwt}` } }
            );


            toast.success(response.data.message);
            updateAuction();
            setBaseNumber(values.bid_amount);
            generateNumbers();
        } catch (error) {
            toast.error("Oferta una mayor cantidad que la actual");
        }
    };

    const handleCancelBuyItNow = () => {
        setModalIsOpen(false); // Cierra el modal
    };


    // API calls
    const newBit = async () => {
        if (!is_active) {
            toast.warning("La subasta ha finalizo")
            return

        }
        if (status !== 2) {
            toast.warning("¡Verifícate en tu perfil para poder subastar y pujar por tus subastas favoritas!")
            return
        }
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/bids/create/one/${idAuction}/`,
                values,
                { headers: { 'Authorization': `Bearer ${jwt}` } }
            );

            toast.success(response.data.message);
            updateAuction();
            setBaseNumber(values.bid_amount);
            generateNumbers();
        } catch (error) {
            toast.error("Oferta una mayor cantidad que la actual");
        }
    };

    const newBitAuto = async () => {
        if (!is_active) {
            toast.warning("La subasta ha finalizo")
            return

        }
        if (status !== 2) {
            toast.warning("¡Verifícate en tu perfil para poder subastar y pujar por tus subastas favoritas!")
            return
        }
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/bids/create/one/${idAuction}/`,
                autobitAmount,
                { headers: { 'Authorization': `Bearer ${jwt}` } }
            );
            toast.success(response.data.message);
            updateAuction();
            setBaseNumber(autobitAmount.bid_amount);
            generateNumbers();
        } catch (error) {

        }finally {
            setIsProcessing(false);
          }
    };

    const autoBit = (number) => {
        if (isProcessing) return;
        setIsProcessing(true);
        autobitAmount.bid_amount = number;
        newBitAuto();
    };

    // Render
    return (
        <div className="w-full mt-2">
            <div className="p-[5%] bg-white text-bidcraft-dark h-[25%] rounded-t-lg">
                <div>Precio actual</div>
                <div className="flex justify-end text-[15px] md:text-[40px]">L.{lastOffert}</div>
            </div>
            <div className="p-[5%] bg-bidcraft-dark h-[75%] rounded-b-lg">
                <div >
                    <div><center className="text-white">Ofertas</center></div>
                    <div className="grid grid-cols-3 gap-x-2 my-[10px]"
                    >
                        <button
                            onClick={() => autoBit(firstNumber)}
                            className={`w-full border text-white border-yellow-500 flex justify-center 
    ${status !== 2 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-600 active:bg-yellow-700 transition-all duration-50'}`}
                            disabled={status !== 2}
                        >
                            <div>
                                <p className="p-2">L.{firstNumber !== null ? firstNumber : ''}</p>
                            </div>
                        </button>

                        <button onClick={() => autoBit(secondNumber)} >
                            <div className={`w-full border text-white border-yellow-500 flex justify-center ${status !== 2 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-600 active:bg-yellow-700 transition-all duration-50'}`}>
                                <p className="p-2">L.{secondNumber !== null ? secondNumber : ''}</p>
                            </div>
                        </button>
                        <button onClick={() => autoBit(thirdNumber)} >
                            <div className={`w-full border text-white border-yellow-500 flex justify-center ${status !== 2 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-600 active:bg-yellow-700 transition-all duration-50'}`}>
                                <p className="p-2">L.{thirdNumber !== null ? thirdNumber : ''}</p>
                            </div>
                        </button>
                    </div>
                    <div className="relative mb-3 mt-4">
                        <input
                            onChange={handleChange}
                            name="bid_amount"
                            type="number"
                            className={`peer w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all bg-bidcraft-dark text-white ${status !== 2 ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            id="exampleFormControlInputNumber"
                            placeholder=" Ingrese una nueva oferta"
                            disabled={status !== 2} // Deshabilita el input si status es 1 o 3
                        />
                        <label
                            htmlFor="exampleFormControlInputNumber"
                            className="absolute left-3 top-2 text-white transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-white peer-placeholder-shown:top-2 peer-placeholder-shown:text-base"
                        >
                        </label>
                    </div>
                    <section className="flex flex-col">
                        <button onClick={newBit} className={`p-[5%] bg- my-2 rounded-full bg-yellow-500 font-bold   ${status !== 2 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-600 active:bg-yellow-700 transition-all duration-50'}`}>
                            Colocar oferta
                        </button>
                        <button onClick={buyItNow} className={`p-[5%] bg- my-2 rounded-full bg-yellow-500 font-bold   ${status !== 2 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-600 active:bg-yellow-700 transition-all duration-50'}`} >Comprar ahora por {buy_it_now_price}</button>
                    </section>
                </div>
            </div>
            {/* Modal de Confirmación */}
            <Modal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Confirmación de Compra"
                className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
                <div className="bg-white p-6 rounded-lg max-w-sm w-full">
                    <h2 className="text-xl font-semibold mb-4">Confirmar Compra</h2>
                    <div className="flex flex-col items-center mb-4">
                        <img src={image} alt={name} className="w-32 h-32 object-cover mb-4" />
                        <p className="text-center">
                            ¿Estás seguro de comprar ahora el producto <strong>{name}</strong> por L.{buy_it_now_price}?
                        </p>
                    </div>
                    <div className="flex justify-around mt-4">
                        <button
                            onClick={handleConfirmBuyItNow}
                            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                        >
                            Sí, comprar
                        </button>
                        <button
                            onClick={handleCancelBuyItNow}
                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default CardOfert;