import React from 'react'
import "./profile.css"
import { Link } from 'react-router-dom';

function Profile() {
    const Privacyfun=()=>{
        window.open("https://mifuko.com/87125655883/policies/37725274443.html?locale=en","_blank");
    }
    return (
        <>
            <div className='profilemain'>
                <div className='profilebox'>
                    <h1><b>MIFUKO</b></h1>
                    <br />
                    <h3>
                        Log in 
                    </h3>
                    <p>
                    Enter your email and we'll send you a login code
                    </p>
                    
                    <input type="email" name='e1' id='email' placeholder='Email'/>
                    <br />
                    <br />
                    <button ><Link to={'/Entercode'} style={{ textDecoration: "none", color: "inherit" }}> Continue</Link></button>
                    <p id='p2' onClick={Privacyfun}>Privacy</p>
                </div>

            </div>
        </>
    )
}

export default Profile