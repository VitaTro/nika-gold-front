import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { About } from "../pages/About";
import { ContactPage } from "../pages/ContactPage";
import { SignInPage } from "../pages/SignInPage";
import { WelcomePage } from "../pages/WelcomePage/WelcomePage";
import { GlobalStyles } from "../redux/GlobalStyles";
import { Wrapper } from "./App.styled";
import AuthFormLogin from "./AuthForm/AuthFormLogin";
import AuthFormRegister from "./AuthForm/AuthFormRegister";
import Footer from "./Footer/Footer";
import "./i18n/i18n";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import TestRoutePage from "./TestRoutePage";
import UploadImage from "./UploadImage/UploadImage";
export const App = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const theme = {
    isDarkMode,
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Wrapper>
          <main style={{ flex: 1, overflow: "auto" }}>
            <Navigation />
            <Routes>
              <Route index path="/" element={<WelcomePage />} />
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
                path="/auth/admin/login"
                element={<AuthFormLogin isAdmin={true} />}
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
            </Routes>
          </main>
          <Footer />
        </Wrapper>
      </>
    </ThemeProvider>
  );
};
