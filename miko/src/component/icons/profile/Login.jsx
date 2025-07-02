import React, { useState } from 'react'
import "./profile.css"
import { CgProfile } from 'react-icons/cg'

 function Login ()  {
    const [profile, setProfile] = useState(false)
  return (
    <>
    <div className='loginmain'>
        <div className='loginnav'>
            <div className='leftnav'>
            <h1>
                Mifuko
            </h1>
           </div>
           <div>
            <ul className='centernav'>
                <li>
                    shop
                </li>
                <li>
                    shop
                </li>
                <li>
                    Order
                </li>         
            </ul>
            </div>
            <div className='rightnav' onClick={()=>setProfile(!profile)}>
             <CgProfile size={27} />
             <span>🔻</span>
            </div>
            </div>
            <div className='logbox'>
                <h5>
                    Order
                </h5>
                <br />
                <div className='orderbox'>
                <div>
                <h6>
                    No Order Yet
                </h6>
                <p>Go to store to place an order.</p>
                </div>
            </div>
            </div>
            {profile === true ?     <div className='logunder'>
                <div className='iconunderline'>
                <CgProfile size={27} />
                <div>
                    deepak213k@gmail.com
                </div>
                </div>
            <ul className='logoutbox'>
                <li>
                    Profile
                </li>
                <li>
                    Setting
                </li>
                <li>
                    Log Out
                </li>
            </ul>

            </div>
            :""} 
        


    </div>
    </>
  )
}

export default  Login