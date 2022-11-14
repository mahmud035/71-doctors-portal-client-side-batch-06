import React, { useEffect, useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppointmentBanner>

      <AvailableAppointments
        selectedDate={selectedDate}
      ></AvailableAppointments>
    </div>
  );
};

export default Appointment;
