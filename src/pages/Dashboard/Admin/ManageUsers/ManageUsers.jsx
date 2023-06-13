import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { useEffect } from "react";
import axios from "axios";
const ManageUsers = () => {
  const { user } = useContext(AuthContext);

  const url = `https://dancing-school-server.vercel.app/users`;

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url, {});
      const data = await res.json();
      return data;
    },
  });

  const handleMakeInstructor = (id) => {
    fetch(`https://dancing-school-server.vercel.app/users/instructor/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Instructor successful.");
          refetch();
        }
      });
  };

  const handleMakeAdmin = (id) => {
    fetch(`https://dancing-school-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Admin successful.");
          refetch();
        }
      });
  };
  //   const { data: allUser = [], refetch } = useQuery({
  //     queryKey: ["allUser", user?.email],
  //     queryFn: async () => {
  //       const res = await fetch(url, {
  //         headers: {
  //           authorization: `bearer ${localStorage.getItem("accessToken")}`,
  //         },
  //       });
  //       const data = await res.json();
  //       return data;
  //     },
  //   });
  //   console.log(allAUser);
  //   const [user, setuser] = useState(allUser);
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
      fetch(`https://dancing-school-server.vercel.app/users/admin/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = user.filter((seller) => seller._id !== id);
            setuser(remaining);
            alert("User deleted successfully");
          }
        });
    }
  };
  return (
    <div className="mx-20">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl mb-5">UserPanel</h3>
        
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Status</th>
              {/* <th>Advertisement</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users?.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>
                    {" "}
                    <img
                      src={user.photo}
                      alt=""
                      width="50px"
                      height=""
                      className=""
                    />{" "}
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>pending</td>
                  <td className="flex justify-between items-center">
                    <div className="">
                      {user?.role !== "admin" ? (
                        <button
                          onClick={() => handleMakeAdmin(user._id)}
                          className="btn btn-xs btn-secondary"
                        >
                          Make Admin
                        </button>
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user._id)}
                          className="btn btn-xs btn-secondary"
                          disabled
                        >
                          Make Admin
                        </button>
                      )}
                    </div>
                    <div className="">
                      {user?.role !== "instructor" ? (
                        <button
                          onClick={() => handleMakeInstructor(user._id)}
                          className="btn btn-xs btn-primary"
                        >
                          Make Instructor
                        </button>
                      ) : (
                        <button
                          onClick={() => handleMakeInstructor(user._id)}
                          className="btn btn-xs btn-primary"
                          disabled
                        >
                          Make Instructor
                        </button>
                      )}
                    </div>
                  </td>

                  {/* <td> */}
                  {/* <button className="btn btn-primary btn-sm">Advertised</button> */}
                  {/* {
                                    booking.price && !booking.paid && <Link
                                        to={`/dashboard/payment/${booking._id}`}
                                    >
                                        <button
                                            className='btn btn-primary btn-sm'
                                        >Pay</button>
                                    </Link>
                                }
                                {
                                    booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                                } */}
                  {/* </td> */}
                  {/* <td>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-warning btn-sm"
                    >
                      Delete
                    </button>
                  </td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
