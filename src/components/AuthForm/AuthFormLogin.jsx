import axios from "axios";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  AuthForm,
  ButtonForm,
  Header,
  InputForm,
  ItemForm,
  LabelForm,
  ResponsiveContainer,
} from "./AuthFormRegister.styled";
const AuthFormLogin = ({ isAdmin }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        isAdmin
          ? "http://localhost:5000/api/auth/admin/login"
          : "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log("Login successful", response.data);
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <ResponsiveContainer>
      <Header>{isAdmin ? t("admin_login") : t("user_login")}</Header>

      <AuthForm onSubmit={handleLogin}>
        <div>
          <LabelForm>{t("email_label")}</LabelForm>

          <InputForm
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <LabelForm>{t("password_label")}</LabelForm>

          <InputForm
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <ButtonForm type="submit">{t("login_button")}</ButtonForm>
        <ItemForm>
          {t("no_account")}{" "}
          <Link to={isAdmin ? "/auth/admin/register" : "/auth/register"}>
            {t("register_here")}
          </Link>
        </ItemForm>
      </AuthForm>
    </ResponsiveContainer>
  );
};

export default AuthFormLogin;
