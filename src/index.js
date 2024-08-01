import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Reemplaza con tu clave pública de Stripe
const stripePromise = loadStripe('tu_clave_publica');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Elements stripe={stripePromise}>
    <App />
    <Toaster />
    <ToastContainer />
  </Elements>
);

// Si quieres empezar a medir el rendimiento en tu app, pasa una función
// para registrar resultados (por ejemplo: reportWebVitals(
// o enviar a un endpoint de análisis. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();
