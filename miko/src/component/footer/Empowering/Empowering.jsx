import React from 'react'
import navb2_1 from '../image/navbar2.1.jpeg'
import navb2_2 from '../image/navbar2.2.jpeg'
import navb2_3 from '../image/navbar2.3.jpeg'
import navb2_4 from '../image/navbar2.4.jpeg'
import "./empower.css"
function  Empowering  ()  {
  return (
    <div>
         <div className='Hempowering'>
          <h1 className=''>EMPOWERING WOMEN ARTISANS IN <br /><span >RURAL AFRICA SINCE 2009</span></h1>
          <p className=''>
            Our verified Fair Trade production combines traditional techniques with contemporary design. <br /> <span>Each piece is handmade and unique, carrying the name of its maker.          </span>
          </p>
        </div>
        <div className=''>
          <ul className='empoweringh2'>
            <li>
              <img src={navb2_1} alt="bags" height={300} width={200} /><br /><br /><h4><b>BAGS</b></h4>
            </li>
            <li>
              <img src={navb2_2} alt="leaf" height={300} width={200} /><br /><br /><h4><b>BASKETS</b></h4>
            </li>
            <li>
              <img src={navb2_3} alt="leaf" height={300} width={200} /><br /><br /><h4><b>HOME DECOR</b></h4>
            </li>
            <li>
              <img src={navb2_4} alt="leaf" height={300} width={200} /><br /><br /><h4><b>FLOOR BASKET</b></h4>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Empowering