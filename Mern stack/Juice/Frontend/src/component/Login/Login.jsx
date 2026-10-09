
import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);

  const { login } = useContext(AuthContext);

  const loginfunction = async (event) => {
    event.preventDefault();

    if (!Email || !Password) {
      alert("Email and Password are required");
      return;
    }

    try {
      const res = await axios.post(
        "https://projects-1-7puw.onrender.com/api/auth/login",
        {
          email: Email.trim(),
          password: Password.trim(),
        }
      );

      login(res.data.token);
      localStorage.setItem("token", res.data.token);

      alert("Login successful!");

      const roledata = localStorage.getItem("Admin");

      if (roledata === "true") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log("LOGIN ERROR:", error.response?.data);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    if (!credentialResponse.credential) {
      alert("Google sign-in did not return a credential. Please try again.");
      return;
    }

    setGoogleLoading(true);

    try {
      const res = await axios.post(
        "https://projects-1-7puw.onrender.com/api/auth/google",
        {
          credential: credentialResponse.credential,
        }
      );

      if (!res.data.token) {
        throw new Error("The server did not return an authentication token.");
      }

      login(res.data.token);
      localStorage.setItem("token", res.data.token);

      const roledata = localStorage.getItem("Admin");

      if (roledata === "true") {
        navigate("/dashboard", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error("GOOGLE LOGIN ERROR:", error.response?.data || error);
      alert(
        error.response?.data?.message ||
          "Google login failed. Please try again."
      );
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="px-3 juice-bg d-flex align-items-center justify-content-center flex-column vh-100">
      <div className="mb-4 text-center">
        <div className="juice-icon">🍹</div>
        <h2 className="fw-bold text-orange">Juice Veda</h2>
        <p className="text-muted small">Fresh • Healthy • Natural</p>
      </div>

      <div className="p-4 shadow-lg card juice-card">
        <form onSubmit={loginfunction}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              value={Email}
              className="form-control rounded-pill"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={Password}
              className="form-control rounded-pill"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          <button
            type="submit"
            className="py-2 btn btn-orange w-100 rounded-pill"
          >
            Login
          </button>
        </form>

        <div className="gap-2 my-3 d-flex align-items-center">
          <hr className="flex-grow-1" />
          <span className="text-muted small">OR</span>
          <hr className="flex-grow-1" />
        </div>

        <div className="d-flex justify-content-center">
          {googleLoading ? (
            <button className="btn btn-light w-100" disabled>
              Signing in with Google...
            </button>
          ) : (
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => alert("Google sign-in was unsuccessful.")}
              text="continue_with"
              shape="pill"
              theme="outline"
              width="280"
            />
          )}
        </div>

        <p className="mt-4 mb-0 text-center small">
          New here?
          <span
            className="mx-2 text-orange fw-semibold"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/signup")}
          >
            Create account
          </span>
        </p>
      </div>
    </div>
  );
}
