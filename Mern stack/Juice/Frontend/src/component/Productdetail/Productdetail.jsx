import React, { useContext, useState } from 'react'
import './Productdetail.css'
import ScrollBar from '../scrollbar/ScrollBar.jsx'
//import Mosambi from '../../assets/MOsambi.png'
//import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
//import product from '../Data/Data.jsx';
import { FaBackward } from "react-icons/fa";
import Footer from '../Footer2/Footer.jsx';
import { useEffect } from 'react';
import { CartContext } from '../context/CartContext.jsx';
// import axios from 'axios';
// import { useEffect } from 'react';
//import { useEffect } from 'react';
const Productdetail = () => {
  const [activeTab, setActiveTab] = useState("description");
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  // const [currentproduct, setcurrentproduct] = useState(null)
  // const [loading, setloading] = useState(true)
  console.log(" id:", id);

  // 🔹 Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://projects-1-7puw.onrender.com/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();

        console.log("Fetched products:", data); // debug
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, [id]);

  // console.log("Products state:", products); // debug


  const currentproduct = products.find((prod) => prod._id === id);
  if (!currentproduct) {
    return <div className="py-5 text-center">Loading...</div>;
  }

  return (
    <>
      <div className="container py-4 position-relative">
        <div className="row g-4">

          {/* FILTER SIDEBAR */}
          <div className="col-12 col-lg-3">
            <div className="p-4 filters-side product-card rounded-4 h-100">
              <FaBackward className="mb-2" />

              <h5 className="p-2"><b>WEIGHT</b></h5>
              <div className="gap-2 p-2 d-flex flex-column">
                <label className="option">
                  <input type="checkbox" /> <span>200ml</span>
                </label>
                <label className="option">
                  <input type="checkbox" /> <span>250ml</span>
                </label>
                <label className="option">
                  <input type="checkbox" /> <span>500ml</span>
                </label>
              </div>

              <h5 className="p-2 mt-3"><b>Other</b></h5>
              <div className="gap-2 p-2 d-flex flex-column">
                <label className="option">
                  <input type="checkbox" /> <span>Sugar</span>
                </label>
                <label className="option">
                  <input type="checkbox" /> <span>Ice</span>
                </label>
                <label className="option">
                  <input type="checkbox" /> <span>Masala</span>
                </label>
              </div>
            </div>
          </div>

          {/* PRODUCT DETAILS */}
          <div className="col-12 col-lg-9">
            <div className="p-4 product-card rounded-4">

              {/* TOP SECTION */}
              <div className="row g-4 align-items-center">
                <div className="text-center col-12 col-md-5">
                  <img
                    src={currentproduct.image}
                    className="img-fluid rounded-4 product-img"
                    alt={currentproduct.name}
                  />
                </div>

                <div className="col-12 col-md-7">
                  <h3 className="fw-bold">{currentproduct.name}</h3>

                  <span className="mb-2 badge bg-success">
                    {currentproduct.rating} BestSeller ★
                  </span>

                  <div className="gap-2 mt-2 d-flex align-items-center">
                    <h4 className="m-0">₹{currentproduct.price}</h4>
                    <span className="text-orange fw-bold">
                      <b>{currentproduct.oldPrice}</b> <span class="text-muted text-decoration-line-through small">
                        80
                      </span> 40%Off
                    </span>
                  </div>
                </div>
              </div>

              {/* TABS */}
              <div className="flex-wrap gap-2 mt-4 d-flex">
                {["description", "ingredients", "nutrition"].map(tab => (
                  <button
                    key={tab}
                    className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* TAB CONTENT */}
              <div className="p-3 mt-3 border rounded-4">

                {activeTab === "description" && (
                  <p className="text-muted">
                    {currentproduct.description}
                  </p>
                )}

                {activeTab === "ingredients" && (
                  <ul className="text-muted">
                    {currentproduct.ingredients?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {activeTab === "nutrition" && (
                  <ul className="text-muted">
                    {Object.entries(currentproduct.nutrition || {}).map(
                      ([key, value]) => (
                        <li key={key}>
                          <strong>{key}:</strong> {value}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>

              {/* QUANTITY */}
              <div className="flex-wrap gap-3 mt-4 d-flex align-items-center justify-content-center">
                <button className="qty-btn" onClick={() => qty > 1 && setQty(qty - 1)}>
                  -
                </button>

                <span className="fs-5">{qty}</span>

                <button className="qty-btn" onClick={() => setQty(qty + 1)}>
                  +
                </button>

                <button className="px-4 btn btn-primary" onClick={() => addToCart(currentproduct._id)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

        </div>
        <h4 className="px-2 mt-5">Recommended for You</h4>
        <ScrollBar />

        <Footer />
      </div>

    </>
  );
};


export default Productdetail