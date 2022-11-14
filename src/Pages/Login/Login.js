import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { user, signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || '/';
  console.log(from);

  console.log(errors);

  const handleLogin = (data, e) => {
    console.log(data);
    const email = data.email;
    const password = data.password;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Logged in successfully');

        e.target.reset();
      })
      .catch((error) => {
        toast.error(error.message.slice(22, -2));
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Logged in successfully');
      })
      .catch((error) => {
        toast.error(error.message.slice(22, -2));
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-2xl text-center font-bold py-4">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register('email', { required: 'Email Address is required' })}
              type="email"
              className="input input-bordered w-full max-w-xs"
            />

            {errors.email && (
              <p role="alert" className="text-red-600 text-sm">
                {errors.email?.message}
              </p>
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
                  message: 'Password must be at least 6 characters',
                },
              })}
              type="password"
              className="input input-bordered w-full max-w-xs"
            />

            {errors.password && (
              <p role="alert" className="text-red-600 text-sm">
                {errors.password?.message}
              </p>
            )}

            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>

          <input
            type="submit"
            className="btn btn-accent w-full mt-3 mb-2"
            value="Login"
          />
        </form>
        <p className="text-sm">
          New to Doctors Portal?
          <Link to="/signup" className="text-secondary">
            &nbsp;Create new account
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

export default Login;
