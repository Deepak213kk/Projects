import React from 'react'
import "./art.css"
import Artisanimg from "../../image2/Artisanafrica.png"
import Haider from "../../Haider"
function ArtisanAfrica() {
    return (
        <>
        <div className='ArtisanHaider'>
            <Haider />
        </div>
            <div className='Artimg'>
                <img src={Artisanimg} alt="" height={530} width={1520} />
            </div>
            <div className='ArtafricaH1'>
                <h1>
                   <b> GET TO KNOW OUR ARTISANS</b>
                </h1>
                <p>
                    Mifuko products are made by 1,300 women artisans in Kenya, Ghana and Tanzania. Here you can 
                </p>
                <p>
                read some of their stories
                </p>
            </div>

        </>
    )
}

export default ArtisanAfrica