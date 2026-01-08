import { useState } from "react";
import { Link } from "react-router-dom";
import "./head.css"
import Login from "../Login/Login";
//import {Products} from "../Data/ProdutListdata"
export default function Header() {
  // localStorage.removeItem("cartdata");
  // localStorage.removeItem("cart");
  const cartData = JSON.parse(localStorage.getItem("newcartdata")) || [];
//console.log("Cart Data from Local Storage:", cartData);
  const [isVisible, setIsVisible] = useState(false);
  const [profile, setprofile] = useState(false)
   const [quantity, setQuantity] = useState(1);
   const [removeCart, setremoveCart] = useState([]);
   console.log(removeCart)
   localStorage.setItem("removecart", JSON.stringify(removeCart)); 
    const price = 799;
    const total = price * quantity;
    const profiletoggle =() =>{
      setprofile(!profile);
    }
    const handleToggle = () => {
      setIsVisible(!isVisible);
      

    };
    const removeFromCart = (id) => {
      setremoveCart(cartData.filter((item) => item.id !== id)); // Remove by ID
    };
    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => {
      if (quantity > 1) setQuantity(quantity - 1);
    };
    return (
      <div style={{ fontFamily: "Arial, sans-serif" }} className="maindiv">
        {/* Top Banner */}
        <div
          style={{
            background: "#f8f5f0",
            textAlign: "center",
            padding: "5px",
            fontSize: "12px",
          }}
        >
          <Link to={'/temoc'} style={{color:'inherit',textDecoration:"none"}}> LOVED BY 5,00,000+ WOMEN | 100% REFUND IF YOU DON'T ❤️ IT </Link>
        </div>
        {/* Header Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            borderBottom: "1px solid #eee",
          }}
        >
          {/* Left Icons */}
          <div style={{ display: "flex", gap: "10px", fontSize: "20px" }}>
            <span>☰</span> {/* Menu icon */}
            <span>🔍</span> {/* Search icon */}
          </div>
          {/* Logo */}
          <div style={{ fontSize: "18px", fontWeight: "bold" }}>
            <span style={{ marginRight: "5px" }}>सादा </span>| SAADAA
          </div>
          {/* Right Icons */}
          <div style={{ display: "flex", gap: "10px", fontSize: "20px" }}>
            <span style={{ position: "relative" }} onClick={profiletoggle}> 👤</span>
            <span style={{ position: "relative" }} onClick={handleToggle}>
            👜
               {/* Bag icon */}
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-5px",
                  background: "yellow",
                  color: "black",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                }}
              >
                {cartData.length}
              </span>
            </span>
          </div>
        </div>
        { isVisible && (<div className="cart-container">
      <h2 className="cart-title">Your Cart ( '{cartData.length}' )</h2>

      <div className="cart-banner">
        <span>5,00,000+ Happy Customers ❤️</span>
        <p>✔ Free Returns ✔ Free Exchanges ✔ Secure Payments</p>
      </div>
      {
        cartData.map((v,i)=>{
          return(
            <div className="cart-item">  
            <img
              src={v.image} // Replace with actual product image
              alt="Product"
              className="product-image"
            />
            <div className="product-info" key={i}>
              <h3 className="product-name">{v.Name}.</h3>
              <p className="product-price">₹{v.Price}</p>
              <div className="cart-controls">
                <span className="size-box">L</span>
                <div className="quantity-controls">
                  <button onClick={handleDecrease}>-</button>
                  <span>{quantity}</span>
                  <button onClick={handleIncrease}>+</button>
                </div>
                <button className="remove-button" onClick={() => removeFromCart(v.id)}>Remove</button>
              </div>
            </div>
          </div>
          )
        })
      }
      <div className="coupon-section">
        <input type="text" placeholder="Enter Coupon Code" />
        <button className="view-coupons">View All Coupons &gt;</button>
      </div>

      <button className={` cartData.length > 1 ? discount-button : discountshow` }>
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
    </div>)}
    {
      !profile && (
        <div className="cart-container">
          hello
          <Login />
        </div>
      )
    }
      </div>
    );
  }
  