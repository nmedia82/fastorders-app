import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LayoutRoutes from "./LayoutRoutes";
import SignIn from "../Pages/Auth/SignIn";
import PrivateRoutes from "./PrivateRoutes";
import VisualLogin2 from "../Components/Pages/Others/Authentication/VisualLogin2";
import ForgetPassword from "../Components/Pages/Others/Authentication/ForgetPassword";
import RegisterWizard from "../Components/Pages/Others/Authentication/RegisterWizard";
import { getCurrentUser } from "../services/auth";

export default function Routers() {
  const login = getCurrentUser();

  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        {login ? (
          <>
            <Route
              path={`${process.env.PUBLIC_URL}`}
              element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/`} />}
            />
            <Route
              path={`/`}
              element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/`} />}
            />
          </>
        ) : (
          ""
        )}
        <Route path={"/"} element={<PrivateRoutes />}>
          <Route path={`/*`} element={<LayoutRoutes />} />
        </Route>
        <Route
          path={`${process.env.PUBLIC_URL}/login`}
          element={<VisualLogin2 />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/register`}
          element={<RegisterWizard />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/auth/forget_password`}
          element={<ForgetPassword />}
        />
      </Routes>
    </BrowserRouter>
  );
}
