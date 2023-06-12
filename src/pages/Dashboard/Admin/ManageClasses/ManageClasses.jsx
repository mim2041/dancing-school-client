import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { useEffect } from "react";
import axios from "axios";
const ManageClasses= () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/classes`;

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get(url).then((data) => setClasses(data.data));
  }, []);
 
  const handleMakeUser = (id) => {
    fetch(`https://ju-book-express-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Usersuccessful.");
          refetch();
        }
      });
  };

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this sellers?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/users/admin/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = buyers.filter((seller) => seller._id !== id);
            setBuyers(remaining);
            alert("User deleted successfully");
          }
        });
    }
  };
  return (
    <div className="">
      {/* <div className="flex items-center justify-between">
        <h3 className="text-3xl mb-5">UserPanel</h3>
        <Link to="addNewUser">
          <img
            src="https://cdn.pixabay.com/photo/2014/04/02/10/41/button-304224_1280.png"
            width="30px"
            alt=""
          />
        </Link>
      </div> */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Available Price</th>
              <th>Status</th>
              {/* <th>Advertisement</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes &&
              classes?.map((cls, i) => (
                <tr key={cls._id}>
                  <th>{i + 1}</th>
                  <td>
                    {" "}
                    <img
                      src={cls.photo}
                      alt=""
                      width="50px"
                      height=""
                      className=""
                    />{" "}
                  </td>
                  <td>{cls.class_name}</td>
                  <td>{cls.instructor}</td>
                  <td>{cls.email}</td>
                  <td>{cls.no_of_classes}</td>
                  <td>0147</td>
                  <td>pending</td>
                  <td className="flex">
                    <button className="btn btn-warning btn-sm">Approve</button>
                    <button className="btn btn-warning btn-sm">Deny</button>
                    <button className="btn btn-warning btn-sm">
                      send feedback
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
