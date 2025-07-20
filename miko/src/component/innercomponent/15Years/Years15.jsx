import React from 'react'
import Haider from '../../Haider'
import yearimg from "../../image2/year15.png" 
import "./years.css"
import { FaFacebookF } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
function Years15  ()  {
  return (
    <>
    <div>
        <Haider />
    </div>
    <div className='Yheadmain'>
    <div>
        <img src={yearimg} alt="" width={1520}/>
    </div> 
    <div className='Yhead2'>
        <div className='h2container1'>
            <h6><b>Jan 24,2024</b></h6>
            <br />
            <h6><b>Share</b></h6>
            <div className='Shareicon'>
                <div>
                <FaFacebookF />
                </div>
                <div>
                <FaPinterest />
                </div>
                <div>
                <FaXTwitter />
                </div>
                <div>
                <FaTelegramPlane />
                </div>

            </div>
        </div>
        <div className='Yhead2p'>
            <p>
            The Mifuko story began in 2009, and this year we are celebrating our 15th anniversary. For 15 years we have been promoting Fair Trade, honouring traditional craft techniques, and empowering women for a brighter future.
            </p>
            <p>
            Join us in our anniversary celebration throughout the year as we share memories and stories from over the years. We are delighted to have you as part of our story!
            </p>
        </div>
    </div>

    </div>
    </>
  )
}

export default Years15