import { Navigate } from "react-router-dom";

const PrivatesRoutes = ({ children, role }) => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const roleUser = JSON.parse(sessionStorage.getItem("role"));

  if (!token) {
   return <Navigate to ="/"/>   ;
  } else {
    if (role === roleUser) {
      return children;
    } else {
      if (roleUser === "admin") {
        return <Navigate to ="/admin"/>
      } else {
        return <Navigate to ="/user"/>
      }
    }
  }
};

export default PrivatesRoutes;
