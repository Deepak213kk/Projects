import React from 'react'
import "./footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function footer() {
  return (
    <div className='footer'>
      <div>
        <h1>
          <b> Mifuko</b>

        </h1>
        <div className='footerimg'>
          <img src="https://mifuko.com/cdn/shop/files/B-Corp-Logo-Tagline-Lockup-Standards-Black-RGB.png?v=1728750114&width=300" alt="" width={250} height={150} />
        </div>
      </div>
      <div className='shop'>

        <ul className='shop'>
          <p>
            SHOP MIFUKO
          </p>
          <li>
          <Link to={'/shipping'} style={{color:'inherit',textDecoration:"none"}}>   Shipping</Link>
          </li>
          <li>
            order,return and payments
          </li>
          <li>
            Company Information
          </li>
          <li>
            terms of services
          </li>
          <li>
            Refund Policy
          </li>
          <li>
            Privacy policy
          </li>
          <li>
            For resellers
          </li>
        </ul>

      </div>
      <div className='newsletter'>

        <ul className='shop'>
          <p>
            Newsletter
          </p>
          <li>Join are mailist and get 10% discount <br />code</li>
          <li>Subscribe to a Mifuko trust newletter to <br /> recieve an update of our non-profitable work in <br /> kenya</li>
        </ul>
      </div>
      <div className='followus'>

        <ul className='shop'>
          <p>FOLLOW US</p>
          <li>
            Contact us
          </li>
          <li>
            Mifuko in social media
          </li>
          <li>
         <div className='ficonmain'>
         <div className='footericon'>
              <div className='ficoninner'>
                <FaFacebookF />
              </div>
              </div>
              <div className='footericon'>
              <div className='ficoninner'>
              <FaInstagram />
              </div>
              </div>
              <div className='footericon'>
              <div className='ficoninner'>
              <FaLinkedinIn />
              </div>
              </div>
              <div className='footericon'>
              <div className='ficoninner'>
              <FaPinterest />
              </div>
              </div>

         </div>
            
          
          </li>
        </ul>

      </div>
      <div className='lastlabel'>
        <div className='we'>
          <div className='lang'>
            <select name="language" id="l1">
              <option value="eng">
                English
              </option>
              <option value="Suo">
                Suomi
              </option>
              <option value="Deu">
                Deutsch
              </option>
            </select>

          </div>
          <div>
            <p>Mifuko  ⬜ Work of heart and hands</p>
          </div>
        </div>
        <div className='pay'>
          We accept
        </div>

      </div>


    </div>
  )
};
