import React from 'react'
import Navbar from '../Navbar'
import Hero from '../HeroPage.jsx/Hero'
import ScrollBar from '../scrollbar/ScrollBar'
import Feedback from '../Feedback/Feedback'
import Footer1 from '../Footer/About'
import Footer from '../Footer2/Footer'
import Offer from '../offer/Offer'

const Home = () => {
  return (
    <>
    
    <Navbar />
    <Hero />
    <h3 className='p-5'>
        Feature Product
    </h3>
    <ScrollBar />
    <div className='mt-3 mb-3'>
        <Offer />
    </div>
    
    <Feedback />
    <Footer />
    </>
  )
}

export default Home