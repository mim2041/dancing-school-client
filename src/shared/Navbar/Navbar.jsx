import { Link } from "react-router-dom";
import logo1 from '../../assets/images/logo1.jpg'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user?.displayName);
    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/dashboard/mycart'>
          <button className="btn gap-2">
            <FaShoppingCart/>
            <div className="badge badge-secondary">+0</div>
          </button>
        </Link></li>
        {
            user ? <>
            <li><span>{user?.displayName}</span></li>
            <li><button onClick={handleLogOut} className="">Log Out</button></li>
            </> : <li><Link to="/login">Login</Link></li>
        }
                    
    </>

    return (
        <div className="">
            <div className="navbar bg-green-100 py-4 lg:justify-between fixed z-10 max-w-screen-xl bg-opacity-30">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navItems}
                </ul>
                </div>
                <div>
                    <img src={logo1} width={"50px"} className="mx-auto rounded-lg" alt="" />
                    <a className="btn btn-ghost normal-case lg:text-xl">Dancing School</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navItems}
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Navbar;