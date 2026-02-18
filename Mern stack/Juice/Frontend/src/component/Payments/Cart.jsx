import React, { useContext, useEffect, useState } from "react";
import "./cart.css";
import { CartContext } from "../context/CartContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    quantityIncrease,
    quantityDecrease,
    removeFromCart,
    settotal,
    total,
    promocode,
    setPromocode,
    Handlediscount,
    discount, // ✅ get from context
  } = useContext(CartContext);

  const [cart, setcart] = useState([]);
  const [Totalmrp, setTotalmrp] = useState(0);

  // ✅ FETCH CART
  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await fetch("https://projects-1-7puw.onrender.com/api/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setcart(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // ✅ CALCULATE TOTAL + APPLY CONTEXT DISCOUNT
  useEffect(() => {
    const mrp = cart?.reduce((total, item) => {
      return total + (item?.productId?.price || 0) * (item?.quantity || 0);
    }, 0);

    setTotalmrp(mrp || 0);

    // ✅ apply discount from context
    settotal(Math.max((mrp || 0) - (discount || 0), 0));
  }, [cart, discount, settotal]);

  return (
    <div className="container gap-3 p-3 d-flex flex-column main-div">
      <h5>Your Cart</h5>

      <div className="gap-3 d-flex flex-column flex-md-row">
        
        {/* LEFT */}
        <div className="left-container flex-grow-1">
          {cart?.map((item) => (
            <div
              className="p-3 mt-4 mb-2 shadow-sm rounded-4 row g-3 align-items-center"
              key={item.productId._id}
            >
              <div className="text-center col-12 col-sm-2">
                <img
                  src={item.productId.image}
                  alt={item.productId.name}
                  className="rounded-2 img-fluid"
                  style={{ maxWidth: "90px", height: "90px", objectFit: "cover" }}
                />
              </div>

              <div className="col-12 col-sm-4 d-flex flex-column">
                <strong>Name</strong>
                <p className="m-0 fw-semibold">{item.productId.name}</p>
                <span className="text-muted">
                  {item.productId.description}
                </span>
              </div>

              <div className="text-center col-6 col-sm-2">
                <strong>Price</strong>
                <p className="m-0">₹{item.productId.price}</p>
              </div>

              <div className="text-center col-6 col-sm-3">
                <label>Quantity</label>
                <div className="gap-2 mt-2 d-flex justify-content-center">
                  
                  <button
                    className="p-0 border btn"
                    style={{ width: "30px" }}
                    onClick={async () => {
                      await quantityDecrease(item.productId._id);
                      fetchCart();
                    }}
                  >
                    –
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    className="p-0 border btn"
                    style={{ width: "30px" }}
                    onClick={async () => {
                      await quantityIncrease(item.productId._id);
                      fetchCart();
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="text-center col-12 col-sm-1">
                <RiDeleteBin6Line
                  size={22}
                  color="red"
                  style={{ cursor: "pointer" }}
                  onClick={async () => {
                    await removeFromCart(item.productId._id);
                    fetchCart();
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="p-3 shadow-sm rounded-3" style={{ maxWidth: "350px" }}>
          <h6 className="mt-3 text-center">Summary</h6>

          <div className="gap-3 p-3 d-flex flex-column">
            
            <div className="d-flex justify-content-between">
              <span>Total MRP</span>
              <span>₹{(Totalmrp || 0).toFixed(2)}</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>Discount</span>
              <span>₹{(discount || 0).toFixed(2)}</span>
            </div>

            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>₹{(total || 0).toFixed(2)}</span>
            </div>

            <input
              type="text"
              className="text-center form-control rounded-pill"
              placeholder="Enter promo code"
              value={promocode}
              onChange={(e) => setPromocode(e.target.value)}
            />

            <button
              className="mx-auto btn btn-dark rounded-pill w-50"
              onClick={(e) => Handlediscount(e, Totalmrp)} // ✅ pass Totalmrp
            >
              Apply
            </button>

            <Link
              to="/shipping"
              className="btn btn-success rounded-pill w-100"
            >
              To Pay: ₹{(total || 0).toFixed(2)} — Checkout
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
