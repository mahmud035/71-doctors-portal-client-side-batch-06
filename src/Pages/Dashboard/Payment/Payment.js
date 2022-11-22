import React from 'react';
import { useLoaderData } from 'react-router-dom';

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
      <h2 className="text-3xl">Payment</h2>
    </div>
  );
};

export default Payment;
