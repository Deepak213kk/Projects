import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./Login.css"; // reuse same CSS + font
import Signupanimation from "../Animation/Signupanimation"
//import signupimg from "../../assets/Signupimg.png"

export default function Signup() {
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
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control rounded-pill"
                  placeholder="Enter email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control rounded-pill"
                  placeholder="Create password"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control rounded-pill"
                  placeholder="Confirm password"
                />
              </div>

              <button
                type="submit"
                className="py-2 btn btn-orange w-100 rounded-pill"
              >
                Register
              </button>
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
          <Signupanimation/>
        </div>

      </div>
    </div>
  );
}
