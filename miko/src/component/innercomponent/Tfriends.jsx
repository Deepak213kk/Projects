import React from 'react'
import frindsimg from "../image2/friends.png"
import "./tfriends.css"
function Tfriends() {
    return (
        <>
            <div className='friends'>
                <div>
                    <img src={frindsimg} alt="" height={500} width={500} />
                </div>
                <div>
                    <h1>
                        <b>
                            THE STORY OF TWO FRIENDS
                        </b>
                    </h1>
                    <p>
                        Mifuko was founded in 2009 by two friends, Mari and Minna. They had been friends since studying Textile Art and Design at the University of Art and Design in Helsinki. The idea of Mifuko was born in the colourful bustle of a market in Nairobi, Kenya. Minna lived in Kenya at the time, and Mari was visiting her. Minna and Mari were amazed by the craftmanship of the artisans selling their goods and wanted to share it with a wider audience. Minna and Mari founded Mifuko with a clear objective: to combine Nordic design and traditional African handicraft skills to form a business that directly benefits the people of rural Kenya.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Tfriends