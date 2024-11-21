import React from 'react'
import "./home.css"
import mer2 from './image/mern1.jpeg'
import mer1 from './image/mern2.jpeg'
import navb2_1 from './image/navbar2.1.jpeg'
import navb2_2 from './image/navbar2.2.jpeg'
import navb2_3 from './image/navbar2.3.jpeg'
import navb2_4 from './image/navbar2.4.jpeg'
import scroll1 from './image/scroll1.png'
import scroll2 from './image/scroll2.png'
import scroll3 from './image/scroll3.png'
import scroll4 from './image/scroll4.png'
import scroll5 from './image/scroll5.png'
import scroll6 from './image/scroll6.png'
import scroll7 from './image/scroll7.png'
import scroll8 from './image/scroll8.png'
import scroll9 from './image/scroll9.png'
import readnow from './image/Readnow1.png'
import latimer1 from './image/latimer1.png'
import latimer2 from './image/latimer2.png'
import seen1 from './image/forbes.png'
import seen2 from './image/british.png'
import seen3 from './image/voguebusiness.png'
import seen4 from './image/newyork.png'
import seen5 from './image/bon.png'
import seen6 from './image/vogue.png'
import sustain from './image/sustainability.png'
import sustain2 from './image/sustainability2.png'


//import Readnow22 from './readnow'
import readow2 from './image/Readnow2.png'
//import Footer from './footer/Footer1';
export default function Home() {
  return (
    <div className='home3'>
    <div className='home2'>
    <div className='home1'>
      <div className='footer navbar navbar-expand justify-content-center heading'>   
        <h6>New beautiful autumn collection available</h6>
      </div>
      <div className='na'>
      <b>Mifuko</b>
        <ul className='nai navbar navbar-expand nav3'>
           <li>
             Shop          
          </li>
          <br />
           <li>
            Our Story
          </li> <li>
            Mifuko Trust
          </li> <li>
            Fair Trade
          </li> <li>
            Outlet
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
            search
          </li> <li>
            Account       
               </li> <li>
                Cart 
                </li>
        </ul>
        </div>
   </div>
   </div>
   <div className='img1'> 
    <img src={mer1} alt="chair" height={700} width={600}/>
     <div className='img2'>
      <img src={mer2} alt="l" height={320} width={500} />
    </div>
   </div>
   <div className='head2 justify-content-center'>
    <h1 className='head3'>EMPOWERING WOMEN ARTISANS IN <br /><span className='head4'>RURAL AFRICA SINCE 2009</span></h1>
    <p className='para'>
    Our verified Fair Trade production combines traditional techniques with contemporary design. <br/> <span className='head4'>Each piece is handmade and unique, carrying the name of its maker.          </span>
    </p>
   </div>
   <div className='navbar2'>
    <ul className='navb2ul'>
      <li>
      <img src={navb2_1} alt="bags" height={300} width={200}/><br /><br /><h4><b>BAGS</b></h4>
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
   <div className='handmade'>
   <p > 100% HANDMADE</p>
   <h1>
   CRAFTED BY OUR SKILLED ARTISANS
   </h1>
   </div>
   <div className='scrollbar'>
       <div className='scrollimg'>
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
   <div className='readnowimg'>
        <img src={readnow} alt="readnow" height={800} width={1400}/>
        <div className='readnow'>
        <div className='readbox'>
             <h3>A STORY OF 1,350 <br />ARTISANS</h3>
             <p>
               Mifuko Basket are handmand by women artisans in rural kenya,Ghana and Tanzania.Get to know our  ARTISANS
               and read from their story how basket  weaving allow them to invest in their children,home and future      
               
               
               <br /> <br /><br /><button> Read more</button>     </p>
                 
             </div>


       </div>
   </div>
    <div className='capsule'>
        <p>CAPSULE COLLECTION</p>
        <h1>
          MIFUKO X ERVIN LATIMER
        </h1>

      </div>
      <div className='capsuleimg'>
           <img src={latimer1} alt="latimer"  height={380} width={450} className='ml-auto capsuleimg1'/>
           <img src={latimer2} alt="latimer"  height={380} width={402} />
        

      </div>
      <div className='capsuletitle'>
        <h4>
          <b>          FOR A FASHSION DESIGNER,MIFUKO'S BUSINESS MODELS GIVE AN OPPORTUNITY TO EXPLORE SLOWER HANDCRAFT TECHNIQUE.THERE IS A LITTLE MAGIC IN HANDCRAFT OBJECT
          </b>
        </h4>
         </div>
         <div className='readnow2img'>
             <img src={readow2} alt="readimg" height={700} width={1400} />
             <div className='readnowtitle2'>
                <h1>MIFUKO 15 YEARS</h1> <br />
                <p>
                   The Mifuko story began in 2009, and This year we are celebrating our 15th aniversary.For 15 year we have been promoying Fair Trade,honouring traditional craft technique, and Empowering womern for a bright future
                </p>
                <button>
                    Read how it all started
                </button>
             </div>
                  <div className='seenout'>

                  <div className='seen'>
              <h1><b>AS SEEN IN MEDIA</b></h1>
              <div className='seenimg'>
                <div>
                  <img src={seen1} alt="seen1" height={100} width={100}/>
                </div>
                <div>
                  <img src={seen2} alt="seen2" height={100} width={150}/>
                </div>
                <div>
                  <img src={seen3} alt="seen3" height={100} width={150}/>
                </div>
                <div>
                  <img src={seen4} alt="seen4" height={100} width={150}/>
                </div>
                <div>
                  <img src={seen5} alt="seen5" height={100} width={150}/>
                </div>
                <div>
                  <img src={seen6} alt="seen6" height={100} width={150}/>
                </div>
              </div>
                  </div>
              <div className='sustainimg'>
              <img src={sustain} alt="" height={350} width={670} />
              <img src={sustain2} alt="" height={350} width={670} />

             </div>

                       

                                 <div className='footer2'>
                                 
                                 </div>
                                  

                    
                          </div>
             </div>
             
         </div>
    </div>
    
    
  )
}
