import React from 'react'
import "./capsule.css"
//import Latimerimg from "../../image/latimer1.png"
import Latimerimg from "../../image/ccollection1.png"
import Latimerimg2 from "../../image/latimer2.png"
function CapsuleCollection() {
    return (
        <>
          <div className='ccmain'>
          <div className='CCollection'>
                <p>
                    <b>
                        CAPSULE COLLECTION
                    </b>
                </p>
                <h1>
                    <b>
                        MIFUKO X ERVIN LATIMER
                    </b>
                </h1>
            </div>
            <div className='HCcollection'>
                <div>
                    <img src={Latimerimg} alt="" height={400} width={500} />
                </div>
                <div className='ccollectionpara'>
                    <h4>
                        For a fashion designer, Mifuko's business model gives an opportunity to explore slower handcraft techniques. There is a little magic in every handmade object.
                    </h4>
                    <br />

                    <p className='ccp'>
                    Ervin Latimer
                    </p>
                </div>
                <div>
                    <img src={Latimerimg2} alt="" height={400} width={500} />
                </div>
            </div>
          </div>
        </>
    )
}

export default CapsuleCollection