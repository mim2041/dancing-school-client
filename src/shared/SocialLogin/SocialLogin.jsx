import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login successfully",
                    showConfirmButton: false,
                    timer: 1000,
                  });

                const userInfo = {
                  name: loggedUser.displayName,
                  email: loggedUser.email,
                  photo: loggedUser.photoURL,

                  role: "student",
                };
                fetch(`http://localhost:5000/users`, {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(userInfo),
                })
                  .then((res) => res.json())
                  .then(() => {
                    navigate(from, { replace: true });
                  });

            })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline text-green-500"><FaGoogle></FaGoogle></button>
            </div>
        </div>
    );
};

export default SocialLogin;