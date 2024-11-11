import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthFormLogin = ({ isAdmin }) => {
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
    <div>
      <h2>{isAdmin ? "Admin Login" : "User Login"}</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to={isAdmin ? "/auth/admin/register" : "/auth/register"}>
          Register here
        </Link>
      </p>
    </div>
  );
};

export default AuthFormLogin;
