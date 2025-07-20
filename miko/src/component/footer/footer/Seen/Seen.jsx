import React from 'react'
import "./seen.css"
import seen1 from "../../image/forbes.png"
import seen2 from '../../image/british.png'
import seen3 from '../../image/voguebusiness.png'
import seen4 from '../../image/newyork.png'
import seen5 from '../../image/bon.png'
import seen6 from '../../image/vogue.png'
function Seen() {
    return (
        <>
            <div className='Smedia'>
                <h1><b>AS SEEN IN MEDIA</b></h1>
                </div>
                <div className='smediaimg'>
                    <div>
                        <img src={seen1} alt="seen1" height={100} width={100} />
                    </div>
                    <div>
                        <img src={seen2} alt="seen2" height={100} width={150} />
                    </div>
                    <div>
                        <img src={seen3} alt="seen3" height={100} width={150} />
                    </div>
                    <div>
                        <img src={seen4} alt="seen4" height={100} width={150} />
                    </div>
                    <div>
                        <img src={seen5} alt="seen5" height={100} width={150} />
                    </div>
                    <div>
                        <img src={seen6} alt="seen6" height={100} width={150} />
                    </div>
                </div>
            
        </>
    )
}

export default Seen