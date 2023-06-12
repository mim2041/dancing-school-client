import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Classes from "../pages/Classes/Classes/Classes";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import Instructors from "../pages/Instructors/Instructors/Instructors";
import DashboardLayout from "../Layout/DashboardLayout";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute/AdminRoute";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClass";
import InstructorRoute from "./InstructorRoute/InstructorRoute";
import AddAClass from "../pages/Dashboard/Instructor/AddAClass/AddAClass";

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
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "manageClasses",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "myClasses",
        element: (
          <InstructorRoute>
            <MyClasses></MyClasses>
          </InstructorRoute>
        ),
      },
      {
        path: "addAClass",
        element: (
          <InstructorRoute>
            <AddAClass></AddAClass>
          </InstructorRoute>
        ),
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
