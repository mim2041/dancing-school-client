import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { data } from "autoprefixer";
import { toast } from "react-hot-toast";

const ClassesCard = ({ cls }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const { user } = useContext(AuthContext);
  const { _id, class_name, photo, available_seat, price, instructor } = cls;

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`https://dancing-school-server.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user?.email]);

  console.log(userInfo, "00000");
  const handleSelectClass = (id) => {
    if (!user) {
      alert("Please log in before selecting the class!!");
      return;
    }

    const classInfo = {
      id,
      cls,
      studentEmail: user?.email,
      paid:false
    };
    fetch(`https://dancing-school-server.vercel.app/selectedClasses`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Select class successfully");
      });
  };

 
  return (
    <div>
      <div
        className={
          available_seat === 0
            ? "bg-red-200 card w-96 shadow-xl"
            : "card w-96 bg-base-100 shadow-xl"
        }
      >
        <figure>
          <img src={photo} className="h-[250px]" alt="Shoes" />
        </figure>
        <div className={`card-body ${available_seat == 0 && "bg-[red]"}`}>
          <h2 className="card-title">{class_name}</h2>
          <p>
            Instructor: <span>{instructor}</span>
          </p>
          <p>Available Seats: {available_seat}</p>
          <p>Price: {price}/month</p>
          <div className="card-actions justify-end">
            {available_seat == 0 ? (
              <button
                onClick={() => handleSelectClass(_id)}
                className="btn btn-primary"
                disabled={true}
              >
                Select
              </button>
            ) : (
              <button
                onClick={() => handleSelectClass(_id)}
                className="btn btn-primary"
              >
                Select
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
