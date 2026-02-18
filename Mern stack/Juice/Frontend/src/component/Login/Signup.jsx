import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://projects-1-7puw.onrender.com/api/auth/signup", {
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
      });

      alert("Signup successful");
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="signup-bg d-flex justify-content-center align-items-center vh-100">
      <div className="p-4 signup-card">

        {/* Logo */}
        <div className="mb-4 text-center">
          <div className="logo-icon">🍹</div>
          <h2 className="fw-bold brand-text">Juice Veda</h2>
          <p className="text-muted small">Fresh • Healthy • Natural</p>
        </div>

        {/* Form */}
        <form onSubmit={submit}>

          <div className="mb-3 form-floating">
            <input
              type="text"
              className="form-control input-modern"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Full Name</label>
          </div>

          <div className="mb-3 form-floating">
            <input
              type="email"
              className="form-control input-modern"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email address</label>
          </div>

          <div className="mb-4 form-floating">
            <input
              type="password"
              className="form-control input-modern"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>

          <button className="btn btn-modern w-100">
            Create Account
          </button>
        </form>

        <p className="mt-4 text-center small">
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
