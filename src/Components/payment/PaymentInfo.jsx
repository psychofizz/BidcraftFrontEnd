import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const PaymentInfo = ({ auctionItem, finalPrice }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [name, setName] = useState('');
    const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsConfirmDialogOpen(true);
    };

    const processPayment = () => {
        setIsConfirmDialogOpen(false);
        toast.promise(
            new Promise((resolve) => setTimeout(resolve, 2000)),
            {
                loading: 'Procesando pago...',
                success: '¡Pago exitoso!',
                error: 'El pago falló. Por favor, inténtalo de nuevo.',
            }
        );
    };

    return (
        <div className="container mx-auto p-4 bg-bidcraft-modal-bg min-h-screen flex items-center justify-center">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="w-full max-w-md bg-white shadow-lg rounded-3xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Detalles de Pago</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="cardNumber">
                            Número de Tarjeta
                        </label>
                        <input
                            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bidcraft-main"
                            id="cardNumber"
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="expiryDate">
                                Fecha de Expiración
                            </label>
                            <input
                                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bidcraft-main"
                                id="expiryDate"
                                type="text"
                                placeholder="MM/AA"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="cvv">
                                CVV
                            </label>
                            <input
                                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bidcraft-main"
                                id="cvv"
                                type="text"
                                placeholder="123"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                            Nombre en la Tarjeta
                        </label>
                        <input
                            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bidcraft-main"
                            id="name"
                            type="text"
                            placeholder="Armando Paredes"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="bg-gray-100 p-4 rounded-2xl">
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">Resumen del Pedido</h3>
                        <p className="text-sm text-gray-600">Artículo: {auctionItem}</p>
                        <p className="text-sm text-gray-600">Precio Final: ${finalPrice}</p>
                    </div>
                    <button
                        className="w-full bg-bidcraft-main text-white font-bold py-3 px-4 rounded-full hover:bg-opacity-90 transition duration-300 ease-in-out"
                        type="submit"
                    >
                        Pagar L.{finalPrice}
                    </button>
                </form>
            </div>

            {isConfirmDialogOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
                    <div className="bg-white p-8 rounded-3xl shadow-xl max-w-sm w-full mx-4">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Confirmar Pago</h3>
                        <p className="text-gray-600 mb-6">
                            ¿Estás seguro de que deseas proceder con el pago de L.{finalPrice}?
                        </p>
                        <div className="space-y-3">
                            <button
                                className="w-full bg-bidcraft-main text-white font-bold py-3 px-4 rounded-full hover:bg-opacity-90 transition duration-300 ease-in-out"
                                onClick={processPayment}
                            >
                                Confirmar
                            </button>
                            <button
                                className="w-full bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-full hover:bg-gray-400 transition duration-300 ease-in-out"
                                onClick={() => setIsConfirmDialogOpen(false)}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaymentInfo;
