import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AuthFormRegister = ({ isAdmin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminSecret, setAdminSecret] = useState(""); // Спеціальне поле для адміністратора
  const [isFirstAdmin, setIsFirstAdmin] = useState(false); // Стан для перевірки першого адміністратора

  // Перевірити, чи є перший адміністратор
  useEffect(() => {
    const checkFirstAdmin = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/auth/check-admin"
        );
        setIsFirstAdmin(response.data.isFirstAdmin);
      } catch (error) {
        console.error("Error checking admin", error);
      }
    };

    if (isAdmin) {
      checkFirstAdmin();
    }
  }, [isAdmin]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        isAdmin
          ? "http://localhost:5000/api/auth/register/admin"
          : "http://localhost:5000/api/auth/register/user",
        {
          username,
          email,
          password,
          adminSecret: isFirstAdmin ? adminSecret : undefined, // Передавати поле тільки якщо це перший адміністратор
        }
      );
      console.log("Registration successful", response.data);
    } catch (error) {
      console.error("Registration error", error);
    }
  };

  return (
    <div>
      <h2>{isAdmin ? "Admin Register" : "User Register"}</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {isAdmin && isFirstAdmin && (
          <div>
            <label>Admin Secret:</label>
            <input
              type="text"
              value={adminSecret}
              onChange={(e) => setAdminSecret(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit">Register</button>
      </form>
      <p>
        Already registered?{" "}
        <Link to={isAdmin ? "/auth/admin/login" : "/auth/login"}>
          Login here
        </Link>
      </p>
    </div>
  );
};

export default AuthFormRegister;
