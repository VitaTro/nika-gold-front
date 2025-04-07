import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { About } from "../pages/About";
import { ContactPage } from "../pages/ContactPage";
import HomePage from "../pages/HomePage/HomePage";
import MainPage from "../pages/MainPage/MainPage";
import { NotFoundPage } from "../pages/NotFountPage/NotFoundPage";
import { SignInPage } from "../pages/SignInPage";
import { setIsLoggedIn } from "../redux/auth/authSlice";
import { GlobalStyles } from "../redux/GlobalStyles";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import { Wrapper } from "./App.styled";
import AuthFormLogin from "./AuthForm/AuthFormLogin";
import AuthFormRegister from "./AuthForm/AuthFormRegister";
import Footer from "./Footer/Footer";
import "./i18n/i18n";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import ProtectedRoute from "./ProtectedRoute";
import TestRoutePage from "./TestRoutePage";
import UploadImage from "./UploadImage/UploadImage";
export const App = () => {
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const theme = {
    isDarkMode,
  };
  useEffect(() => {
    if (isAdmin) {
      navigate("/admin/dashboard");
    }
  }, [isAdmin, navigate]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setIsLoggedIn(true));
    }
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Wrapper>
          <main style={{ flex: 1, overflow: "auto" }}>
            {isLoggedIn && <Navigation />}
            <Routes>
              <Route index path="/" element={<HomePage />} />
              <Route
                path="/main"
                requiredRole="user"
                element={
                  <ProtectedRoute>
                    <MainPage />
                  </ProtectedRoute>
                }
              />
              <Route path="/test" element={<TestRoutePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/auth/login" element={<SignInPage />} />
              <Route
                path="/auth/register/user"
                element={<AuthFormRegister isAdmin={false} />}
              />
              <Route
                path="/auth/login"
                element={<AuthFormLogin isAdmin={false} />}
              />
              <Route
                path="/auth/register/admin"
                element={<AuthFormRegister isAdmin={true} />}
              />
              <Route
                path="/auth/login/admin"
                element={<AuthFormLogin isAdmin={true} />}
              />
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute requiredRole="admin">
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/upload" element={<UploadImage />} />
              <Route path="/products" element={<Products type="all" />} />
              {/* Додано маршрут для всіх продуктів */}
              <Route path="/products/gold" element={<Products type="gold" />} />
              <Route
                path="/products/silver"
                element={<Products type="silver" />}
              />
              <Route path="/products/set" element={<Products type="set" />} />
              <Route path="/products/box" element={<Products type="box" />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          {isLoggedIn && <Footer />}
        </Wrapper>
      </>
    </ThemeProvider>
  );
};
