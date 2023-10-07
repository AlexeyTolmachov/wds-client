import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import "./AuthForm.css";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const validateCredentials = () => {
    return username !== "" && password !== "";
  };

  const handleLogin = async () => {
    if (!validateCredentials()) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          username,
          password,
        }
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log("Неправильне ім'я користувача або пароль.");
      } else {
        console.error("An error occurred during authorization:", error);
      }
    }
  };
  const handleRegister = async () => {
    if (username === "" || password === "") {
      // Display an error message to the user
      return;
    }
    const response = await axios.post(
      "http://localhost:5000/api/admin/register",
      {
        username,
        password,
        role: "admin",
      }
    );

    if (response.status === 201) {
      // Clear the input fields
      setUsername("");
      setPassword("");
      console.log("Registered successfully!");
    } else {
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/admin" />;
  }

  return (
    <div className="form-wrap">
      <div className="logo-input">
        <img className="img-logo" src="/Frame 1.svg" alt="logo" />
      </div>

      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button className="bInput" onClick={handleLogin}>
        Login
      </button>
      <button className="bInput" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default AuthForm;
