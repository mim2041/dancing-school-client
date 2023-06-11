import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import Navbar from "../shared/Navbar/Navbar";
import { AuthContext } from "../Providers/AuthProvider";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isInstructor] = useInstructor(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile drawer-end">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-cyan-50 text-black ">
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allSellers">Manage Classes</Link>
                </li>
                <li>
                  <Link to="/dashboard/allBuyers">Manage Users</Link>
                </li>
              </>
            )}
            {isInstructor && (
              <>
                <li>
                  <Link to="/dashboard/addProduct">Add a Class</Link>
                </li>
                <li>
                  <Link to="/dashboard/myProducts">My Classes</Link>
                </li>
              </>
            )}
            {isInstructor && (
              <>
                <li>
                  <Link to="/dashboard/myOrders">My Selected Classes</Link>
                </li>
                <li>
                  <Link to="/dashboard/myWishLists">My Enrolled Classes</Link>
                </li>
                <li>
                  <Link to="/dashboard/myWishLists">Payment History</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default DashBoard;
