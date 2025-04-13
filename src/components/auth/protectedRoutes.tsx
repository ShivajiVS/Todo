// import { getAuthUser } from "@/lib/localstorage";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  // const user = getAuthUser();
  const user = true;
  return user ? <Navigate to="/todos" /> : <Outlet />;
};

export default ProtectedRoutes;
