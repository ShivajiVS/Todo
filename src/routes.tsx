import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Signin from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import NotFound from "./pages/not-found";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
