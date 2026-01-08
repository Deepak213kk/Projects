import React, { useContext, useEffect, useState } from "react";
import "./cart.css";
import { CartContext } from "../context/CartContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Cart = () => {
  //const { cart, cartTotal, quantityIncrease, quantityDecrease } =
 // useContext(CartContext);

  const {
    cart,
    removeFromCart,
    quantityIncrease,
    quantityDecrease,
    cartTotal
  } = useContext(CartContext);

  const [discount, setdiscount] = useState(0);
  const [promocode, setpromocode] = useState("");
  const [Totalmrp, setTotalmrp] = useState(0);
  const [totalpay, settotalpay] = useState(0);

  // 🔹 Calculate totals
  useEffect(() => {
    const mrp = cart.reduce(
      (total, item) =>
        total + item.productId.price * item.quantity,
      0
    );

    setTotalmrp(mrp);
    settotalpay(Math.max(mrp - discount, 0));
  }, [cart, discount]);

  // 🔹 Promo code logic
  const Handlediscount = (e) => {
    e.preventDefault();

    if (promocode === "JUICE100") {
      setdiscount(100);
    } else if (promocode === "JUICE10") {
      setdiscount(Totalmrp * 0.1);
    } else {
      setdiscount(0);
      alert("Invalid Promocode");
    }
  };

  return (
    <div className="container gap-3 p-3 d-flex flex-column main-div">
      <h5>Your Cart</h5>

      <div className="gap-3 d-flex flex-column flex-md-row">
        {/* LEFT: CART ITEMS */}
        <div className="left-container flex-grow-1">
          {cart.map((item) => (
            <div
              className="p-3 mt-4 mb-2 shadow-sm rounded-4 row g-3 align-items-center"
              key={item.productId._id}
            >
              {/* IMAGE */}
              <div className="text-center col-12 col-sm-2">
                <img
                  src={item.productId.image}
                  alt={item.productId.name}
                  className="rounded-2 img-fluid"
                  style={{
                    maxWidth: "90px",
                    height: "90px",
                    objectFit: "cover"
                  }}
                />
              </div>

              {/* DETAILS */}
              <div className="col-12 col-sm-4">
                <strong>Name</strong>
                <p className="m-0">{item.productId.name}</p>
                <p className="m-0">{item.productId.description}</p>
              </div>

              {/* PRICE */}
              <div className="text-center col-6 col-sm-2">
                <strong>Price</strong>
                <p className="m-0">₹{item.productId.price}</p>
              </div>

              {/* QUANTITY */}
              <div className="text-center col-6 col-sm-3">
                <label>Quantity</label>
                <div className="gap-2 mt-2 d-flex align-items-center justify-content-center">
                  <button
                    className="p-0 border btn"
                    style={{ width: "30px" }}
                    onClick={() =>
                      quantityDecrease(item.productId._id)
                    }
                  >
                    –
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    className="p-0 border btn"
                    style={{ width: "30px" }}
                    onClick={() =>
                      quantityIncrease(item.productId._id)
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              {/* DELETE */}
              <div className="text-center col-12 col-sm-1">
                <RiDeleteBin6Line
                  size={22}
                  color="red"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    removeFromCart(item.productId._id)
                  }
                />
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: SUMMARY */}
        <div className="p-3 shadow-sm rounded-3" style={{ maxWidth: "350px" }}>
          <h6 className="mt-3 text-center">Summary</h6>

          <div className="gap-3 p-3 d-flex flex-column">
            <div className="d-flex justify-content-between">
              <span>Total MRP</span>
              <span>₹{Totalmrp.toFixed(2)}</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>Discount</span>
              <span>₹{discount.toFixed(2)}</span>
            </div>

            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>

            <input
              type="text"
              className="text-center form-control rounded-pill"
              placeholder="Enter promo code"
              value={promocode}
              onChange={(e) => setpromocode(e.target.value)}
            />

            <button
              className="mx-auto btn btn-dark rounded-pill w-50"
              onClick={Handlediscount}
            >
              Apply
            </button>

            <Link
              to="/shipping"
              className="btn btn-success rounded-pill w-100"
            >
              To Pay: ₹{totalpay.toFixed(2)} — Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
