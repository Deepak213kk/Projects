import React from 'react'
import "./story.css"
import stroy from "../image2/h1.png"
import what from "../image2/whatismifuko.png"
import friends from "../image2/friends.png"
import mission from "../image2/mission.png"
import artisan from "../image2/artisan.png"
import sustain from "../image2/sustan2.png"
export default function Story() {
    return (
        <div>
            <div className='story'>
                <img src={stroy} alt="" width={1510} height={500} />
                <div>
                    <ul className='orgh'>
                        <li>
                            What is Mifuko
                        </li>
                        <li>
                            TWO FRIENDS
                        </li>
                        <li>
                            MISSION
                        </li>
                        <li>
                            ARTISAN MADE
                        </li>
                        <li>
                            SUSTAINABILITY
                        </li>
                        <li>
                            TEAMS
                        </li>
                        <li>
                            MIFUKO TRUST
                        </li>
                    </ul>
                </div>
            </div>
            <div className='hea2'>
                <div>
                    <h6>Customer Servies</h6>
                    <p>call us: + 358 50 470 3829</p>

                </div>
                <div>
                    <h6>   Contact us:</h6>
                    <p>Send us an email: shop[at]mifuko.fi</p>

                </div>

            </div>
            <div className="video">
                <h1>viddeo</h1>
            </div>
            <div className='what'>
                <div className='para'>
                    <h1>WHAT IS MIFUKO'S</h1>
                    <p>
                        Mifuko is a Finnish design company with a mission to bring joy to our customers while improving the welfare of women in rural areas of Africa. <br /> <br />Mifuko baskets, bags and home décor products are made by more than 1,300 women artisans in rural Kenya, Tanzania and Ghana, and sold in over 30 countries.

                        In Swahili, mifuko means pocket, and we ensure no one is left with empty pockets. <br /> <br />Mifuko is a certified member of the World Fair Trade Organisation (WFTO): fair wages and continuous orders provide security for the artisans’ future and support the well-being of the whole community.

                        Each Mifuko product is a unique, handmade piece that combines modern Nordic design with traditional African craftsmanship. <br /><br />Each Mifuko product carries the name of its maker.
                    </p>

                </div>
                <div className='imgae'>
                    <img src={what} alt="" />
                </div>
            </div>
            <div className='friends'>

                <div className='friendimg'>
                    <img src={friends} alt="" height={600} width={600} />
                </div>
                <div className="para2">
                    <h1><b>The story of two friends</b></h1>
                    <p>
                        Mifuko was founded in 2009 by two friends, Mari and Minna. They had been friends since studying Textile Art and Design at the University of Art and Design in Helsinki. The idea of Mifuko was born in the colourful bustle of a market in Nairobi, Kenya. Minna lived in Kenya at the time, and Mari was visiting her. Minna and Mari were amazed by the craftmanship of the artisans selling their goods and wanted to share it with a wider audience. Minna and Mari founded Mifuko with a clear objective: to combine Nordic design and traditional African handicraft skills to form a business that directly benefits the people of rural Kenya.
                    </p>
                </div>
            </div>
            <div className='missionmain'>
                <div className='missionpara'>
                    <h1><b>Mission – Vision – Values</b></h1>
                    <p>
                        Mifuko's mission is to bring joy to our customers while improving the welfare of women and their communities in rural Africa. <br />
                        <br /> Our vision is to double the number of artisans we empower by 2025 by fostering traditional African craftmanship, building long term partnerships and actively promoting sustainable home décor and fashion. To realise our mission and vision we will continue to build 
                        <br />sustainable partnerships with artisans, working together to develop new products to market worldwide. <br />
                        <br />We are guided by our core values of uniqueness, joy and responsibility. These values are reflected in every aspect of our business.
                        

                    </p>

                </div>
                <div className='mimg'>
                    <img src={mission} alt="" />

                </div>
            </div>
            <div className='artisan'>
                <div className="artimg">
                    <img src={artisan} alt="" height={700} width={550}/>

                </div>
                <div className="missionpara">
                    <h1><b>Artisan made</b></h1>
                    <p>Mifuko baskets are woven by hand using traditional techniques. Basket weaving brings employment to areas where there are few other sources of livelihood apart from small-scale farming, which is more and more unpredictable due to climate change. Mifuko supports local entrepreneurship and community building through self-help groups. The women in these groups meet weekly to discuss, weave baskets and pass on traditional craft skills. Basket weaving gives rural women the opportunity for economic independence as the groups provide loans to members in need, enabling them to plan for the future and invest in family welfare or small business. In addition to self-help groups, some of our home décor items are handmade in Fair Trade workshops. <br />
                    <br />We follow an inclusive business model that enables a positive change in low-income communities. The starting point is establishing a fair payment in exchange for the products we get from artisans. We use the Living Wage Ladder tool provided by the WFTO to help determine payments, but ultimately, the amount is agreed with the chairladies of the self-help groups or workshops. Get to know our artisans and read from their stories how basket weaving allows them to invest in their children, homes and future.</p>
                      <br /><br />
                      <button>Read more</button>
                </div>

            </div>
            <div className="sustanability2">
                <div className='suspara'>
                    <h1><b>SUSTAINABILITY</b></h1>
                    <p>We at Mifuko have been radically sustainable from the beginning, striving for sustainability in everything we do. We are determined to be a part of building a better, sustainable future. We want to contribute to solving the issues humanity faces, such as poverty, gender inequality, pollution, and loss of biodiversity. <br /> <br />
                    We have become increasingly ambitious in the promotion of sustainable development. Our goal is to reduce and offset our carbon footprint and to be carbon neutral in 2023. To measure our impact more accurately, we have introduced a GHG protocol in our reporting <br /> <br />
                    Read more about our sustainability principles and how we implement them in our operations in our latest Sustainability report.
                    <br /> <br />
                    <button> Read more</button></p>
                </div>
                <div className="susimg">
                    <img src={sustain} alt="" />

                </div>
            </div>
            <div className='cominfo'>
                     <h1><b>COMPANY INFORMATION</b></h1>
                     <p><span className='infop'>Legal company address:</span>Hameentie 130 A,00560  Helsinki, Finland</p>
                     <p><span className='infop'>Address for return :</span>Hameentie 130 A,00560  Helsinki, Finland</p>
                     <p><span className='infop'>Tel:</span>+ 358 50 470 3829</p>
                     <p><span className='infop'> Email:</span>shop[at]mifuko.fi</p>
                     <p><span className='infop'>VAT ID :</span>FI22522395</p>


                </div>
        </div>
    )
}
