import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  //* treatment is just another name of appointmentOption with _id, name, slots field
  console.log(treatment);

  const { name, slots } = treatment;
  const date = format(selectedDate, 'PP');
  const { user } = useContext(AuthContext);

  const handleBooking = (e) => {
    e.preventDefault();

    const form = e.target;
    const selectedSlot = form.selectedSlot.value;
    const patientName = user?.displayName;
    const email = user?.email;
    const phone = form.phone.value;

    // Creating a booking object which will be POST to database
    const booking = {
      appointmentDate: date,
      treatmentName: name,
      selectedSlot,
      patientName,
      email,
      phone,
    };

    console.log(booking);

    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          //* Closed the Modal
          setTreatment(null);
          toast.success('Appointment Booked Successfully');
          refetch();
        } else {
          setTreatment(null);
          toast.error(data.message);
        }
      })
      .catch((error) => {
        toast.error(error.message.slice(22, -2));
      });

    // TODO:
    // send data to the server
    // and once data is saved then close the modal
    // and display success toast
  };

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

          <form onSubmit={handleBooking} className="grid gap-4 grid-cols-1">
            <input
              defaultValue={date}
              disabled
              type="text"
              className="input input-bordered w-full "
            />

            <select
              name="selectedSlot"
              className="select select-bordered w-full "
            >
              {slots.map((timeSlot, index) => (
                <option key={index}>{timeSlot}</option>
              ))}
            </select>

            <input
              disabled
              defaultValue={user?.displayName}
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full "
            />

            <input
              defaultValue={user?.email}
              disabled
              type="email"
              placeholder="Email"
              className="input input-bordered w-full "
            />

            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
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
