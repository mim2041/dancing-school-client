
const InstructorClass = ({ singleInstructor }) => {
  const { name, photo, email } = singleInstructor;
  console.log(singleInstructor);

  return (
    <div className="card w-80 mx-auto md:w-96 bg-base-100 shadow-xl mt-24">
      <figure>
        <img src={photo} className="w-3/4 h-[250px]" alt="instructor" />
      </figure>
      <div className="card-body bg-green-100">
        <h2 className="card-title text-orange-500">{name}</h2>
        <p>Email: {email}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Classes</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorClass;
