import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `https://doctors-portal-server-side.vercel.app/bookings?email=${user?.email}`;

  const {
    isLoading,
    isError,
    data: bookings = [],
    error,
  } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  // console.log(bookings);

  return (
    <div>
      <h3 className="text-3xl">My Appointments</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment Name</th>
              <th>Booking Date</th>
              <th>Booking Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, index) => (
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{booking?.patientName}</td>
                <td>{booking?.treatmentName}</td>
                <td>{booking?.appointmentDate}</td>
                <td>{booking?.selectedSlot}</td>
                <td>
                  {/* A Conditional Rendering. It is saying if booking.paid is false then show the button.*/}
                  {!booking?.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn btn-sm btn-primary">Pay</button>
                    </Link>
                  )}

                  {/* Saying if booking.paid is true then show the span. */}
                  {booking?.paid && (
                    <span className="text-green-600 font-bold">Paid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
