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

  return (
    <>
      <Labelfile />
      <div class="container">
        <div class="row">

          {/* LEFT DIV */}
          <div class="col-12 col-md-6">
            <div class="p-3 bg-light">
              <SummaryB />
            </div>
          </div>

          {/* RIGHT DIV */}
          <div class="col-12 col-md-6">
            <div class="p-3 bg-light">
              {!showPayment
                ? <Shipmethod onContinue={() => setShowPayment(true)} />
                : <Paymentmethod />
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