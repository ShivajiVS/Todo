import { getAuthUser } from "@/lib/localstorage";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  const user = getAuthUser();
  return user ? <Navigate to="/todos" /> : <Outlet />;
};

export default ProtectedRoutes;
