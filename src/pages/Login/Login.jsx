import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import loginImg from "../../assets/images/login.png";
import { Form, Link } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";
import { BiHide } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";


const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn } = useContext(AuthContext);

  
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }
  
  const onSubmit = (data) => {
    console.log(data);


    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(errors);


  return (
    <div className="pt-28 bg-green-200">
      <h1 className="text-4xl font-bold text-center mb-4 lg:mt-12">
        Sign Up Now
      </h1>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row justify-between lg:gap-12">
          <div className="w-full">
            <img src={loginImg} width={"500px"} alt="" />
          </div>
          <div
            className="card flex-shrink-0 w-full max-w-sm lg:max-w-md shadow-2xl bg-base-100 mt-8"
          >
            <form
            onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email")}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register("password")}
                  placeholder="password"
                  className="input input-bordered relative"
                  required 
                />
                <button className="absolute right-10 top-44" onClick={handleShowPassword} type="button">
                  { showPassword ? <BiHide/> : <BsFillEyeFill/>}
                </button>
              </div>

              <p className="text-danger">{error}</p>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>

              <p>
                New to Dancing School?{" "}
                <Link to="/signup">Create an Account</Link>
              </p>
            </form>
              <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
