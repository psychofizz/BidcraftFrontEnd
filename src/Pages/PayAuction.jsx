import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ amountBit }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState('');
  const [currency, setCurrency] = useState('usd');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
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
      console.log(`${process.env.REACT_APP_API_URL}/api/payment/make/`);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/payment/make/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: token.id,
          amount: parseInt(amountBit) * 100, // Convert to cents
          currency: currency,
          description: description
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status === 200) {
        setPaymentStatus('Payment Successful');
      } else {
        setPaymentStatus(data.message || 'Payment Failed');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setPaymentStatus('Payment Failed: ' + error.message);
    }
  };

  return (
    <div className='grip place-content-center  text-white'>

      <div className=" mx-auto  p-6 bg-bidcraft-dark rounded-xl shadow-lg justify-center ">
        <h2 className="text-2xl font-bold mb-4">Payment Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Amount:</label>
            <h1 className="border rounded-xl p-2 bg-bidcraft-grey">{amountBit}</h1>

          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Currency:</label>
            <input
              type="text"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              required
              className="border rounded-xl p-2 bg-bidcraft-grey"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Description:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded-xl p-2 bg-bidcraft-grey"
            />
          </div>
          <div className="border rounded-xl p-2 bg-bidcraft-grey">
            <CardElement />
          </div>
          <button
            type="submit"
            disabled={!stripe}
            className={`w-full p-2 rounded-xl text-white ${!stripe ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#ffd900] hover:bg-blue-600'}`}
          >
            Pay
          </button>
          {paymentStatus && (
            <div className={`mt-4 p-2 rounded-xl ${paymentStatus.includes('Successful') ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
              {paymentStatus}
            </div>
          )}
        </form>
      </div>
    </div>

  );
};

export default PaymentForm;
