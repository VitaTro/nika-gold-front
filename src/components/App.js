import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { About } from "../pages/About";
import { ContactPage } from "../pages/ContactPage";
import { SignInPage } from "../pages/SignInPage";
import { WelcomePage } from "../pages/WelcomePage/WelcomePage";
import BoxProducts from "./AllProducts/BoxProduct/BoxProducts";
import GoldProducts from "./AllProducts/GoldProduct/GoldProducts";
import Products from "./AllProducts/Products/Products"; // Додамо компонент Products
import SetProducts from "./AllProducts/SetProduct/SetProducts";
import SilverProducts from "./AllProducts/SilverProduct/SilverProducts";
import AuthFormLogin from "./AuthForm/AuthFormLogin";
import AuthFormRegister from "./AuthForm/AuthFormRegister";
import NavigationPersonal from "./Navigation/NavigationPersonal";
import NavigationRegister from "./Navigation/NavigationRegister";
import UploadImage from "./UploadImage/UploadImage";
const Navigation = () => {
  const location = useLocation();
  if (
    location.pathname === "/" ||
    location.pathname === "/auth" ||
    location.pathname.startsWith("/auth")
  ) {
    return <NavigationRegister />;
  }
  return <NavigationPersonal />;
};

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route index path="/" element={<WelcomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<SignInPage />} />
        <Route
          path="/auth/register"
          element={<AuthFormRegister isAdmin={false} />}
        />
        <Route path="/auth/login" element={<AuthFormLogin isAdmin={false} />} />
        <Route
          path="/auth/admin/register"
          element={<AuthFormRegister isAdmin={true} />}
        />
        <Route
          path="/auth/admin/login"
          element={<AuthFormLogin isAdmin={true} />}
        />
        <Route path="/upload" element={<UploadImage />} />
        <Route path="/products" element={<Products />} />{" "}
        {/* Додано маршрут для всіх продуктів */}
        <Route path="/products/gold" element={<GoldProducts />} />
        <Route path="/products/silver" element={<SilverProducts />} />
        <Route path="/products/set" element={<SetProducts />} />
        <Route path="/products/box" element={<BoxProducts />} />
      </Routes>
    </div>
  );
};
