import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOptionCard from './AppointmentOptionCard';

const AvailableAppointments = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);

  useEffect(() => {
    fetch('appointmentOptions.json')
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);

  console.log(appointmentOptions);

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
          ></AppointmentOptionCard>
        ))}
      </div>
    </section>
  );
};

export default AvailableAppointments;
