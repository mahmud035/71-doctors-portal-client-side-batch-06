import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  console.log(errors);

  const handleSignUp = (data, e) => {
    console.log(data);

    e.target.reset();
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-2xl text-center font-bold py-4">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
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
              <span className="label-text">Password</span>
            </label>
            <input
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message:
                    'Password must be at least 6 characters (one special case, one digit, one lowercase letter)',
                },
                pattern: {
                  value: /(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  message:
                    'Password must be one special case, one digit, one lowercase letter',
                },
              })}
              type="password"
              className="input input-bordered w-full max-w-xs"
            />

            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password?.message}</p>
            )}
          </div>

          <input
            type="submit"
            className="btn btn-accent w-full mt-3 mb-2"
            value="Sign Up"
          />
        </form>
        <p className="text-sm">
          Already have an account?
          <Link to="/login" className="text-secondary">
            &nbsp;Please login
          </Link>
        </p>

        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignUp;
