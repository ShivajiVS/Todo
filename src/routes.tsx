import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";

import ProtectedRoutes from "@/components/auth/protectedRoutes";
import AuthRoute from "@/components/auth/isAuthRoutes";
import Todo from "./pages/todo";
import { Loading } from "./components/loading";

const Home = lazy(() => import("./pages/home"));
const Signin = lazy(() => import("./pages/sign-in"));
const SignUp = lazy(() => import("./pages/sign-up"));
const Account = lazy(() => import("./pages/account"));
const NotFound = lazy(() => import("./pages/not-found"));
const Todos = lazy(() => import("./pages/todos"));

export default function Routing() {
  return (
    <Routes>
      {/* Routes for unauthenticated users */}
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Suspense fallback={<Loading />}>
              <Signin />
            </Suspense>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Suspense fallback={<Loading />}>
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
            <Suspense fallback={<Loading />}>
              <Account />{" "}
            </Suspense>
          }
        />
        <Route
          path="/todos"
          element={
            <Suspense fallback={<Loading />}>
              <Todos />{" "}
            </Suspense>
          }
        />
        <Route
          path="/todo/:id"
          element={
            <Suspense fallback={<Loading />}>
              <Todo />
            </Suspense>
          }
        />
      </Route>

      {/* Catch-all for undefined routes */}
      <Route
        path="*"
        element={
          <Suspense fallback={<Loading />}>
            <NotFound />{" "}
          </Suspense>
        }
      />
    </Routes>
  );
}
