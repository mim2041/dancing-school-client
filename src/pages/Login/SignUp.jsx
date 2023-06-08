import { useState } from "react";
import { useForm } from "react-hook-form";
import signupImg from '../../assets/images/signup.png'


const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <div className="pt-28 bg-green-200">
            <h1 className="text-4xl font-bold text-center mb-4 lg:mt-12">Sign Up Now</h1>
            <div className="hero min-h-screen">
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} className="hero-content flex-col lg:flex-row justify-between lg:gap-12">
                    <div className="w-full">
                        <img src={signupImg} className="w-3/4 mx-auto" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm lg:max-w-lg shadow-2xl bg-base-100 mt-8">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" {...register("name")} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email")} className="input input-bordered" />
                            </div>

                            <div className="lg:flex">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password")}placeholder="password" className="input input-bordered" />
                            </div>

                            <div className="form-control lg:ml-4">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" placeholder="password" {...register("confirm")} className="input input-bordered" />
                            </div>

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="file" className="file-input file-input-bordered w-full" />
                            </div>

                            <div className="lg:flex justify-between gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Gender</span>
                                    </label>
                                    <select className="select select-bordered w-full max-w-xs">
                                        <option disabled selected>Select</option>
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
            {/* <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <input {...register("name")} type="text" placeholder="First name" />
                
                <input {...register("email")} type="email" placeholder="First name" />
                
                <input {...register("password")} type="text" placeholder="First name" />
                
                <input {...register("confirm")} type="text" placeholder="First name" />

                <select {...register("gender", { required: true })}>
                    <option value="">Select...</option>
                    <option value="A">Male</option>
                    <option value="B">Female</option>
                </select>
                
                <textarea {...register("aboutYou")} placeholder="About you" />
                <p>{data}</p>
                <input type="submit" />
            </form> */}
        </div>
    );
};

export default SignUp;