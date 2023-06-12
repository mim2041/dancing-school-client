import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import signupImg from "../../assets/images/signup.png";
import { AuthContext } from "../../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  <Toaster></Toaster>;
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("new user", data);

    // check passwords
    if (data.password !== data.confirm) {
      setError("Passwords do not match");
      return;
    }

    // create new user with email and password
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
         const userInfo = {
           name: data.name,
           email: data.email,
           photo: data.photoURL,
           
           role: "student",
         };
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            fetch("https://dancing-school-server.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log("save", data);
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully",
                  showConfirmButton: false,
                  timer: 1000,
                });
                navigate("/");
              });
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="pt-28 bg-green-200">
      <h1 className="text-4xl font-bold text-center mb-4 lg:mt-12">
        Sign Up Now
      </h1>
      <div className="hero min-h-screen">
        <div
          className="hero-content flex-col lg:flex-row justify-between lg:gap-12"
        >
          <div className="w-full">
            <img src={signupImg} className="w-3/4 mx-auto" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm lg:max-w-lg shadow-2xl bg-base-100 mt-8">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  {...register("name")}
                  className="input input-bordered"
                  required
                />
              </div>
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

              <div className="lg:flex">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" {...register("password", { required: true,
                                 minLength: 6,
                                 pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z].*[a-z]).{8}$/
                                 })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                            
                            {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one uppercase latter and one special character</span>}
                </div>

                <div className="form-control lg:ml-4">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="retype password"
                    {...register("confirm")}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              {/* <p className="text-danger">{error}</p> */}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  {...register("photoURL")}
                  className="input input-bordered"
                />
                {/* <input
                  type="file"
                  className="file-input file-input-bordered w-full"
                  required
                /> */}
              </div>

              <div className="lg:flex justify-between gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Gender</span>
                  </label>
                  <select
                    {...register("gender")}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="phone"
                    {...register("phone")}
                    className="input input-bordered"
                  />
                </div>
              </div>
              <p className="text-[red]">{error}</p>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
                <p>
                    Already have an account?{" "}
                    <Link to="/login">
                    <span>Login</span>
                    </Link>
                </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;