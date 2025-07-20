import React, { useState } from 'react'
import "./shipping.css"
import shippingimg from "../../image/Shipping.png"
import Haider from '../../../Haider'
//import FallingText from '../../../innercomponent/temp/Footerbtn'
function Shipping() {
    const [Vesible, setVesible] = useState(false)
    function togglediv(e) {
        setVesible(!Vesible)
    }
    return (
        <>
            <div >
                <Haider />

            </div>
            <div className='Shiphaider'>
                <img src={shippingimg} alt="" width={1520} />
                <div className='shiph1'>
                    <h4>
                        These are for individual customers.
                    </h4>
                    <p>
                        If you're shopping as a business customer, follow this link.
                    </p>
                </div>
                <div className='listcontainer'>
                    <ul className='Shippinglist'>
                        <li className='HShippinglist'>
                            <h5>
                                SHIPPING
                            </h5>
                        </li>
                        <li className='inHShippinglist' onClick={togglediv} >
                            Where do you ship to?
                        </li>
                        {
                            Vesible === true ? <li className={`inHShippinglist `}>
                                <div>
                                    <p>
                                        We offer global shipping worldwide. You can find the delivery times and rates from this page. The rates are also calculated automatically to your order in checkout.
                                    </p>
                                </div>
                            </li>
                                :
                                ""
                        }


                        <li className='inHShippinglist' onClick={togglediv}>
                            Delivery cost
                        </li>
                        {
                            Vesible === true ? <li className={`inHShippinglist `}>
                                <p>
                                    Delivery cost within Finland 4,90 €, with free delivery on orders over 100 €.

                                    Delivery cost within EU is starting 9,90 euros, with free delivery on orders over 199 €.

                                    Delivery cost outside of EU is starting 25 euros, with free delivery on orders over 300 €.

                                    Due to Brexit and the customs policy between EU and UK, we unfortunately do not ship orders to the UK.
                                </p>
                            </li>
                                :
                                ""
                        }
                        <li className='inHShippinglist'>
                            Shipment Tracking
                        </li>
                        <li className='HShippinglist'>
                            <h5>
                                DELIVERY COSTS
                            </h5>
                        </li>
                        <li>
                            Finland
                        </li>
                        <li className='HShippinglist'>
                            DELIVERY TIME (EUROPEAN UNION)
                        </li>
                        <li className='inHShippinglist'>
                            Finland, Sweden & Denmark
                        </li>
                        <li className='inHShippinglist'>
                            Estonia , Lithuania Latvia
                        </li>
                        <li className='inHShippinglist'>
                            France,Italy,Germany,Netherland,Belgium
                        </li>
                        <li className='inHShippinglist'>
                            Other Eu Countries
                        </li>
                        <li className='HShippinglist'>
                            Delibery time rest of the world
                        </li>
                        <li className='inHShippinglist'>
                            European Countrie (Excluded UK)
                        </li>
                        <li className='inHShippinglist'>
                            USA & CANADA
                        </li>
                        <li className='inHShippinglist'>
                            JAPAN
                        </li>
                        <li className='inHShippinglist'>
                            Other Countries
                        </li>
                    </ul>

                </div>
            </div>
            
        </>
    )
}

export default Shipping;