import axios from "axios";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/slices/authSlice";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

      // Збереження токена в локальному сховищі
      localStorage.setItem("token", response.data.token);

      // Збереження інформації про користувача в Redux
      dispatch(
        login({
          userName: response.data.userName || "Admin", // Додайте значення з API
          userPhoto: response.data.userPhoto || "", // Додайте фото, якщо воно є
        })
      );

      // Перенаправлення залежно від ролі
      navigate(isAdmin ? "/admin/dashboard" : "/");
      setSuccessMessage(t("login_success"));
    } catch (error) {
      setErrorMessage(t("login_error"));
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
