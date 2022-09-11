import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const AgencyPermission = () => {
  const access_token = localStorage.getItem("access_token");

  return jwt_decode(access_token).t_role_id === 1 ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default AgencyPermission;
