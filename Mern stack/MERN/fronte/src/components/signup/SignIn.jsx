import React from "react";
import "./signup.css";
import HeadingComp from "./HeadingComp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {useDispatch} from "react-redux";
import { authActions } from "../../store";
const SignIn = () => {
    const dispatch = useDispatch();
  const history = useNavigate();
  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs((Inputs) => ({ ...Inputs, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:3000/api/v1/signin", Inputs);
      if (response.data.message === "Login Successful") {
        sessionStorage.setItem('userId', response.data.user.id); // or any token
        history("/");
        dispatch(authActions.login());
      } else {
        alert(response.data.message); // Show the actual error message from backend
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred during login.");
    }
  };
  

  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center">
            <HeadingComp first="Sign" second="In" />
          </div>
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-5">
              <form onSubmit={submit} className="d-flex flex-column w-100 p-5">
                <input
                  className="p-2 my-3 input-signup"
                  name="email"
                  type="email"
                  placeholder="Please Enter your Email"
                  value={Inputs.email}
                  onChange={change}
                />
                <input
                  className="p-2 my-3 input-signup"
                  name="password"
                  type="password"
                  placeholder="Enter your Password"
                  value={Inputs.password}
                  onChange={change}
                />
                <button className="btn-signup p-2" type="submit">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
