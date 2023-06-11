import { useContext, useEffect } from "react";
import { useState } from "react";
import ClassesCard from "./ClassesCard";
import { AuthContext } from "../../../Providers/AuthProvider";

const Classes = () => {
    const { user } = useContext(AuthContext);

    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setClasses(data);
            });
    }, []);

    return (
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
    );
};

export default Classes;
