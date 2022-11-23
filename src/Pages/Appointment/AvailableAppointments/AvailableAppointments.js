import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOptionCard from './AppointmentOptionCard';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, 'PP');
  console.log(date);

  const {
    isLoading,
    isError,
    data: appointmentOptions = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ['appointmentOptions', date],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-portal-server-side.vercel.app/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isError) {
    return <div className="text-3xl text-center">Error: {error.message}</div>;
  }

  // console.log(treatment);

  return (
    <section>
      <p className="text-2xl text-secondary font-bold text-center ">
        Available Appointments on: {format(selectedDate, 'PP')}
      </p>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
        {appointmentOptions.map((option, index) => (
          <AppointmentOptionCard
            key={index}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOptionCard>
        ))}
      </div>

      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
