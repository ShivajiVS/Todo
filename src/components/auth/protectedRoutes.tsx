import { getUser } from "@/lib/localstorage";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  const user = getUser();
  return user ? <Navigate to="/account" /> : <Outlet />;
};

export default ProtectedRoutes;
