import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import loginImg from '../../assets/images/login.png';

const Login = () => {
    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const {singIn, } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);

        singIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
    };
    console.log(errors);

    return (
        <div>
            <div className="hero min-h-screen">
                <form onSubmit={handleSubmit(onSubmit)} className="hero-content flex-col lg:flex-row justify-between lg:gap-12">
                    <div className="w-full">
                        <img src={loginImg} className="w-3/4 mx-auto" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm lg:max-w-lg shadow-2xl bg-base-100 mt-8">
                        <div className="card-body">
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email")} className="input input-bordered" required/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password")}placeholder="password" className="input input-bordered" required/>
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

export default Login;