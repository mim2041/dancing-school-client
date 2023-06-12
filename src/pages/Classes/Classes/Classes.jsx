import { useContext, useEffect } from "react";
import { useState } from "react";
import ClassesCard from "./ClassesCard";
import { AuthContext } from "../../../Providers/AuthProvider";
import Cover from "../../../others/Cover";
import classbg from '../../../assets/images/classbg.jpg';

const Classes = () => {
    const { user } = useContext(AuthContext);

    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setClasses(data);
            });
    }, []);

    return (
        <div>
            <Cover
                img={classbg}
                title={"Our Classes"}
                subtitle={"Our Dance classes serve various purposes that contribute to the overall development and enrichment of our kids. These classes aim to provide fitness and physical conditioning, helping students improve their strength, flexibility, stamina, and coordination. We also focus on the development of proper technique specific to each dance style, refining body alignment, footwork, and execution of movements. "}
            ></Cover>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 bg-green-200 sm:pb-12 lg:p-12">
            {
                classes.map(cls => (
                    <ClassesCard
                        key={cls._id}
                        cls={cls}
                        user={user}
                    ></ClassesCard>
                ))
            }
        </div>
        </div>
    );
};

export default Classes;
