import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Loading from "../../shared/Loading/Loading";
import useInstructor from "../../Hooks/useInstructor";
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
