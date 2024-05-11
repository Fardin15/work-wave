import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto text-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to="/login" state={location.pathname} replace={true}></Navigate>
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
