import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Classes from "../pages/Classes/Classes/Classes";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import Instructors from "../pages/Instructors/Instructors/Instructors";
import DashboardLayout from "../Layout/DashboardLayout";
import AddAClass from "../pages/Instructors/AddAClass";
import SelectedClasses from "../pages/Instructors/SelectedClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: 'addclass',
        element: <AddAClass></AddAClass>
      },
      {
        path: 'myclasses',
        element: <SelectedClasses></SelectedClasses>
      }
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "home",
        element: <h1>Home</h1>,
      },
      {
        path: "settings",
        element: <h1>Settings</h1>,
      },
    ],
  },
  // {
  //   path: "/dashboard",
  //   element: (
  //     <Dashboard></Dashboard>
  //     // <PrivateRoute>
  //     //   <DashBoard></DashBoard>
  //     // </PrivateRoute>
  //   ),
  //   children: [
  //     {
  //       path: "",
  //       element: <h1>1</h1>,
  //     },
  //   ],
  // },
]);

export default router;
