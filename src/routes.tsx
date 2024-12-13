import { Route, Routes } from "react-router";

import ProtectedRoutes from "@/components/auth/protectedRoutes";
import AuthRoute from "@/components/auth/isAuthRoutes";
import { Home, Signin, SignUp, Account, NotFound } from "./pages";

export default function Routing() {
  return (
    <Routes>
      {/* Routes for unauthenticated users */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>

      {/* Routes for authenticated users */}
      <Route element={<AuthRoute />}>
        <Route path="/account" element={<Account />} />
      </Route>

      {/* Catch-all for undefined routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
