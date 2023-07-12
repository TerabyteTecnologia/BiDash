import { Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "../layouts/DefaultLayout/index";
import { Login } from "../pages/Auth/Login";
import { Home } from "../pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/payments" element={<Home />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}