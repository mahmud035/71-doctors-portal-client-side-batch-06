import React from 'react';

const AppointmentOptionCard = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;

  return (
    <div className="card shadow-xl p-4">
      <div className="card-body text-center">
        <h2 className="card-title text-secondary justify-center font-bold">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
        <p>
          {slots.length} {slots.length > 1 ? 'slots' : 'slot'} available
        </p>
        <div className="card-actions justify-center mt-3">
          <label
            onClick={() => setTreatment(appointmentOption)}
            disabled={slots.length === 0 ? true : false}
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptionCard;
