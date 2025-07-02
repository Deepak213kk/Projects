import React from 'react'
import "./scroll.css"
 import scroll1 from '../../image/scroll1.png'
 import scroll2 from '../../image/scroll2.png'
 import scroll3 from '../../image/scroll3.png'
 import scroll4 from '../../image/scroll4.png' 
 import scroll5 from '../../image/scroll5.png'
 import scroll6 from '../../image/scroll6.png'
 import scroll7 from '../../image/scroll7.png'
 import scroll8 from '../../image/scroll8.png'
 import scroll9 from '../../image/scroll9.png'
function  Scrollbar  ()  {
  return (
    <div className='scroll'>
          <div className='scrolimg'>
            <img src={scroll1} alt="scroll" height={300} width={280} />
            <br /><br /><p>Kiondo floor basket | Light green <br />thick stripes with handles XXL
              <br />163,00 €</p>
          </div>
          <div className='scrollimg'>
            <img src={scroll2} alt="scroll" height={300} width={280} /><br /><br /><p>Majani market basket | One thick <br /> stripe Green M <br />
              99,00 €</p>
          </div>
          <div className='scrollimg'>
            <img src={scroll3} alt="scroll" height={300} width={280} /><br /><br /><p>Kiondo shopper basket | Brown M <br />99,00 €</p>
          </div>
          <div className='scrollimg'>
            <img src={scroll4} alt="scroll" height={300} width={280} /><br /><br /><p>Bolga laundry basket XXL <br />137,00 €</p>
          </div>
          <div className='scrollimg'>
            <img src={scroll5} alt="scroll" height={300} width={280} /><br /><br /><p>Pamba floor basket | Grey sisal <br /> with handles XL <br />
              163,00 </p>
          </div>
          <div className='scrollimg'>
            <img src={scroll6} alt="scroll" height={300} width={280} /><br /><br /><p>Kiondo floor basket | Warm grey <br /> Duo with handles XXL
              <br />163,00 €</p>
          </div>
          <div className='scrollimg'>
            <img src={scroll7} alt="scroll" height={300} width={280} /><br /><br /><p>Kiondo market basket | Brown M
              <br />79,00 €</p>
          </div>
          <div className='scrollimg'>
            <img src={scroll8} alt="scroll" height={300} width={280} /><br /><br /><p>Kiondo floor basket | Brown with <br /> handles XXL <br />
              163,00 €</p>
          </div>
          <div className='scrollimg'>
            <img src={scroll9} alt="scroll" height={300} width={280} /><br /><br /><p>Pamba floor basket | Black rib <br /> weave with handles XXL <br />
              163,00 €</p>
          </div>
        </div>
  )
}

export default Scrollbar