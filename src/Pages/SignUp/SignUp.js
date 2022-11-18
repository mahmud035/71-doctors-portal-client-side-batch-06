import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);

  const [createdUserEmail, setCreatedUserEmail] = useState('');
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate('/');
  }

  // console.log(errors);

  const handleSignUp = (data, e) => {
    // e.preventDefault();

    console.log(data);
    const name = data.name;
    const email = data.email;
    const password = data.password;

    //* Create User
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('User Created Successfully');

        const userInfo = {
          displayName: data.name,
        };

        //* Update User Profile
        updateUser(userInfo)
          .then(() => {
            //* Save user information to DataBase
            saveUser(name, email);
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message.slice(22, -2));
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    console.log(user);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('SavedUser:', data);

        setCreatedUserEmail(data?.email);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Logged in successfully');

        navigate('/');
      })
      .catch((error) => {
        toast.error(error.message.slice(22, -2));
      });
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
        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
