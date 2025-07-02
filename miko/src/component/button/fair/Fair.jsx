import React from 'react'
import './fair.css'
//import Latest from '../../Latest article/Latest1'
import Footer from '../../footer/footer/Footer1'
import Fair1 from './image3/fairtrade.png'
import Haider from '../../Haider'
import { fairdata } from './fairdata'
import friends from "./image3/friends.png"
import mission from "./image3/mission.png"
import trust from "./image3/trust1.png"
function Fair ()  {
  let allfairimg=fairdata.map((v,i)=>{
    return(
      <div className='imgcontainer' key={i}>
      <img src={v.images} alt="" height={300} width={300}/>
      <br />
      <br />
      <h4>
        {v.heading}
      </h4>
      <br />
      <p>
        {v.paragraph}
      </p>
      </div>
    )
  })
  return (
  <>
  <div>
    <Haider />
  </div>
      <div>
     <img src={Fair1} alt="" width={1510} height={550}/>
      <div className='fairpara'>
        <p>
        The WFTO Guarantee System establishes compliance with the WFTO Fair Trade Principles, covering everything from the business model, to the organisational structure, operations and supply chain. 
        </p><br />
          <p>
          As a WFTO guaranteed member, Mifuko is committed to the 10 Principles of the WFTO. We consistently strive to apply them to their fullest in everything we do. The following a brief overview of how we use these principles in our work.
          </p>
      </div>
       
      <div className='fairprinciple'>
        <div className='fairprincipleimg'>
        {allfairimg}
        </div>
      
        </div> 
        <div className='readmore'>
         <div className='readbox'>
         <div>
         <img src={friends} alt="" height={300} />
         <h3 className=''> THE MIFUKO'S STORY</h3>
         <button>Read more</button>
         </div>
         <div>
         <img src={mission} alt="" height={300} />
         <h3 className=''>SUSTIANABILITY</h3>
         <p>Learn more about what it means to be radically sustainable and have a
         positive impact.</p>
         <button>Read more</button>
         </div>
         <div>
         <img src={trust} alt="" height={300} />
         <h3> Mifuko's Trust</h3>
         <p>Mifuko Trust was founded to tackle poverty and increase the well-being of our artisans.</p>
         <button>Read more</button>
         </div>
        
         </div>
         <div className='readbox1'>
          {/* <Latest /> */}
          <Footer />
         </div>
        </div>
       
      
        </div>
        <div>
       
      </div>
  </>
  )
}

export default Fair