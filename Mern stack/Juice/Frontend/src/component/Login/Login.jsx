import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useContext } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  //const { clearCart, setCartFromDB } = useContext(CartContext);
  const { login } = useContext(AuthContext);
//  const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         Email,
//         Password
//       });

//       login(res.data.token);
//       navigate("/", { replace: true });
//     } catch (error) {
//       alert(error.response?.data?.message || "Login failed");
//     }
//   };

  const loginfunction = async () => {
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

    navigate("/home");  // go to home page
  } catch (error) {
    console.log("ERROR RESPONSE:", error.response?.data);
    alert(error.response?.data?.message || "Login Failed");
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
