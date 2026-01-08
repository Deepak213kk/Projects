import React from 'react'
import feedback1 from '../../assets/Test5.jpg';
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import './Feed.css'
const Feedback = () => {
    return (
        <>
        <div className='flex-wrap gap-5 mt-3 mb-3 d-flex ms-5 justify-content-center'>
             <div className=' d-flex justify-content-start feedback-main rounded-3'>
                <div>
                    <img src={feedback1} alt="" height={100} width={100} className=' feedback-img ms-0' />
                </div>
                <div className='d-flex flex-column '>
                    <h6 className='mt-3 ms-5'>Feedback1 </h6>

                    <p className='feed-para fs-6'>
                        <span className='ms-5'> by</span>
                        <div className='mt-2 ms-0 review d-flex ms-3' > <IoMdStar color='#FFC107' /><IoMdStar color='#FFC107' /> <IoMdStar color='#FFC107' /> <IoMdStarHalf color='#FFC107' /> <IoMdStarOutline color='#FFC107' /> </div>
                        <div className='mt-2 feedback-text ms-3 '>
                            "Absolutely love the freshness  tastes just like fruit straight from the farm!"                         </div>
                    </p>

                </div>
            </div>
            <div className=' d-flex justify-content-start feedback-main rounded-3'>
                <div>
                    <img src={feedback1} alt="" height={100} width={100} className=' feedback-img ms-0' />
                </div>
                <div className='d-flex flex-column '>
                    <h6 className='mt-3 ms-5'>Feedback1 </h6>

                    <p className='feed-para fs-6'>
                        <span className='ms-5'> by</span>
                        <div className='mt-2 ms-0 review d-flex ms-3' > <IoMdStar color='#FFC107' /><IoMdStar color='#FFC107' /> <IoMdStar color='#FFC107' /> <IoMdStarHalf color='#FFC107' /> <IoMdStarOutline color='#FFC107' /> </div>
                        <div className='mt-2 feedback-text ms-3 '>
                            "Absolutely love the freshness  tastes just like fruit straight from the farm!"                         </div>
                    </p>

                </div>
            </div>
        </div>
           
        </>

    )
}

export default Feedback