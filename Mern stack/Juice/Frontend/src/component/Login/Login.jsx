import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  //const { clearCart, setCartFromDB } = useContext(CartContext);

  const loginfunction = async (event) => {
    event.preventDefault();

    try {
      // 🔐 LOGIN
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: Email,
          password: Password,
        }
      );

      const { token } = res.data;

      localStorage.setItem("token", token);

      console.log("LOGIN RESPONSE:", res.data);

      // 🔥 IMPORTANT FIX
      window.location.reload();   // <-- THIS LINE FIXES EVERYTHING

      // navigate("/home"); ❌ REMOVE THIS
    } catch (error) {
      console.log("FULL ERROR:", error);
      console.log("RESPONSE:", error.response);
      console.log("DATA:", error.response?.data);
      alert(
        error.response?.data?.message || "Login Failed"
      );
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
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={Password}
              className="form-control rounded-pill"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="py-2 btn btn-orange w-100 rounded-pill"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center small">
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
