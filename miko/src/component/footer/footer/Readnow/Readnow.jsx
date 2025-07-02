import React from 'react'
import readow2 from '../../image/Readnow2.png'
import "./readnow.css"
import { Link } from 'react-router-dom'
const Readnow = () => {
  return (
    <>

    <div className='HReadnowimg'>
      <img src={readow2} alt="" height={700} width={1520}/>
      <div className='hreadnow'>
            <h1>MIFUKO 15 YEARS</h1> <br />
            <p>
              The Mifuko story began in 2009, and This year we are celebrating our 15th aniversary.For 15 year we have been promoying Fair Trade,honouring traditional craft technique, and Empowering womern for a bright future
            </p>
            <button>    
              <Link to={'/yeras15'} style={{color:'inherit', textDecoration:'none'}}>Read How it all Started</Link> 
                    </button>
          </div>
    </div>
  
    </>
  )
}

export default Readnow