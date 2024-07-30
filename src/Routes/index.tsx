import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LayoutRoutes from "./LayoutRoutes";
import SignIn from "../Pages/Auth/SignIn";
import PrivateRoutes from "./PrivateRoutes";

export default function Routers() {
  const login = localStorage.getItem("logins");

  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        {login ? (
          <>
            <Route
              path={`${process.env.PUBLIC_URL}`}
              element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/`} />}
            />
            <Route path={`/`} element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/`} />} />
          </>
        ) : (
          ""
        )}
        <Route path={"/"} element={<PrivateRoutes />}>
          <Route path={`/*`} element={<LayoutRoutes />} />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/login`} element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
