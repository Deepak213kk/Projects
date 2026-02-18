import React, { useState, useEffect } from "react";
import axios from "axios";


const Shipmethod = ({ onContinue, setShowPayment }) => {
  const [contact, setContact] = useState("");
  const [addr, setAddr] = useState("");
  const [addressData, setAddressData] = useState(null);

  // FETCH ADDRESS
  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const res = await axios.get("https://projects-1-7puw.onrender.com/api/auth/update-profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (res.data) {
          setAddressData(res.data);
          setContact(res.data.contact || "");
          setAddr(res.data.address || "");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAddress();
  }, [addressData]);

  const [data, setdata] = useState()
  //const [ShowPayment, setShowPaymentState] = useState(true)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch("https://projects-1-7puw.onrender.com/api/auth/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch user");

        const data = await res.json();
        // console.log("Fetched user:", data);
        setdata(data);

      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  // SAVE / UPDATE ADDRESS
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put("http://localhost:5000/api/auth/update-profile", {
        contact: contact,
        address: addr,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      onContinue();
    } catch (error) {
      console.log(error);
    }
  };

  //   try {
  //     const res = await axios.post(
  //       "/api/address",
  //       {
  //         phone: contact,
  //         address: addr,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );

  //     setAddressData(res.data);
  //     onContinue(); // move to payment
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
                {data?.contact || "Not provided"}
              </p>

              <input
                type="text"
                placeholder="New contact"
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
                {data?.address || "Not provided"}
              </p>              <textarea
                placeholder="New address"
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
          <span className="fw-semibold">₹50</span>
        </div>

        {/* CONTINUE BUTTON */}
        <div className="d-flex justify-content-between align-items-center">
          <button
            type="submit"
            className="px-4 py-2 btn"
            style={{
              background: "#FF8A34",
              color: "#fff",
              borderRadius: "10px",
              fontWeight: "600",
            }}
            onClick={() => { setShowPayment(true) }}
          >
            previous Address
          </button>
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
