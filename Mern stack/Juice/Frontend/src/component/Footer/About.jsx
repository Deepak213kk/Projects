import React from 'react'
import './About.css'
import Navbar from '../Navbar'
import heroImg from '../../assets/heroimg.png'
import Footer from '../Footer2/Footer'

const Footer1 = () => {
    return (
        <>
        <div className='navbar'>
            <Navbar />
        </div>
            <div className='text-white main-about d-flex flex-column justify-content-center align-items-center '>
              <div className='hero-img'>
                <img src={heroImg} alt=""  />
              </div>
                <div className='mt-5 mb-5 head-h1 w-75 d-flex flex-column justify-content-center align-items-center'>
                    <h3>
                        Fresh Healthy Natural
                    </h3>
                    <p className='mt-4 '>
                        At FreshSip, we believe that nature’s best should be enjoyed in every drop. Our juices are made from handpicked, farm-fresh fruits with no artificial flavors or preservatives—just pure, refreshing goodness. We’re passionate about delivering a healthy, tasty experience that brightens your day and nourishes your body.
                    </p>
                </div>
                <div className='gap-5 about-card d-flex align-items-center '>
                    <div className='card '>
                        <h6>
                            <span className='mb-2 text-warning'>
                                100% Natural
                            </span><br />
                            🍊  Only Fresh
                            Handpick Fruit
                        </h6>
                    </div>
                    <div className='card '>
                        <h6 >
                            <span className='mb-2 text-warning'>
                                Freahly Soured
                            </span><br />
                            🍊  Locally and Responsibly   Picked

                        </h6>
                    </div>

                </div>
                <div className='mt-5 mb-5 head-h1 w-75 d-flex flex-column justify-content-center align-items-center'>
                    <h3>
                        The Quality & Mission
                    </h3>
                    <p className='mt-4 '>
                        "At Juice Veda, we are dedicated to crafting the highest quality cold-pressed juices. Our mission is to make healthy living simple and delicious by providing pure, vibrant nourishment in every bottle. We never use added sugars, preservatives, or artificial flavors. By sourcing the freshest fruits and vegetables and using a meticulous cold-press process, we ensure you get a product that is as wholesome as it is flavorful."                    </p>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Footer1