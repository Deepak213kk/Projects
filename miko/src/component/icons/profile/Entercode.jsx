import React from 'react'
import "./profile.css"
import { Link } from 'react-router-dom';
export  default function Entercode  ()  {
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
                Enter code
            </h3>
            <p>
              sent to email
            </p>
            
            <input type="number" name='e2' id='n1' placeholder='6-digitcode'/>
            <br />
            <br />
            <button><Link to={'/Login'} style={{ textDecoration: "none", color: "inherit" }}> Submit</Link></button>
            <p>
                <Link to={'/profile'} style={{ textDecoration: "none", color: "inherit" }}> Log in with differnt email</Link>
            </p>
            <p id='p2' onClick={Privacyfun}>Privacy</p>
        </div>

    </div>
</>
  )
}
