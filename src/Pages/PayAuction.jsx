import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

const PaymentForm = ({ amountBit, auctionId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [paymentStatus, setPaymentStatus] = useState('');
  const [currency, setCurrency] = useState('usd');
  const [description, setDescription] = useState('');
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setPaymentStatus('Stripe has not loaded yet.');
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, token } = await stripe.createToken(cardElement);

    if (error) {
      console.error(error);
      setPaymentStatus(error.message);
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/payment/make/${auctionId}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: token.id,
          amount: parseInt(amountBit) * 100, // Convert to cents
          currency,
          description,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status === 200) {
        setPaymentStatus('Pago exitoso');
        setPaymentSuccessful(true);
      } else {
        setPaymentStatus(data.message || 'Pago fallido');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setPaymentStatus('Pago fallido: ' + error.message);
    }
  };

  const handleReviewRedirect = () => {
    navigate(`/review/${auctionId}`);
  };

  return (
    <div className='grid place-content-center text-white'>
      <div className="mx-auto p-4 bg-bidcraft-dark rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Formulario de Pago</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Monto:</label>
            <h1 className="border rounded-2xl p-2 bg-bidcraft-grey">{amountBit}</h1>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Moneda:</label>
            <input
              type="text"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              required
              className="border rounded-2xl p-2 bg-bidcraft-grey"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Descripción:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded-2xl p-2 bg-bidcraft-grey"
            />
          </div>
          <div className="border rounded-2xl p-2 bg-bidcraft-grey">
            <CardElement />
          </div>
          <button
            type="submit"
            disabled={!stripe || paymentSuccessful}
            className={`w-full p-2 rounded-2xl text-black ${!stripe || paymentSuccessful ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#ffd900] hover:bg-blue-600'}`}
          >
            Pagar
          </button>
          {paymentStatus && (
            <div className={`mt-4 p-2 rounded-2xl ${paymentStatus.includes('exitoso') ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
              {paymentStatus}
            </div>
          )}
          {paymentSuccessful && (
            <button
              onClick={handleReviewRedirect}
              className="w-full p-2 rounded-2xl text-white bg-green-500 hover:bg-green-600 mt-4"
            >
              Dejar una reseña
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
