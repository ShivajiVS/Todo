import { Navigate, Outlet } from "react-router";

const AuthRoute = () => {
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default AuthRoute;
