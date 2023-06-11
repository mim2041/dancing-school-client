import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const ClassesCard = ({cls, user}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null);
    
    const {_id, class_name, photo, available_seat, students_enrolled, price, instructor, email} = cls;

    const handleSelectClass = (id) => {
        if(!isLoggedIn){
            alert('Please log in before selecting the class!!')
        }
        setSelectedClass(id);
    }
    return (
        <div>
            <div className={(available_seat===0) ? 'bg-red-200 card w-96 shadow-xl' : 'card w-96 bg-base-100 shadow-xl'}>
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{class_name}</h2>
                <p>Instructor: <span>{instructor}</span></p>
                <p>Available Seats: {available_seat}</p>
                <p>Price: {price}/month</p>
                <div className="card-actions justify-end">
                <button disabled={available_seat === 0 || !user} onClick={() => handleSelectClass(_id)} className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ClassesCard;