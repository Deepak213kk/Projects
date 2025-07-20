import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"; // Import CSS for styling
//import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [error, setError] = useState("");
  const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//         const res = await axios.post("http://localhost:5000/login", { email, password });
//         localStorage.setItem("token", res.data.token);
//         console.log(email);
//         alert("Login successful!");
//     } catch (err) {
//         setError(err.response?.data?.message || "Login failed");
//     }
// };
const handleLogin = ()=>{
  alert("login successful")
  navigate('/')
}

  return (
    <div className="login-container">
      <h2>Login to SAADAA</h2>
      {/* {error && <p className="error">{error}</p>} */}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup" style={{ color: "inherit", textDecoration: "none" }}>Sign Up</Link></p>
    </div>
  );
};

export default Login;
