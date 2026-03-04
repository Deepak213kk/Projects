//import { useState } from 'react'
import './App.css'
import Feedback from './component/Feedback/Feedback'
import About from './component/Footer/About'
import Offer from './component/offer/Offer'

import Footer from './component/Footer2/Footer'
import Menu from './component/Menu/Menu'
import Productdetail from './component/Productdetail/Productdetail'
//import Tem from './component/Productdetail/Tem'
import Cart from './component/Payments/Cart'
import Contact from './component/Contact/Contact'
import Labelfile from './component/Payments/Label/Labelfile'
import Shipping from './component/Payments/Shipping/Shipping'
import SummaryB from './component/Payments/Shipping/SummaryB'
import Shipmethod from './component/Payments/Shipping/Shipmethod'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './component/Navbar'
import Home from './component/Homepage/Home'
//import product from './component/Data/Data.jsx';
import Login from './component/Login/Login.jsx';
import Signup from './component/Login/Signup.jsx'
import Paymentmethod from './component/Payments/Shipping/Paymentmethod.jsx'
import Terms, { Cancellation, Privacy, Refund } from './component/Payments/policy/Policy.jsx'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Menu />} />
          <Route path="/product/:id" element={<Productdetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipmethod" element={<Shipmethod />} />
          <Route path="/Payment" element={<Paymentmethod />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/cancel" element={<Cancellation />} />
          <Route path="/summary" element={<SummaryB />} />


        </Routes>
      </Router>
    </>

  )
}

export default App
