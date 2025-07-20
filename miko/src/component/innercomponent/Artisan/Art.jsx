import React from 'react'
import artisan from "../../footer/image/Readnow1.png"
import { Link } from 'react-router-dom'
import "./art.css"
function Art() {
    return (
        <>
            <div className='readnowimg'>
                <img src={artisan} alt="readnow" height={800} width={1480} />
                <div className='readnow'>
                    <h3>A STORY OF 1,350 <br />ARTISANS</h3>
                    <div className='readbox'>      <p>
                        Mifuko Basket are handmand by women artisans in rural kenya,Ghana and Tanzania.Get to know our  ARTISANS
                        and read from their story how basket  weaving allow them to invest in their children,home and future


                        <br /> <br /><br /><button> <Link to={'/Artisanafrica'} style={{color:"inherit" , textDecoration:"none"}}>Read more</Link> </button>     </p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Art