import { getAuthUser } from "@/lib/localstorage";
import { Navigate, Outlet } from "react-router";

const AuthRoute = () => {
  const user = getAuthUser();
  return user ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default AuthRoute;
