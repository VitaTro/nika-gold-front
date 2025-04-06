import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { isLoggedIn, userRole } = useSelector((state) => state.auth);

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />; // Перенаправлення на логін
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/" />; // Перенаправлення на головну сторінку
  }

  return children; // Якщо все добре, рендеримо дочірній компонент
};

export default ProtectedRoute;
