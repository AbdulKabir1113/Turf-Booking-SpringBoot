import { Navigate } from "react-router-dom";

const ProtectedUserRoute = ({ children }) => {

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {

    return <Navigate to="/login" replace />;

  }

  if (user.role !== "USER") {

    return <Navigate to="/owner/dashboard" replace />;

  }

  return children;

};

export default ProtectedUserRoute;