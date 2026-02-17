import React from 'react'
import Labelfile from '../Label/Labelfile'
import Shipmethod from './Shipmethod'
import SummaryB from './SummaryB'
import Footer1 from '../../Footer/About'
import Footer from '../../Footer2/Footer'
import { useState } from 'react'
import Paymentmethod from './Paymentmethod'

const Shipping = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [finalamt, setfinalamt] = useState(0);
  return (
    <>
      <Labelfile />
      <div className="container">
        <div className="flex-wrap row d-flex" style={{ minHeight: '80vh' }}>

          {/* LEFT DIV */}
          <div className="col-12 col-md-6">
            <div className="p-3 bg-light">
              <SummaryB setfinalamt={setfinalamt} />
            </div>
          </div>

          {/* RIGHT DIV */}
          <div className="col-12 col-md-6">
            <div className="p-3 bg-light">
              {!showPayment
                ? <Shipmethod onContinue={() => setShowPayment(true)} setShowPayment={setShowPayment} />
                : <Paymentmethod setShowPayment={setShowPayment} finalAmount={finalamt} />
              }

            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Shipping