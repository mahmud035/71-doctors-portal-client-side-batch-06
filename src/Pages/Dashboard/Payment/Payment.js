import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  const {
    appointmentDate,
    email,
    patientName,
    price,
    selectedSlot,
    treatmentName,
  } = booking;

  return (
    <div>
      <h2 className="text-3xl">Payment for {treatmentName}</h2>
      <p className="text-xl-">
        Please pay <strong>${price}</strong> for your appointment on&nbsp;
        {appointmentDate} at&nbsp;
        {selectedSlot}.
      </p>
    </div>
  );
};

export default Payment;
