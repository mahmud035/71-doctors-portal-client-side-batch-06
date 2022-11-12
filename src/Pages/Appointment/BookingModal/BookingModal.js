import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, selectedDate }) => {
  //* treatment is => Appointment Option(object). Just different name
  console.log(treatment);

  const { name, slots } = treatment;
  const date = format(selectedDate, 'PP');

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold pb-10">{name}</h3>
          <form className="grid gap-4 grid-cols-1">
            <input
              defaultValue={date}
              disabled
              type="text"
              className="input input-bordered w-full "
            />

            <select className="select select-bordered w-full ">
              {slots.map((timeSlot, index) => (
                <option key={index}>{timeSlot}</option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full "
            />

            <input
              type="number"
              placeholder="Phone Number"
              className="input input-bordered w-full "
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full "
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
