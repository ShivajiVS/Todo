import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";

import ProtectedRoutes from "@/components/auth/protectedRoutes";
import AuthRoute from "@/components/auth/isAuthRoutes";

const Home = lazy(() => import("./pages/home"));
const Signin = lazy(() => import("./pages/sign-in"));
const SignUp = lazy(() => import("./pages/sign-up"));
const Account = lazy(() => import("./pages/account"));
const NotFound = lazy(() => import("./pages/not-found"));

export default function Routing() {
  return (
    <Routes>
      {/* Routes for unauthenticated users */}
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<div className="animate-pulse">Loading..</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Suspense fallback={<div className="animate-pulse">Loading..</div>}>
              <Signin />
            </Suspense>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Suspense fallback={<div className="animate-pulse">Loading..</div>}>
              <SignUp />{" "}
            </Suspense>
          }
        />
      </Route>

      {/* Routes for authenticated users */}
      <Route element={<AuthRoute />}>
        <Route
          path="/account"
          element={
            <Suspense fallback={<div className="animate-pulse">Loading..</div>}>
              <Account />{" "}
            </Suspense>
          }
        />
      </Route>

      {/* Catch-all for undefined routes */}
      <Route
        path="*"
        element={
          <Suspense fallback={<div className="animate-pulse">Loading..</div>}>
            <NotFound />{" "}
          </Suspense>
        }
      />
    </Routes>
  );
}
