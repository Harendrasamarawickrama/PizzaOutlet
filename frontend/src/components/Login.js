import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // email validation
    if (!emailRegex.test(username)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (username === "owner@gmail.com" && password === "o123") {
      onLogin("owner");
      alert("Login successfully");
    } else if (username === "customer@gmail.com" && password === "c456") {
      onLogin("customer");
      alert("Login successfully");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <label>Email</label>
      <input
        type="email"
        placeholder="Email Address"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input-field"
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
      />
      <button onClick={handleLogin} className="login-btn">
        Login
      </button>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default Login;
