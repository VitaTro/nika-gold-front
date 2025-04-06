import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/auth/login/admin" />;
  }

  // Додайте перевірку ролі, якщо потрібно
  const payload = JSON.parse(atob(token.split(".")[1]));
  if (payload.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
