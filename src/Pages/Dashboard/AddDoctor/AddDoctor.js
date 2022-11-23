import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const url =
    'https://doctors-portal-server-side.vercel.app/appointmentSpecialty';

  const {
    isLoading,
    isError,
    data: specialties = [],
    error,
  } = useQuery({
    queryKey: ['appointmentSpecialty'],
    queryFn: async () => {
      const res = await fetch(url);
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

  const handleAddDoctor = (data) => {
    // console.log(data);
    const image = data.image[0];
    console.log(image);

    //* Upload image to Imgbb Server
    const formData = new FormData();
    formData.append('image', image);

    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbbKey}`;

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          // console.log(imageData);
          const imageURL = imageData?.data?.display_url;

          //* Save Doctor information in the Database
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imageURL,
          };

          fetch('https://doctors-portal-server-side.vercel.app/doctors', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success('Doctor Added Successfully');
                navigate('/dashboard/managedoctors');
              }
            });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="w-96 p-7">
      <h2 className="text-3xl">Add A Doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            className="input input-bordered w-full max-w-xs"
          />

          {errors.name && (
            <p className="text-red-600 text-sm">{errors.name?.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register('email', { required: 'Email is required' })}
            type="email"
            className="input input-bordered w-full max-w-xs"
          />

          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email?.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Select A Specialty</span>
          </label>
          <select
            {...register('specialty', { required: 'This is required' })}
            className="select select-bordered w-full max-w-xs"
          >
            {specialties?.map((specialty, index) => (
              <option key={index}>{specialty.name}</option>
            ))}
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            {...register('image', { required: 'Photo is required' })}
            type="file"
            accept="image/*"
            className="input pl-1 w-full max-w-xs"
          />

          {errors.image && (
            <p className="text-red-600 text-sm">{errors.image?.message}</p>
          )}
        </div>

        <input
          type="submit"
          className="btn btn-accent w-full mt-3 mb-2"
          value="Add Doctor"
        />
      </form>
    </div>
  );
};

export default AddDoctor;

/**
 * Three places to store images:
 * 1. Third party image hosting server (ex: imgbb)
 * 2. File system of your server
 * 3. mongodb (database)
 */
