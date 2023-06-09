import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import signupImg from '../../assets/images/signup.png'
import { AuthContext } from "../../Providers/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import Swal from "sweetalert2";

const SignUp = () => {
    <Toaster></Toaster>
    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const {createUser} = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);

        // check passwords
        if(data.password !== data.confirm){
            setError('Passwords do not match');
            return
        }

        // create new user with email and password
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
                toast.error(error.message);
            })

        
    };
  console.log(errors);

    return (
        <div className="pt-28 bg-green-200">
            <h1 className="text-4xl font-bold text-center mb-4 lg:mt-12">Sign Up Now</h1>
            <div className="hero min-h-screen">
                <form onSubmit={handleSubmit(onSubmit)} className="hero-content flex-col lg:flex-row justify-between lg:gap-12">
                    <div className="w-full">
                        <img src={signupImg} className="w-3/4 mx-auto" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm lg:max-w-lg shadow-2xl bg-base-100 mt-8">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" {...register("name")} className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email")} className="input input-bordered" required/>
                            </div>

                            <div className="lg:flex">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password")}placeholder="password" className="input input-bordered" required/>
                            </div>

                            <div className="form-control lg:ml-4">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="retype password" {...register("confirm")} className="input input-bordered" required/>
                            </div>

                            </div>
                            <p className="text-danger">{error}</p>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="file" className="file-input file-input-bordered w-full" required/>
                            </div>

                            <div className="lg:flex justify-between gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Gender</span>
                                    </label>
                                    <select {...register("gender")} className="select select-bordered w-full max-w-xs">
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="text" placeholder="phone" {...register("phone")} className="input input-bordered" />
                                </div>
                                
                            </div>
                            
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up"/>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
            
        </div>
    );
};

export default SignUp;