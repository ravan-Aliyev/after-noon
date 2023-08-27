import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const user = useSelector((state) => state.auth.isAuthenticated);

  return <>{user ? <Outlet /> : <Navigate to="/auth?mode=login" />}</>;
}

export default PrivateRoute;
