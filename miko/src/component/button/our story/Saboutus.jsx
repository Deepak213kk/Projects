import React from 'react'
import "./saboutus.css"
import Haider from '../../Haider'
import story from '../fair/image3/mifuko story.png'
import mifuko from '../fair/image3/mifukoimg.png'
import cvvimg from "../fair/image3/cvvimg.png"
import Tfriends from '../../innercomponent/Tfriends'
import Art from '../../innercomponent/Artisan/Art'
import Footer from "../../footer/footer/Footer1"
//import Latest from '../../Latest article/Latest1'
//import Latest from '../../Latest article/Latest1'
//import Art from '../../innercomponent/artisanmade/art'
//import twofriends from "../../image2/friends.png"
function Saboutus() {
    return (
        <>
            <div>
                <Haider />
            </div>
            <div className='mstory'>
                <img src={story} alt="" width={1470} />
            </div>
            <div className='whatismifuko'>


                <div className='mifuko'>
                    <h3>
                        what is Mifuko ?
                    </h3>
                    <br />

                    <p>
                        Mifuko is a Finnish design company with a mission to bring joy to our customers while improving the welfare of women in rural areas of Africa. Mifuko baskets, bags and home décor products are made by more than 1,300 women artisans in rural Kenya, Tanzania and Ghana, and sold in over 30 countries.
                    </p>
                    <p>
                        In Swahili, mifuko means pocket, and we ensure no one is left with empty pockets. Mifuko is a certified member of the World Fair Trade Organisation (WFTO): fair wages and continuous orders provide security for the artisans’ future and support the well-being of the whole community.
                    </p>
                    <p>
                        Each Mifuko product is a unique, handmade piece that combines modern Nordic design with traditional African craftsmanship. Each Mifuko product carries the name of its maker.
                    </p>

                </div>
                <div className='mifukoimg'>
                    <img src={mifuko} alt="" height={450} width={400} />
                </div>
            </div>
            <div className='storyvideo'>


            </div>
            <div className='mstory '>
                <div className='cvvpara'>
                   <h3>
                       <b> MISSIION – VISION – VALUES</b>
                    </h3>
                    <p>
                        Mifuko's mission is to bring joy to our customers while improving the welfare of women and their communities in rural Africa.
                    </p>
                    <p>
                        Our vision is to double the number of artisans we empower by 2025 by fostering traditional African craftmanship, building long term partnerships and actively promoting sustainable home décor and fashion. To realise our mission and vision we will continue to build <br /> sustainable partnerships with artisans, working together to develop new products to market worldwide.

                    </p>
                    <p>
                    We are guided by our core values of uniqueness, joy and responsibility. These values are reflected in every aspect of our business.
                    </p>
                </div>
                <div className='cvvimg'>
                    <img src={cvvimg} alt="" height={500} width={500}/> 

                </div>

            </div>
            <div>
                <Tfriends />
            </div>
            <div>
                <Art />
            </div>
           
            <div>
                <Footer />
            </div>
          
        </>
    )
}

export default Saboutus