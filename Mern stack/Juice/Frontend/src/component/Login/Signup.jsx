import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminKey, setAdminKey] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    console.log(isAdmin)


    if (isAdmin && adminKey !== "JuiceVedaAdmin@2000") {
      alert("Invalid admin key. Please contact support.");
      
      return;
    }
    
    console.log({
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
      role: isAdmin ? "admin" : "user"
    });
     localStorage.setItem("Admin", isAdmin);
    try {
      await axios.post("https://projects-1-7puw.onrender.com/api/auth/signup", {
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
        role: isAdmin ? "admin" : "user"
      });

      alert("Signup successful");
      navigate("/login");

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
          <input type="checkbox" id="terms" checked={isAdmin} className="form-check-input" onChange={(e) => { setIsAdmin(e.target.checked) }} />
          <label className="mx-2 mb-3 form-check-label" htmlFor="terms">
            Register as Admin
          </label>
          {isAdmin && (
            <div className="mb-3 form-floating">
              <input
                type="text"
                className="form-control input-modern"
                placeholder="Admin Secret Key"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                required
              />
              <label>Admin Secret Key</label>
              <small className="text-center text-muted ">
                Only authorized admins should have this key.
              </small>
            </div>

          )}

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
