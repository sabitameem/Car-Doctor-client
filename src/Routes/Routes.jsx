import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login";
import SignUp from "../pages/Home/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'signup',
          element: <SignUp></SignUp>
        },
        {
          path:'checkOut/:id',
          element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'bookings',
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);


export default router;  