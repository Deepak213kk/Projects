import React from 'react'
import "./latest.css"
import blog1 from "../footer/image/blog1.png"
import blog2 from "../footer/image/blog2.png"
import blog3 from "../footer/image/blog3.png"


function latest() {
    return (
        <div className='main'>
           <div className='blogp'>
           <p>
                MIFUKO BLOG
            </p>
            <h1>
                LATEST ARTICLE
            </h1>
           </div>
            <div className='blogimg'>
                <div className='blogpart1'>
                    <img src={blog1} alt="" height={250} />
                    <div className='blogpara'>
                        <h4 className='blogh1'>
                            HOME STORAGE TIPS WITH MIFUKO's
                        </h4>
                        <p>
                            Life is so fast paced nowadays that it may become challenging to keep our spaces organized. A great solution would be to use our Mifuko baskets that are functional and eco-friendly. Mifuko´ s baske...
                        </p>
                    </div>
                </div>
                <div className='blogpart1'>
                    <img src={blog2} alt="" height={250} />
                    <h4>
                        SMALL ACTION ,BIG CHANGES
                    </h4>
                    <p>
                        Mifuko Trust was established in 2012 to promote women's empowerment and sustainable development in rural Kenya. Collaboration with the fair trade company Mifuko Ltd forms the foundation of its acti...
                    </p> 
                </div>
                <div className='blogpart1'>
                    <img src={blog3} alt="" height={250} />
                    <h4>
                        RUTH'S MIFUKO STORY
                    </h4>
                    <p>
                    Mifuko’s Production Manager Ruth Kalondu has been a key member of the Mifuko team from the start. Here she tells her story with Mifuko.
                    </p>
                </div>

            </div>


        </div>
    )
}

export default latest