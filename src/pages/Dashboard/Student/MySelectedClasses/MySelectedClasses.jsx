import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { useEffect } from "react";
import axios from "axios";
const MySelectedClasses = () => {
  const { user } = useContext(AuthContext);

  const url = `https://dancing-school-server.vercel.app/selectedClasses/${user?.email}`;

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get(url).then((data) => setClasses(data.data));
  }, []);

  const handleDelete = (id) => {
    console.log(id)
    const proceed = window.confirm(
      "Are you sure, you want to delete this class?"
    );
    if (proceed) {
      fetch(`https://dancing-school-server.vercel.app/selectedClasses/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = classes.filter((cls) => cls._id !== id);
            setClasses(remaining);
            alert("Class deleted successfully");
          }
        });
    }
  };

  const filterData = classes.filter(cls=>cls.paid===false)
  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>

              <th>Available Price</th>
              <th>Status</th>

              {/* <th>Advertisement</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filterData &&
              filterData?.map((cls, i) => (
                <tr key={cls.cls._id}>
                  <th>{i + 1}</th>
                  <td>
                    {" "}
                    <img
                      src={cls.cls.photo}
                      alt=""
                      width="50px"
                      height=""
                      className=""
                    />{" "}
                  </td>
                  <td>{cls.cls.class_name}</td>
                  <td>{cls.cls.instructor}</td>
                  <td>{cls.cls.email}</td>

                  <td>{cls.cls.price}</td>
                  <td>pending</td>

                  <td className="flex justify-between mt-5">
                    <button
                      onClick={() => handleDelete(cls._id)}
                      className="btn btn-warning btn-sm"
                    >
                      X
                    </button>
                    <button className="btn btn-warning btn-sm">Pay</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
