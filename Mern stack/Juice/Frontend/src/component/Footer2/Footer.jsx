import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";

import logo from '../../assets/Logo.png'
const Footer = () => {
  return (
   <>
    <div className="gap-5 p-5 text-black footer-container d-flex justify-content-center position-relative ">

        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Logo"  />
        </div>
         <div>
          <h5></h5>
          <ul className='text-decoration-underline'>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
         <div>
          <h5></h5>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h5></h5>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        {/* Explore */}
        <div>
          <h5>Explore</h5>
          <ul className='text-decoration-underline'>
            <li>Juices</li>
            <li>Cleanse</li>
            <li>Ingredients</li>
            <Link to="/cancel" className="text-decoration-none" style={{color: 'inherit'}}>  <li>Cancel</li> </Link>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h5>Shop</h5>
          <ul className='text-decoration-underline'>
            <li>Menu</li>
            <li>Gift Card</li>
          </ul>
        </div>

        {/* About */}
        <div className=''>
          <h5>About</h5>
          <ul className='text-decoration-underline'>
            <li>Our Story</li>
            <li>Careers</li>
            
            <Link to="/terms" className="text-decoration-none" style={{color: 'inherit'}}>   <li>Terms</li> </Link>
            <Link to="/privacy" className="text-decoration-none" style={{color: 'inherit'}}>  <li>Privacy</li> </Link>
            <Link to="/refund" className="text-decoration-none" style={{color: 'inherit'}}>  <li>Refund</li> </Link>
          </ul>
        </div>

        {/* Stay Fresh */}
        <div>
          <h5>Stay Fresh!</h5>
          <ul className='text-decoration-underline'>
            <li>
              <input type="text" placeholder="Enter your email" />
            </li>
            <li>Contact FAQ</li>
          </ul>
        </div>

      </div>
   </>
  )
}

export default Footer