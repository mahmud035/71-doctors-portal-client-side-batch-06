import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import Appointment from '../../Pages/Appointment/Appointment/Appointment';
import AddDoctor from '../../Pages/Dashboard/AddDoctor/AddDoctor';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import ManageDoctors from '../../Pages/Dashboard/ManageDoctors/ManageDoctors';
import MyAppointment from '../../Pages/Dashboard/MyAppointment/MyAppointment';
import Payment from '../../Pages/Dashboard/Payment/Payment';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import ErrorPage from '../../Pages/Shared/ErrorPage/ErrorPage';
import SignUp from '../../Pages/SignUp/SignUp';
import AdminRoute from '../AdminRoute/AdminRoute';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/appointment',
        element: <Appointment></Appointment>,
      },
    ],
  },

  {
    path: '/dashboard',
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/dashboard',
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: '/dashboard/allusers',
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/adddoctor',
        element: (
          <AdminRoute>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/managedoctors',
        element: (
          <AdminRoute>
            <ManageDoctors></ManageDoctors>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://doctors-portal-server-side.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
