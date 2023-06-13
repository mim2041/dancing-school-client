import { Link } from "react-router-dom";
import logo1 from '../../assets/images/logo1.jpg'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const { user, logOut } = useContext(AuthContext);
  console.log(user?.displayName);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>

      {user ? (
        <div className="flex justify-between items-center">
          <li>
            <Link to="/dashboard">
              <button className="btn">
                <FaShoppingCart />
                <div className="badge badge-secondary">+0</div>
              </button>
            </Link>
          </li>
          <div className="">
            <img
              title={user.displayName ? user.displayName : null}
              className="rounded-full border-solid   border-primary border-2"
              width="50px"
              height="50px"
              src={user.photoURL ? user.photoURL : null}
            />
          </div>
          <li>
            <button onClick={handleLogOut} className="btn btn-sm btn-warning">
              Log Out
            </button>
          </li>
        </div>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);


  return (
    <div className="">
      <div className="navbar bg-green-100 py-4 lg:justify-between lg:items-center fixed z-10 max-w-screen-xl bg-opacity-30">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <div>
            <img
              src={logo1}
              width={"50px"}
              className="mx-auto rounded-lg"
              alt=""
            />
            <a className="btn btn-ghost normal-case lg:text-xl">
              Dancing School
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
            {theme === "dark" ? (
              <li>
                <button className="btn btn-square btn-dark">
                  <label className="swap swap-rotate w-12 h-12">
                    <input
                      type="checkbox"
                      onChange={handleToggle}
                      // show toggle image based on localstorage theme
                      checked={theme === "light" ? false : true}
                    />
                    Light
                  </label>
                </button>
              </li>
            ) : (
              <li>
                <button className="btn btn-square btn-dark">
                  <label className="swap swap-rotate w-12 h-12">
                    <input
                      type="checkbox"
                      onChange={handleToggle}
                      // show toggle image based on localstorage theme
                      checked={theme === "light" ? false : true}
                    />
                    Dark
                  </label>
                </button>
              </li>
            )}
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;