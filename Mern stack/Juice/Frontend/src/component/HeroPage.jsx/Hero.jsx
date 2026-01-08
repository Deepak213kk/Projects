import React from 'react'
import pana from '../../assets/pana.png'
import './hero.css'
const Hero = () => {
    return (
        <>
            <div className="hero-main d-flex">
                <div className="hero-container d-flex justify-content-around align-items-center">
                    {/* Left side: text */}
                    <div className="hero-text-box">
                        <div className="hero-text">
                            Fresh juice,<br />Fresh you
                        </div>
                        <p>100% Natural, freshly Squeezed Daily</p>
                        <div className="hero-btn">
                            <button>Order</button>
                        </div>
                    </div>

                    {/* Right side: image */}
                    <div className="hero-img">
                        <img src={pana} alt="img" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero