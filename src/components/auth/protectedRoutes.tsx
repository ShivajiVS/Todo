import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  const isAuthenticated = false;
  return isAuthenticated ? <Navigate to="/account" /> : <Outlet />;
};

export default ProtectedRoutes;
