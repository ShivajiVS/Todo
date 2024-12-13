import { Navigate, Outlet } from "react-router";

const AuthRoute = () => {
  const isAuthenticated = false;
  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default AuthRoute;
