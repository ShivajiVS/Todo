import { getUser } from "@/lib/localstorage";
import { Navigate, Outlet } from "react-router";

const AuthRoute = () => {
  const user = getUser();
  return user ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default AuthRoute;
