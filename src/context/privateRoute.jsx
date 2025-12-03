import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./authContext.jsx";

const PrivateRoute = ({ element }) => {
  const { token, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default PrivateRoute;