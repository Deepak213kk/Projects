import React, { useState } from "react";
import "./cart.css";

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const price = 799;
  const total = price * quantity;
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart (1 item)</h2>

      <div className="cart-banner">
        <span>5,00,000+ Happy Customers ❤️</span>
        <p>✔ Free Returns ✔ Free Exchanges ✔ Secure Payments</p>
      </div>

      <div className="cart-item">
        <img
          src="https://via.placeholder.com/50" // Replace with actual product image
          alt="Product"
          className="product-image"
        />
        <div className="product-info">
          <h3 className="product-name">Hot Pink Airy Linen Short...</h3>
          <p className="product-price">₹{price}</p>
          <div className="cart-controls">
            <span className="size-box">L</span>
            <div className="quantity-controls">
              <button onClick={handleDecrease}>-</button>
              <span>{quantity}</span>
              <button onClick={handleIncrease}>+</button>
            </div>
            <button className="remove-button">Remove</button>
          </div>
        </div>
      </div>

      <div className="coupon-section">
        <input type="text" placeholder="Enter Coupon Code" />
        <button className="view-coupons">View All Coupons &gt;</button>
      </div>

      <button className="discount-button">
        Add 1 more product to unlock discounts!
      </button>

      <div className="total-section">
        <h3>Estimated Total</h3>
        <p className="total-price">₹{total}</p>
      </div>

      <button className="place-order">
        Place Order <span className="upi-discount">(Get 5% Off on UPI)</span>
      </button>

      <p className="money-back">✓ 7-Day Money Back Guarantee</p>
    </div>
  );
}
