import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // simulate async API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    // ===== ADMIN LOGIN =====
    if (email === "admin@gmail.com" && password === "admin") {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ email: "admin", role: "ADMIN" })
      );
      navigate("/admin");
      window.location.reload();
      return;
    }

    // ===== NORMAL USER LOGIN =====
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    if (user.role === "DOCTOR") navigate("/doctor");
    else navigate("/patient");

    window.location.reload();
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <h2>Login</h2>

        <form className="auth-form" onSubmit={handleLogin}>
          
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="auth-btn">Login</button>
        </form>

        <p className="switch-auth">
          Don’t have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;