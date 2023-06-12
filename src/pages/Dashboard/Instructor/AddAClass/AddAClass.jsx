import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const AddAClass = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=img_hosting_token`;
  const imageHostKey = import.meta.REACT_APP_imgbb_key;
  console.log("imageHostKey", imageHostKey);
  const navigate=useNavigate()
  const onSubmit = (data) => {
    console.log(data);
    const image = data.class_image[0];

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=89cc63ae1dbb327bb7cace69ee36c9c1`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const classInfo = {
            photo: imgData.data.url,
            class_name: data.class_name,
            instructor: data.instructor_name,
            instructor_photo: user?.photoURL,
            email: data.email,
            available_seat: data.available_seat,
            price: data.price,
            status: "pending",
            no_of_enrolled_student: 0,
          };

          fetch("http://localhost:5000/instructor/addClass", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(classInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class added successfully",
                showConfirmButton: false,
                timer: 1000,
              });
              navigate("/dashboard/myClasses");
            });
        }
      });
  };

  console.log(errors);
  return (
    <div className="">
      <div className="w-full p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Class Name Field */}
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text font-semibold">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              {...register("class_name", { required: true, maxLength: 80 })}
              className="input input-bordered w-full "
            />
          </div>

          {/* image Field */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <input
              type="file"
              {...register("class_image", { required: true })}
              className="file-input file-input-bordered w-full "
            />
          </div>

          {/* Instructor Name and Image field */}
          <div>
            <div className="form-control w-full my-4">
              <label className="label">
                <span className="label-text font-semibold">
                  Instructor Name
                </span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                {...register("instructor_name", {
                  required: true,
                  maxLength: 80,
                })}
                className="input input-bordered w-full "
                readOnly
              />
            </div>
            <div className="form-control w-full my-4">
              <label className="label">
                <span className="label-text font-semibold">
                  Instructor Email
                </span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                {...register("email", { required: true })}
                className="input input-bordered w-full "
                readOnly
              />
            </div>
          </div>
          <div className="flex">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Available Seats
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                {...register("available_seat", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text font-semibold">Price</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                {...register("price", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
          </div>

          <input
            className="btn btn-block mt-8"
            type="submit"
            value="Add Class"
          />
        </form>
      </div>
    </div>
  );
};

export default AddAClass;
