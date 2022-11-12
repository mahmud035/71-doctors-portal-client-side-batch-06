import React from 'react';

const AppointmentOptionCard = ({ appointmentOption }) => {
  const { name, slots } = appointmentOption;

  return (
    <div className="card shadow-xl p-4">
      <div className="card-body text-center">
        <h2 className="card-title text-secondary justify-center font-bold">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
        <p>
          {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available
        </p>
        <div className="card-actions justify-center mt-3">
          <button className="btn btn-primary text-white">
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptionCard;