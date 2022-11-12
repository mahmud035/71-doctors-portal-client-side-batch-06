import React from 'react';
import { format } from 'date-fns';

const AvailableAppointments = ({ selectedDate }) => {
  return (
    <section>
      <p className="text-2xl text-secondary font-bold text-center ">
        Available Appointments on: {format(selectedDate, 'PP')}
      </p>
    </section>
  );
};

export default AvailableAppointments;
