import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaUserCog } from "react-icons/fa";
import { MdOutlineSettingsApplications } from "react-icons/md";
import useInstructor from "../Hooks/useInstructor";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useStudent from "../Hooks/useStudent";
import { AiFillFileAdd } from "react-icons/ai";
import { ImFilesEmpty } from "react-icons/im";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdPayment } from "react-icons/md";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isStudent] = useStudent(user?.email);
  const [isInstructor] = useInstructor(user?.email);
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideNav = () => setIsOpen((prevState) => !prevState);
  return (
    <div className="mx-10 ">
      <button
        onClick={toggleSideNav}
        data-drawer-target="cta-button-sidebar"
        data-drawer-toggle="cta-button-sidebar"
        aria-controls="cta-button-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="cta-button-sidebar"
        className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full  sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#D7E9E7] dark:bg-gray-800">
          <Link to="/">
            <div className="flex justify-center items-center m-5 ">
              <img
                src="https://i.ibb.co/vmJXmwy/logo1.jpg"
                className="w-20"
                alt=""
              />
              <p className="text-2xl m-2 font-semibold text-[black] text-center"></p>
            </div>
          </Link>
          <ul className="space-y-2 font-medium mx-5 ">
            {isAdmin && (
              <>
                <li>
                  <Link
                    to="/"
                    className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span className="ml-3">Home </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/manageClasses"
                    className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span className="ml-3">Manage Classes </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/manageUsers"
                    className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Manage Users
                    </span>
                  </Link>
                </li>
              </>
            )}

            {isInstructor && (
              <>
                <li>
                  <Link
                    to="/dashboard/member"
                    className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span className="ml-3">Dashboard</span>
                  </Link>
                </li>
                
                <li>
                  <Link
                    to="/dashboard/addclass"
                    className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <div className="text-2xl">
                    <AiFillFileAdd/>
                    </div>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Add A Class
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/member/settings"
                    className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <div className="text-2xl">
                      <ImFilesEmpty/>
                    </div>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      My Classes
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/member/myLoan"
                    className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <MdOutlineSettingsApplications className="w-6 h-6"></MdOutlineSettingsApplications>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      My Loan
                    </span>
                  </Link>
                </li>
              </>
            )}

             {isStudent && (
              <>
                <li>
                  <Link
                    to="/"
                    className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <MdOutlineSettingsApplications className="w-6 h-6"></MdOutlineSettingsApplications>
                    <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mySelectedClasses"
                    className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <ImFilesEmpty className="w-6 h-6"></ImFilesEmpty>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      My Selected Classes
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/myEnrolledClasses"
                    className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <LuFileSpreadsheet className="w-6 h-6"></LuFileSpreadsheet>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      My Enrolled Classes
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/myEnrolledClasses"
                    className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <MdPayment className="w-6 h-6"></MdPayment>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Payment
                    </span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </aside>
      <div className=" sm:ml-32">
        <div className="mb-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;