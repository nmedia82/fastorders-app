import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoutes() {
    const login = JSON.parse(localStorage.getItem("login")!) || false;
    return login !== false ? <Outlet /> : <Navigate to={`${process.env.PUBLIC_URL}/login`} />
}
