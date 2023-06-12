import { useContext } from "react";
import { useForm } from "react-hook-form";
import addClassImg from '../../../../assets/images/addclass.jfif';
import { useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Providers/AuthProvider";


const AddAClass = () => {
    const {user} = useContext(AuthContext);
    const [newClass, setNewClass] = useState([]);

    const { register, handleSubmit, formState: { errors } } = useForm();
    // const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=img_hosting_token`;
  
    const onSubmit = data => {
        console.log(data)
    
        fetch('https://dancing-school-server.vercel.app/classes',{
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setNewClass(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Yes'
                      })
                }
            })


  };

  console.log(errors);
    return (
        <div className="pt-24">
            <div className="w-full p-10">
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Class Name Field */}
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name</span>
                    </label>
                    <input type="text" placeholder="Class Name"  {...register("class_name", {required: true, maxLength: 80})} className="input input-bordered w-full " />
                    
                </div>

                {/* image Field */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Item Image</span>
                    </label>
                    <input type="file" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} className="file-input file-input-bordered w-full " />
                </div>

                {/* Instructor Name and Image field */}
                <div>
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} {...register("instructor_name", {required: true, maxLength: 80})} className="input input-bordered w-full " readOnly/>
                        
                    </div>
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email}  {...register("email", {required: true, maxLength: 80})} className="input input-bordered w-full " readOnly/>
                        
                    </div>
                </div>
                <div className="flex">
                <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seats</span>
                        </label>
                        <input type="text" placeholder="Type here"  {...register("available_seat", {required: true, minLength: 6, maxLength: 12})}  className="input input-bordered w-full " />
                        
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input type="text" placeholder="Type here"  {...register("price", {required: true, minLength: 6, maxLength: 12})}  className="input input-bordered w-full " />
                        
                    </div>
                </div>
                    
                <input className="btn btn-block mt-8" type="submit" value="Add Class"/>
            </form>
        </div>
        </div>
    );
};

export default AddAClass;