import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Error404 from '../../../assets/images/Error404.png';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      {error && (
        <div className="flex justify-center items-center flex-col gap-6 h-screen">
          <img src={Error404} alt="" className="w-[350px]" />
          <p className="text-red-600 font-bold">
            <i>{error.statusText || error.message}</i>
          </p>

          <Link to="/">
            <button className="btn btn-info">Back To Home Page</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
