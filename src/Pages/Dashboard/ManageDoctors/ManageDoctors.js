import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const closeModal = () => {
    setDeletingDoctor(null);
  };

  const url = 'http://localhost:5000/doctors';

  const {
    isLoading,
    isError,
    data: doctors = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      try {
        const res = await fetch(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log('Error:', error);
      }
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  // console.log(doctors);

  const handleDeleteDoctor = (doctor) => {
    console.log(doctor);

    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Doctor ${doctor.name} deleted successfully`);
          refetch();
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl">Manage Doctors: {doctors.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, index) => (
              <>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex space-x-3">
                      <div className="avatar">
                        <div className=" rounded-full w-16 h-16">
                          <img src={doctor?.image} alt="Avatar" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{doctor?.name}</td>
                  <td>{doctor?.specialty}</td>
                  <td>
                    <label
                      onClick={() => setDeletingDoctor(doctor)}
                      htmlFor="confirmation-modal"
                      className="btn btn-sm btn-error "
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>

      {/* Confirmation Modal */}
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete doctor ${deletingDoctor.name}. It can't be undone. You can't get the data back.`}
          successAction={handleDeleteDoctor}
          successButtonName="Delete"
          modalData={deletingDoctor}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
