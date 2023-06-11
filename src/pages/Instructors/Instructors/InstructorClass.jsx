

const InstructorClass = ({singleInstructor}) => {
    const { instructor, instructor_photo, email, no_of_classes, name_of_classes} = singleInstructor;
    return (
            <div className="card w-80 mx-auto md:w-96 bg-base-100 shadow-xl mt-24">
                <figure><img src={instructor_photo} className="w-3/4" alt="Shoes" /></figure>
                <div className="card-body bg-green-100">
                    <h2 className="card-title text-orange-500">{instructor}</h2>
                    <p>Email: {email}</p>
                    <p>No of classes taken: {no_of_classes}</p>
                    <p>Classes Taken by {instructor}</p>
                    <ul className="ml-8 list-disc text-orange-500">
                        {
                            name_of_classes.map((className, index) => <li key={index}>{className}</li>)
                        }
                    </ul>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Classes</button>
                    </div>
                </div>
            </div>
    );
};

export default InstructorClass;