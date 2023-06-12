import { useEffect, useState } from "react";
import InstructorClass from "./InstructorClass";
import Cover from "../../../others/Cover";
import instructorbg from '../../../assets/images/instructorbg.jpg';


const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('https://dancing-school-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setInstructors(data);
            })
    },[])
    return (
        <div>
            <Cover img={instructorbg} title={"Our Instructors"}
             subtitle={"We provide the best instructors for the best outcome. Our Dancing instructors are professionals who teach and guide our students in various dance forms. They possess expertise in specific dance styles and have the necessary skills to instruct and demonstrate dance techniques to their students. "}
            ></Cover>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 bg-green-200 sm:pb-12 lg:p-12">
            {
                instructors.map(singleInstructor => <InstructorClass
                    key={singleInstructor._id}
                    singleInstructor={singleInstructor}
                ></InstructorClass>)
            }
        </div>
        </div>
    );
};

export default Instructors;