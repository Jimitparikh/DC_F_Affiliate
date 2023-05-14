import { createBrowserRouter } from 'react-router-dom'
import Layout from "../../components/Layout";
import  Home  from '../../views/Home';
import  Wallet  from '../../views/Wallet';
import  Profile_Settings from '../../views/ProfileAndSettings';
import Login from '../../views/Login';
import Register from '../../views/Register';
import ForgotPassword from '../../views/ForgetPassword';
import Reports from '../../views/Reports';
import Notification from '../../views/Notification';
import PaymentOptions from '../../views/PaymentOptiopns';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout header={true} footer={true} />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Wallet", element: <Wallet /> },
      { path: "/Profile_Settings", element: <Profile_Settings /> },
      { path: "/Reports", element: <Reports /> },
      { path: "/Notification", element: <Notification /> },
      { path: "/PaymentOption", element: <PaymentOptions /> },
    ]
  },
  {
    path: "/",
    children: [
      { path: "/login", element: <Login />, },
      { path: "/register", element: <Register />, },
      { path: "/otp", element: <ForgotPassword />, },
    ]
  }
]);
