import { useEffect, useState } from "react";
import InstructorClass from "./InstructorClass";


const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setInstructors(data);
            })
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 bg-green-200 sm:pb-12 lg:p-12">
            {
                instructors.map(singleInstructor => <InstructorClass
                    key={singleInstructor._id}
                    singleInstructor={singleInstructor}
                ></InstructorClass>)
            }
        </div>
    );
};

export default Instructors;