import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleAddDoctor = (data) => {
    console.log(data);
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
            <span className="label-text">Specialty</span>
          </label>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Select a Specialty
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
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
