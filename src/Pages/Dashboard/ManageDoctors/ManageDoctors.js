// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import Loading from '../../Shared/Loading/Loading';

// const ManageDoctors = () => {
//   const url = 'http://localhost:5000/doctors';

//   const {
//     isLoading,
//     isError,
//     data: doctors = [],
//     error,
//   } = useQuery({
//     queryKey: ['doctors'],
//     queryFn: async () => {
//       const res = await fetch(url);
//       const data = await res.json();
//       return data;
//     },
//   });

//   if (isLoading) {
//     return <Loading></Loading>;
//   }

//   if (isError) {
//     return <div>{error.message}</div>;
//   }

//   console.log(doctors);

//   return (
//     <div>
//       <h2 className="text-3xl">Manage Doctors</h2>
//     </div>
//   );
// };

// export default ManageDoctors;
