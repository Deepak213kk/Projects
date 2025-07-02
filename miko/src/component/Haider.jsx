import React from 'react'
import  { useState } from 'react'
import './footer/home.css'
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaBagShopping } from "react-icons/fa6";
import trade from './image2/trade1.png'
import trade2 from './image2/trade2.png'
import trade3 from './image2/trade3.png'
import trust1 from './image2/trust1.png'
import trust2 from './image2/trust2.png'
import hovertext from './image2/hoverstory1.png'
import hovertext2 from './image2/hoverstory2.png'
import hovertext3 from './image2/sustan2.png'
import { Link } from 'react-router-dom';
 export default function Haider ()  {
    const [hover, sethover] = useState(null);
    const handleMouseOver = (divid) => { sethover(divid); };
    const handleMouseOut = () => { sethover(null); };
  return (<>
        <div className='home1'>
        <div className='tophead navbar  justify-content-center'>
         <div className='smallhaider'>
         <h6>In Finland, Germany, and the EU: Free delivery on orders over 100€</h6>
         </div>
        </div>
        <div className='na'>
          <b className='mifuko'>Mifuko</b>
          <ul className='nai navbar  nav3'>
            <li className='shop' onMouseOver={() => handleMouseOver('div1')}
              onMouseOut={handleMouseOut}>
              Shop
            </li>
            <br />
            <li onMouseOver={() => handleMouseOver('div2')}
              onMouseOut={handleMouseOut}>
              Our Story
            </li>
             <li onMouseOver={() => handleMouseOver('div3')}
              onMouseOut={handleMouseOut}>
              Mifuko Trust
            </li>
             <li onMouseOver={() => handleMouseOver('div4')}
              onMouseOut={handleMouseOut}>
              Fair Trade
            </li>
            <li>
              <Link to={"/temp"} style={{color: 'inherit', textDecoration: "none"}}> temp</Link>
            </li>
          </ul>
          <div>
            <ul className='nai navbar navbar-expand nav3'>
              <li>
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
              </li> <li>
                <FaSearch size={23} />
              </li> <li>
                <Link to={'/profile'} style={{ textDecoration: "none", color: "inherit" }}> <CgProfile size={27} /></Link>
              </li> <li>
                <FaBagShopping size={23} />
    
              </li>
            </ul>
          </div>
        </div>
      </div>
       <div id="div1" className={`shophover hover-div ${hover === 'div1' ? 'show' : ''}`} onMouseOver={() => handleMouseOver('div1')}>
          <h1>MIFUKO SHOP</h1>
          <div className='hovershop'>
            <div className='shop2'>
              <h5 className='hovertext'>STORAGES BASKETS</h5>
              <ul className='hover_list'>
                <li>
                 <Link to={'/basket'} style={{ textDecoration: "none", color: "inherit" }}>
                 Without handle
                 </Link>
                 
                </li>
                <li>
                  With handle
                </li>
                <li>
                  Basket with Lid
                </li>
                <li>
                  Laundry Basket
                </li>
              </ul>
            </div>
            <div>
              <h5 className='hovertext'>BASKET BAGS</h5>
              <ul className='hover_list'>
                <li>
                  Sholder bags
                </li>
                <li>
                  Tote Bags
                </li>
                <li>
                  Cross-body Bags
                </li>
                <li>
                  Acceseries
                </li>
              </ul>
            </div>
            <div>
              <h5 className='hovertext'>Home     Decorator</h5>
              <ul className='hover_list'>
                <li>
                  Ornaments
                </li>
                <li>
                  Candle Holder
                </li>
                <li>
                  Bowls
                </li>
                <li>
                  Other product
                </li>
              </ul>
            </div>
            <div>
              <h5 className='hovertext'>MORE</h5>
              <ul className='hover_list'>
                <li>
                  Material
                </li>
                <li>
                  Size information
                </li>
                <li>
                  Product care
                </li>
                <li>
                  Idea for Home
                </li>
                <li>
                  Gits
                </li><li>
                  Gits Cards
                </li><li>
                  Corporator Gifts
                </li>
              </ul>
            </div>
            <div>
              <h5 className='hovertext'>STORAGE BASKET BY SIZE</h5>
              <ul className='hover_list'>
                <li>
                  XS
                </li>
                <li>
                  S
                </li>
                <li>
                  M
                </li>
                <li>
                  L
                </li>
                <li>
                  XL
                </li><li>
                  XXL
                </li>
              </ul>
            </div>
            <div>
              <h5 className='hovertext'>NEW IN </h5>
            </div>
            <div>
              <h5 className='hovertext'>LAST CHANCE </h5>
            </div>
          </div>
        </div>
        <div id='div2' className={`shophover hover-div ${hover === 'div2' ? 'show' : ''}`} onMouseOver={() => handleMouseOver('div2')}>
          <h1> MIFUKO</h1>
          <div className='hoverdiv'>
            <ul>
              <h6 className='hovertext '>Mifuko's Story</h6>
              <li>
               <Link to={'/saboutus'} style={{textDecoration: "none" , color: 'inherit'}}> About us</Link>
              </li>
              <li>
                Work of hand and hearts
              </li>
              <li>
                Artisans in Africa
              </li>
              <li>
                Collaboration
              </li>
              <li>
                Blog
              </li>
              <li>
                For Seller
              </li>



            </ul>
            <div>
              <h6 className='hovertext'>Sustainabily</h6>
              <ul>
                <li>
                  Sustainability reports
                </li>
                <li>
                  People and planet
                </li>
              </ul>
            </div>
            <h6 className='hovertext'>
            <div className='hoverdiv '>
              <img src={hovertext} alt="" height={230} width={200} />
              <img src={hovertext2} alt="" height={230} width={200} />
              <img src={hovertext3} alt="" height={230} width={200} />

            </div>
            </h6>

          </div>
        </div>
        <div id='div3' className={`shophover hover-div ${hover === 'div3' ? 'show' : ''}`} onMouseOver={() => handleMouseOver('div3')}>
          <h1>Mifuko</h1>
          <div className='hoverdiv'>
            <div className='trust'>
              <h6 className='hovertext'>Empowering communities</h6>
              <ul>
                <li >
                  <Link to={"/mifukotrust"} style={{ textDecoration: "none", color: "inherit" }}>About us </Link>
                </li>
                <li>Blog</li>
                <li>
                  Wash and Grow !
                </li>
                <li>Document</li>
                <li>
                  Results of are work
                </li>
              </ul>
            </div>
            <div>
              <h6 className='hovertext'>
                Support our Work
              </h6>
              <ul>
                <li>
                  Donate
                </li>
                <li>
                  Partner
                </li>
                <li>
                  Support as Company
                </li>
              </ul>
            </div>
            <div className='hoverdiv'>
              <img src={trust1} alt="" height={250} width={200} />
              <img src={trust2} alt="" height={250} width={200} />
              <img src={hovertext2} alt="" height={250} width={200} />
            </div>
          </div>
        </div>
        <div id='div4' className={`shophover hover-div ${hover === 'div4' ? 'show' : ''}`} onMouseOver={() => handleMouseOver('div4')}>
        <h1>Mifuko</h1>
       <div className='hoverdiv'>
       <div >
       <h6 className='hovertext'>Fair Trade</h6>
          <ul>
            <li >
             <Link to={'/fair'} style={{ textDecoration: "none", color: "inherit" }}> 10 Principle of Fair trade</Link>
            </li>
            <li>
              Varified Social Enterprices
            </li>
          </ul>
        </div>
        <div className='hovertext'>
          <Link to={"/Bcorps"} style={{color: "inherit" , textDecoration: "none"}}>B corps</Link>
        </div>
        <div className='hoverdiv'>
          <img src={trade} alt=""  height={250} width={200}/>
          <img src={trade2} alt="" height={250} width={200} />
          <img src={trade3} alt="" height={250} width={200}/>
        </div>
       </div>
        </div>
      </>)
  
}
