import { useEffect, useState } from "react";

const useInstructor = (email) => {
  const [isInstructor, setIsInstructor] = useState(false);
  const [isInstructorLoading, setIsInstructorLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://dancing-school-server.vercel.app/users/instructor/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsInstructor(data.isInstructor);
          setIsInstructorLoading(false);
        });
    }
  }, [email]);
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
