import React from 'react'

const Paymentmethod = () => {
    return (
          <div className="p-3 bg-white min-vh-100 w-100 d-flex justify-content-center p-md-4">

      {/* 50% width on desktop */}
      <div className="mx-auto w-100" style={{ maxWidth: "600px" }}>

        {/* Contact & Shipping */}
        <div className="p-4 mb-4 border rounded" style={{ background: "#FFF9C4", borderColor: "#64B5F6" }}>
          
          <div className="mb-3 d-flex justify-content-between small">
            <div>
              <p className="mb-1 fw-semibold">Contact:</p>
              <p className="mb-0">omkarkoli7412@gmail.com</p>
            </div>
            <button className="p-0 btn btn-link">Change</button>
          </div>

          <div className="d-flex justify-content-between small">
            <div>
              <p className="mb-1 fw-semibold">Ship to:</p>
              <p className="mb-0">
                Mumbai, maharashtra, chembur camp, 400074<br />
                Mumbai MH, India
              </p>
            </div>
            <button className="p-0 btn btn-link">Change</button>
          </div>

          <div className="mt-3 d-flex justify-content-between small">
            <p className="mb-0 fw-semibold">Shipping Method</p>
            <p className="mb-0">Standard — ₹100</p>
          </div>

        </div>

        {/* Payment Mode */}
        <div className="mb-4">
          <p className="mb-1 fw-semibold text-secondary">Payment Mode</p>
          <p className="mb-2 text-muted small">All transactions are secure and encrypted</p>

          <div className="gap-2 p-3 border rounded shadow-sm d-flex align-items-center">
            <p className="mb-0 small fw-semibold">Cards, UPI, NB, Wallets, BNPL by PayU India</p>
            <div className="gap-1 opacity-75 ms-auto small d-flex">
              <span>VISA</span>
              <span>UPI</span>
              <span>PayPal</span>
              <span>Mastercard</span>
            </div>
          </div>
        </div>

        {/* Billing Address */}
        <div className="mb-4">
          <p className="mb-1 fw-semibold text-secondary">Billing address</p>
          <p className="mb-2 text-muted small">Select the address that matches your card or payment method</p>

          <div className="border rounded">
            <label className="gap-2 p-3 d-flex align-items-center border-bottom">
              <input type="radio" name="billing" defaultChecked />
              <span className="small">Shipping as same address</span>
            </label>

            <label className="gap-2 p-3 d-flex align-items-center">
              <input type="radio" name="billing" />
              <span className="small">Use a different billing address</span>
            </label>
          </div>
        </div>

        {/* Pay Button */}
        <button className="py-2 text-white btn w-100 fs-5 fw-semibold"
                style={{ backgroundColor: "#FFA726" }}>
          Pay Now
        </button>

      </div>
    </div>
    )
}

export default Paymentmethod