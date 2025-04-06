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
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        isAdmin
          ? "https://nika-gold-back-fe0ff35469d7.herokuapp.com/api/auth/login/admin"
          : "https://nika-gold-back-fe0ff35469d7.herokuapp.com/api/auth/login/user",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      setSuccessMessage("Login successful");
      setErrorMessage("");
      window.location.href = "/";
    } catch (error) {
      setErrorMessage("Login error");
      setSuccessMessage("");
    }
  };

  return (
    <ResponsiveContainer>
      <Header>{isAdmin ? t("admin_login") : t("user_login")}</Header>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

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
          <Link to={isAdmin ? "/auth/register/admin" : "/auth/register/user"}>
            {t("register_here")}
          </Link>
        </ItemForm>
      </AuthForm>
    </ResponsiveContainer>
  );
};

export default AuthFormLogin;
