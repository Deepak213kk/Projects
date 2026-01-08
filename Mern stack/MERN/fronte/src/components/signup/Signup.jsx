import React, { useState } from "react";
import "./signup.css";
import HeadingComp from "./HeadingComp";
import axios from "axios";



const Signup = () => {
    const [Inputs, setInputs] = useState({
        email: "",
        username: "",
        password: ""
    });

    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value });
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/v1/register", Inputs);
            if (response.status === 201) { // assuming 201 status for successful creation
                alert("User created successfully!");
                setInputs({
                    email: "",
                    username: "",
                    password: ""
                });
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                // Customize this for specific validation errors from the API
                alert("Username or credentials are already in use!");
            } else {
                alert("An error occurred. Please try again later.");
            }
        }
    };

   
    return (
    <div className="signup">
        <div className="container">

             <div className="row">
                <div className="col-lg-8 column d-flex  justify-content-center align-items-center "> 
                    <div className="d-flex flex-column w-100 p-5">
                    <input 
                    className="p-2 my-3 input-signup"
                    name="email" 
                    type="email"
                     placeholder="Please Enter your Email" 
                      onChange={change}
                      value={Inputs.email} />
                     <input 
                     className="p-2 my-3 input-signup"
                    name="username" type="username"
                     placeholder=" Enter your Username" onChange={change} value={Inputs.username} />
                    <input 
                    className="p-2 my-3 input-signup"
                    name="password" type="password" 
                    placeholder=" Enter your Password" onChange={change} value={Inputs.password} />
                    <button className="btn-signup p-2" onClick={submit}>Signup</button>
                    </div>
                    </div>
                <div className="col-lg-4 column col-left d-flex  justify-content-center align-items-center "> 
                <HeadingComp first="Sign" second="Up" />
                </div>
                </div></div></div>
    );
};
export default Signup;