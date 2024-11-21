import React from 'react'
import "./footer.css"
export default function footer() {
  return (
    <div className='footer'>
        <div>
            <h1>
              <b> Mifuko</b>

            </h1>
        </div>
        <div className='shop'>
          <p>
            SHOP MIFUKO
          </p>
            <ul className='shop'>
              <li>
                Shipping 
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
        <p>
            Newsletter
          </p>
           <ul className='shop'>
            <li>Join are mailist and get 10% discount <br />code</li>
            <li>Subscribe to a Mifuko trust newletter to <br /> recieve an update of our non-profitable work in <br /> kenya</li>
           </ul>
        </div>
        <div className='followus'>
          <p>FOLLOW US</p>
          <ul className='shop'>
            <li>
              Contact us 
            </li>
            <li>
               Mifuko in social media
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
