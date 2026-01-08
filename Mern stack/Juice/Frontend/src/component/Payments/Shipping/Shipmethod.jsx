import React, { useState, useEffect } from "react";
import axios from "axios";


const Shipmethod = ({ onContinue }) => {
  const [contact, setContact] = useState("");
  const [addr, setAddr] = useState("");
  const [addressData, setAddressData] = useState(null);

  // FETCH ADDRESS
  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const res = await axios.get("/api/address", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (res.data) {
          setAddressData(res.data);
          setContact(res.data.phone);
          setAddr(res.data.address);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAddress();
  }, []);

  // SAVE / UPDATE ADDRESS
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "/api/address",
        {
          phone: contact,
          address: addr,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setAddressData(res.data);
      onContinue(); // move to payment
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container py-3">

        {/* CONTACT + SHIPPING BOX */}
        <div
          className="p-3 mb-3 rounded"
          style={{ background: "#FFFCE8", border: "1px solid #f0eccc" }}
        >
          {/* CONTACT */}
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <div>
              <span className="fw-semibold">Contact:</span>
              <p className="mb-1 text-muted" style={{ fontSize: "14px" }}>
                {addressData?.phone || "Not provided"}
              </p>

              <input
                type="text"
                placeholder="Enter contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="form-control"
              />
            </div>
          </div>

          <hr />

          {/* SHIPPING ADDRESS */}
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <span className="fw-semibold">Ship to:</span>
              <p className="mb-1 text-muted" style={{ fontSize: "14px" }}>
                {addressData?.address || "Not provided"}
              </p>

              <textarea
                placeholder="Enter address"
                value={addr}
                onChange={(e) => setAddr(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
        </div>

        {/* SHIPPING METHOD */}
        <h6 className="mb-2 fw-semibold">Shipping Method</h6>

        <div
          className="p-3 mb-4 rounded d-flex justify-content-between"
          style={{ background: "#D3F4CE", border: "1px solid #b2e3a5" }}
        >
          <span>Standard</span>
          <span className="fw-semibold">₹100</span>
        </div>

        {/* CONTINUE BUTTON */}
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 btn"
            style={{
              background: "#FF8A34",
              color: "#fff",
              borderRadius: "10px",
              fontWeight: "600",
            }}
            disabled={!contact || !addr}
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default Shipmethod;
