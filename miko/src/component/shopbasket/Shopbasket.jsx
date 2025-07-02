import React, { useState } from 'react'
import "./basket.css"
import Haider from '../Haider';
import Footer from '../footer/footer/Footer1';
import box1 from '../image2/trade2.png'
 function Shopbasket (){
  const [available, setAvailable] = useState(false)
  const [price, setPrice] = useState(false)
  const Boxes=()=>{
    return (
      <>
    <div className='grid-item'>
    <img src={box1} alt="" height={200}/>
    <h6>
      <br />
      Name of product
    </h6>

    </div>
   

  </>
    )
   
  }
  return (
    <>
    <div className='haider'>
      <Haider />
    <div className='basket'>
     
         <h5 className='underline'> FILTERS</h5>
         <div className='underline' >
             <h6 onClick={()=>setAvailable(!available)}>Avaliability</h6>
             {available === true ?  <div>
                 <input type="checkbox" name='c1'/>Instock
                 <br />
                  <input type="checkbox" name='c2' />OutStock
             </div> :''}
            
         </div>
         <div >
            <h6 onClick={()=>setPrice(!price)}> Price </h6>
            {price === true ? <div>
              hello
            </div> :''}

         </div>
         

     </div>
 </div>
 <div className='main'>
    <div className='shophead'>
    <h1>
     <b>
     BASKETS WITHOUT HANDLES</b>
     </h1>
     <p className='para'>These baskets are all-around storage baskets to organise your home with style. From the smallest baskets that are perfect for herbs, flowers, setting a table and keeping your desk tidy to the largest baskets big enough to fit blankets and pillows.</p>
    </div>
    <div className='box'>
    {Boxes()}
    {Boxes()}
    {Boxes()}
    {Boxes()}
    {Boxes()}
    {Boxes()}
    {Boxes()}
    {Boxes()}
    {Boxes()}
    {Boxes()}
    {Boxes()}
    {Boxes()}
    {Boxes()}

    
    
    
    </div>
 </div>
  
      <div className='foot'>
      <Footer />
    
   </div>
  
    </>
  );
};
export default Shopbasket;
