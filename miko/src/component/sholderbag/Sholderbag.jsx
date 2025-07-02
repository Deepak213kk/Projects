import React from 'react'

function Sholderbag (){
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
       Shoulder bags</b>
       </h1>
       <p className='para'>Our handwoven shopper baskets are excellent everyday shoulder bags. They are ideal for shopping,
         the market, the beach, picnics or any occasion where you need a stylish and spacious bag. The long leather straps make them easy to carry on your shoulder, with plenty of room for essentials and new purchases..</p>
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

export default Sholderbag 