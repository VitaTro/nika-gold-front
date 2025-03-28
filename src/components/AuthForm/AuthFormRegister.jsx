import axios from "axios";
import React, { useEffect, useState } from "react";
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
const AuthFormRegister = ({ isAdmin }) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminSecret, setAdminSecret] = useState(""); // Спеціальне поле для адміністратора
  const [isFirstAdmin, setIsFirstAdmin] = useState(false); // Стан для перевірки першого адміністратора
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // Перевірити, чи є перший адміністратор
  useEffect(() => {
    const checkFirstAdmin = async () => {
      try {
        const response = await axios.get(
          "https://back-fcdq.onrender.com/api/auth/check-admin"
        );
        setIsFirstAdmin(response.data.isFirstAdmin);
      } catch (error) {
        setErrorMessage("Failed to check admin status.");
      }
    };
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        isAdmin
          ? "https://back-fcdq.onrender.com/api/auth/register/admin"
          : "https://back-fcdq.onrender.com/api/auth/register/user",
        {
          username,
          email,
          password,
          adminSecret: isFirstAdmin ? adminSecret : undefined, // Передавати поле тільки якщо це перший адміністратор
        }
      );
      setSuccessMessage("Registration successful!");
    } catch (error) {
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  return (
    <ResponsiveContainer>
      <Header>{isAdmin ? t("admin_register") : t("user_register")}</Header>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <AuthForm onSubmit={handleRegister}>
        <div>
          <LabelForm>{t("username_label")}</LabelForm>

          <InputForm
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
        {isAdmin && isFirstAdmin && (
          <div>
            <label>{t("admin_secret_label")}</label>
            <input
              type="text"
              value={adminSecret}
              onChange={(e) => setAdminSecret(e.target.value)}
              required
            />
          </div>
        )}
        <ButtonForm type="submit">{t("register_button")}</ButtonForm>
        <ItemForm>
          {t("already_registered")}{" "}
          <Link to={isAdmin ? "/auth/admin/login" : "/auth/login"}>
            {t("login_here")}
          </Link>
        </ItemForm>
      </AuthForm>
    </ResponsiveContainer>
  );
};

export default AuthFormRegister;
