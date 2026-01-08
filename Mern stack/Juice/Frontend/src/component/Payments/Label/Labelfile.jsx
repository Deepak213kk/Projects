import React from "react";
import logo from "../../../assets/Logo.png"; // update path as needed

const Labelfile = ({ current }) => {
  const steps = ["Cart", "Information", "Shipping", "Payment"];

  return (
    <div className="flex-wrap gap-3 py-3 d-flex align-items-center">

      {/* Logo */}
      <img
        src={logo}
        alt="Juice Veda"
        style={{
          height: "45px",
          width: "45px",
          objectFit: "contain",
          borderRadius: "6px",
          border: "2px solid #4A90E2",
        }}
      />

      {/* // while calling this file <Labelfile current="Cart" /> */}

      {/* Steps */}
      <div className="flex-wrap gap-2 d-flex">
        {steps.map((step, index) => (
          <div key={index} className="gap-1 d-flex align-items-center">
            <span
              style={{
                fontWeight: current === step ? "600" : "400",
                color: current === step ? "black" : "#444",
              }}
            >
              {step}
            </span>
            {index < steps.length - 1 && <span>›</span>}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Labelfile;
