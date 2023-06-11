import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useInstructor from "../../Hooks/useInstructor";
import Loading from "../../Pages/Shared/Loading/Loading";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isInstructor, isInstructorLoading] = useInstructor(user?.email);
  const location = useLocation();

  if (loading || isInstructorLoading) {
    return <Loading></Loading>;
  }

  if (user && isInstructor) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
