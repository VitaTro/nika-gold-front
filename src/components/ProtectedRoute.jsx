import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/auth/login/admin" />;
  }

  // Перевірка ролі з обробкою помилок
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    console.log("Decoded Payload:", payload);

    if (payload.role !== "admin") {
      console.warn("Access denied: User is not an admin.");
      return <Navigate to="/" />;
    }
  } catch (error) {
    console.error("Invalid token format:", error);
    return <Navigate to="/auth/login/admin" />;
  }

  return children;
};

export default ProtectedRoute;
