import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./Login.css"; // reuse same CSS + font
import Signupanimation from "../Animation/Signupanimation"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import signupimg from "../../assets/Signupimg.png"

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/signup", {
      name,
      email,
      password
    });
    navigate("/login");
  };
  return (
    <div className="container-fluid vh-100 juice-bg">
      <div className="row h-100">

        {/* LEFT SIDE - REGISTER FORM */}
        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <div className="p-4 shadow-lg card juice-card w-100" style={{ maxWidth: "420px" }}>

            {/* Logo */}
            <div className="mb-4 text-center">
              <div className="juice-icon">🍊</div>
              <h2 className="fw-bold text-orange">Create Account</h2>
              <p className="text-muted small">Join Juice Veda today</p>
            </div>

            {/* Form */}
            <form onSubmit={submit}>
              <h2>Signup</h2>
              <input placeholder="Name" onChange={e => setName(e.target.value)} />
              <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
              <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
              <button>Register</button>
            </form>

            <p className="mt-4 text-center small">
              Already have an account?
              <a href="#" className="ms-2 text-orange fw-semibold">
                Login
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - BLANK (FOR FUTURE USE) */}
        <div className="col-md-7 d-none d-md-block ">
          <Signupanimation />
        </div>

      </div>
    </div>
  );
}
