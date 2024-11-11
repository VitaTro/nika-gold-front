import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { About } from "../pages/About";
import { ContactPage } from "../pages/ContactPage";
import { SignInPage } from "../pages/SignInPage";
import { WelcomePage } from "../pages/WelcomePage/WelcomePage";
import AuthFormLogin from "./AuthForm/AuthFormLogin";
import AuthFormRegister from "./AuthForm/AuthFormRegister";
import NavigationPersonal from "./Navigation/NavigationPersonal";
import NavigationRegister from "./Navigation/NavigationRegister";
import Products from "./Products";
import UploadImage from "./UploadImage/UploadImage";

const GoldProducts = () => <Products type="gold" />;
const SilverProducts = () => <Products type="silver" />;
const SetProducts = () => <Products type="set" />;
const BoxProducts = () => <Products type="box" />;

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
        />{" "}
        <Route
          path="/auth/admin/login"
          element={<AuthFormLogin isAdmin={true} />}
        />
        <Route path="/upload" element={<UploadImage />} />
        <Route path="/products" element={<Products type="allProducts" />} />
        <Route path="/products/gold" element={<GoldProducts />} />
        <Route path="/products/silver" element={<SilverProducts />} />
        <Route path="/products/set" element={<SetProducts />} />
        <Route path="/products/box" element={<BoxProducts />} />
      </Routes>
      {/* </Suspense> */}
    </div>
  );
};
