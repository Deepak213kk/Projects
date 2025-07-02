import React from 'react'
import Bcorp from "./image3/Bcorps.png"
import Haider from '../../Haider'
import Bhead3img from "./image3/Bhead3img.png"
import Bhead4img from "./image3/Bhead4.png"
import Bhead51 from "../../image2/trade1.png"
import Bhead52 from "../../image2/sustan2.png"
import Bhead53 from "../../image2/trust1.png"
import Footer from "../../footer/footer/Footer1"
function Bcorps() {
    return (
        <>
            <div>
                <Haider />
            </div>
            <div className='Bcropsimg'>
                <img src={Bcorp} alt="" width={1520} />
                <div className='Bhead2'>
                    <h6>
                        <b>
                            We are proud to announce that Mifuko is now officially a Certified B Corporation!
                        </b>
                    </h6>
                    <br />
                    <p>
                        This certification is a testament to our commitment to the highest global standards of social and <br />
                        environmental performance, transparency, and accountability. Being part of the B Corp <br />
                        community means we are part of a global movement using business as a force for good.

                    </p>



                </div>
                <div className='Bhead3'>
                    <div>
                        <p>
                            With the B Corp certification, we strengthen our commitment
                            to ethical and sustainable practices in everything we do. This certification demonstrates our dedication to fair trade and environmentally friendly practices, while also requiring us to continually improve and report transparently. It’s a great addition to our membership in the World Fair Trade Organization (WFTO), which we have held since 2014.
                        </p>
                    </div>
                    <div>
                        <img src={Bhead3img} alt="" height={600} width={500} />
                    </div>

                </div>
                <div className='Bhead3'>
                    <div className='Bhead4img'>
                        <img src={Bhead4img} alt="" height={600} width={500}/>
                    </div>
                    <div>
                        <h3>
                            WHAT IS B CORP?
                        </h3>
                        <p>
                        Certified B Corporations are leaders in the global movement for an inclusive, equitable, and regenerative economy. Unlike other certifications for businesses, B Lab is unique in our ability to measure a company’s entire social and environmental impact.
                        </p>
                        <button>
                            More About B corp
                        </button>
                    </div>
                </div>
                <div className='Bhead4'>
                    <div className='Bhead4div'>
                        <img src={Bhead51} alt="" height={250} width={250}/>
                        <h4>
                            <b>
                            10 PRINCIPLE
                            </b>
                        </h4>
                        <p>
                        Read more about the ten fair trade principles that every WFTO member organisation must follow.
                        </p>
                        <button>
                            <b>
                                Read More
                            </b>
                        </button>
                    </div>
                    <div className='Bhead4div'>
                        <img src={Bhead53} alt="" height={250} width={250}/>
                        <h4>
                            <b>
                           MIFUKO TRUST
                            </b>
                        </h4>
                        <p>
                        Mifuko Trust was founded to tackle poverty and increase the well-being of our artisans.
                        </p>
                        <button>
                            <b>
                                Read More
                            </b>
                        </button>
                    </div>
                    <div className='Bhead4div'>
                        <img src={Bhead52} alt="" height={250} width={250}/>
                        <h4>
                            <b>
                           SUSTAINABILITY
                            </b>
                        </h4>
                        <p>
                        Learn more about what it means to be radically sustainable and have a
                        positive impact.
                        </p>
                        <button>
                            <b>
                                Read More
                            </b>
                        </button>
                    </div>
                </  div>
                <div>
                    <Footer />
                </div>
            </div>

        </>
    )
}

export default Bcorps