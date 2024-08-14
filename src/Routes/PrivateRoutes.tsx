import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  const login = JSON.parse(localStorage.getItem("getorder_vendor")!) || false;
  return login !== false ? (
    <Outlet />
  ) : (
    <Navigate to={`${process.env.PUBLIC_URL}/login`} />
  );
}
