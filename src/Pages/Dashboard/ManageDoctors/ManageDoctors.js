import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
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

  console.log(doctors);

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
                  <th>
                    <button className="btn btn-sm btn-error btn-xs">
                      Delete
                    </button>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
