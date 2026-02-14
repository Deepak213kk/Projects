import React, { useEffect, useState } from 'react'

const Paymentmethod = ({ setShowPayment }) => {
  const [data, setdata] = useState()
  //const [ShowPayment, setShowPaymentState] = useState(true)
  useEffect(() => {
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch user");

      const data = await res.json();
      console.log("Fetched user:", data);
      setdata(data);

    } catch (err) {
      console.error(err);
    }
  };

  fetchUser();
}, []);



  return (
    <div className="p-3 bg-white min-vh-100 w-100 d-flex justify-content-center p-md-4">

      {/* 50% width on desktop */}
      <div className="mx-auto w-100" style={{ maxWidth: "600px" }}>

        {/* Contact & Shipping */}
        <div className="p-4 mb-4 border rounded" style={{ background: "#FFF9C4", borderColor: "#64B5F6" }}>

          <div className="mb-3 d-flex justify-content-between small">
            <div>
              <p className="mb-1 fw-semibold">Contact:</p>
              <p className="mb-0">{data?.contact || "plz provide contact"}</p>
            </div>
            <button className="p-0 btn btn-link" onClick={()=>{setShowPayment(false)}} >Change</button>
          </div>

          <div className="d-flex justify-content-between small">
            <div>
              <p className="mb-1 fw-semibold">Ship to:</p>
              <p className="mb-0">
                {data?.address || "plz provide address"}
              </p>
            </div>
            <button className="p-0 btn btn-link" onClick={()=>{setShowPayment(false)}} >Change</button>
          </div>

          <div className="mt-3 d-flex justify-content-between small">
            <p className="mb-0 fw-semibold">Shipping Method</p>
            <p className="mb-0">Standard — ₹50</p>
          </div>

        </div>

        {/* Payment Mode */}
        <div className="mb-4">
          <p className="mb-1 fw-semibold text-secondary">Payment Mode</p>
          <p className="mb-2 text-muted small">All transactions are secure and encrypted</p>

          <div className="gap-2 p-3 border rounded shadow-sm d-flex align-items-center">
            <p className="mb-0 small fw-semibold">Cards, UPI and Wallets,India</p>
            <div className="gap-1 opacity-75 ms-auto small d-flex">
              <span></span>
              <span>UPI</span>
              <span>PayPal</span>
              <span></span>
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
              <button className="underline cursor-pointer text-primary text-end" >change</button>
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