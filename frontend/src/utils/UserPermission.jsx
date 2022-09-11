import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const UserPermission = () => {
  const access_token = localStorage.getItem("access_token");

  return jwt_decode(access_token).t_role_id === 2 ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default UserPermission;
