import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const ClassesCard = ({ cls, user }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const { _id, class_name, photo, available_seat, students_enrolled, price, instructor, email } = cls;

  const handleSelectClass = (id) => {
    if (!user) {
      alert("Please log in before selecting the class!!");
      return;
    }

    if (available_seat === 0) {
      alert("No available seats");
      return;
    }

    setSelectedClass(id);

    const updatedClass = {
      ...cls,
      available_seat: available_seat - 1,
      students_enrolled: students_enrolled + 1,
    };

    fetch(`http://localhost:5000/classes/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedClass),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(id);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div>
      <div className={available_seat === 0 ? "bg-red-200 card w-96 shadow-xl" : "card w-96 bg-base-100 shadow-xl"}>
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{class_name}</h2>
          <p>Instructor: <span>{instructor}</span></p>
          {available_seat === 0 ? (
            <p>No available seats</p>
          ) : (
            <p>Available Seats: {available_seat}</p>
          )}
          <p>Price: {price}/month</p>
          {students_enrolled > 0 && <p>Enrolled Students: {students_enrolled}</p>}
          <div className="card-actions justify-end">
            <button disabled={available_seat === 0 || !user} onClick={() => handleSelectClass(_id)} className="btn btn-primary">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
