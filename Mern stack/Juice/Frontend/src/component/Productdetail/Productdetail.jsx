import React, { useState } from 'react'
import './Productdetail.css'
import ScrollBar from '../Scroll Bar/ScrollBar'
import Mosambi from '../../assets/MOsambi.png'
//import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import product from '../Data/Data.jsx';
 import { FaBackward } from "react-icons/fa";
import Footer from '../Footer2/Footer.jsx';
// import axios from 'axios';
// import { useEffect } from 'react';
//import { useEffect } from 'react';
const Productdetail = () => {
  const [activeTab, setActiveTab] = useState("description");
  const { id } = useParams();
  const [qty, setQty] = useState(1);
 
  // const [currentproduct, setcurrentproduct] = useState(null)
  // const [loading, setloading] = useState(true)

  const currentproduct = product.find((prod) => prod.id === Number(id))

  // useEffect(() => {
  //   axios.
  // }, [id]);
  
  

  return (
    <>
      <div className="container gap-4 py-4 d-flex justify-content-centerp position-relative">
        
          <div className='p-4 mb-5 w-25 filters-side product-card rounded-4'>
            <FaBackward className='s'/>
               <h5 className='p-3'>
            <b>WEIGHT</b>
          </h5>
          <div className='gap-3 p-3 d-flex flex-column'>

            <label className="gap-1 option">
              <input type="checkbox" />
              <span>200ml</span>
            </label>

            <label className="gap-1 option">
              <input type="checkbox" />
              <span>250ml</span>
            </label>

            <label className="gap-1 option">
              <input type="checkbox" />
              <span>500ml</span>
            </label>
          </div>
          <h5 className='p-3'>
            <b>Other</b>
          </h5>
          <div className='gap-3 p-3 d-flex flex-column'>

            <label className="gap-1 option">
              <input type="checkbox" />
              <span>Sugar</span>
            </label>

            <label className="gap-1 option">
              <input type="checkbox" />
              <span>Ice</span>
            </label>

            <label className="gap-1 option">
              <input type="checkbox" />
              <span>Masala</span>
            </label>
          </div> 
        </div>
        <div className="p-4 product-card rounded-4 w-75">

          {/* TOP SECTION */}
          <div className="row g-4">

            {/* Product Image */}
            <div className="col-md-5 d-flex justify-content-center align-items-center">
              <img src={currentproduct.image} className="rounded-4 product-img" alt="" />
            </div>

            {/* Product Info */}
            <div className="gap-2 col-md-7 d-flex flex-column justify-content-center">
              <h3 className="fw-bold">{currentproduct.name}</h3>

              <span className="p-2 badge bg-success w-fit">
                {currentproduct.rating} &#9733;
              </span>

              <div className="gap-3 d-flex align-items-center">
                <h4 className="m-0">{currentproduct.price}</h4>
                <span className="text-orange fw-bold">{currentproduct.oldPrice} Off</span>
              </div>
            </div>
          </div>

          {/* TABS */}
          <div className="mt-4 tabs">
            <button
              className={`tab-btn ${activeTab === "description" ? "active" : ""}`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>

            <button
              className={`tab-btn ${activeTab === "ingredients" ? "active" : ""}`}
              onClick={() => setActiveTab("ingredients")}
            >
              Ingredients
            </button>

            <button
              className={`tab-btn ${activeTab === "nutrition" ? "active" : ""}`}
              onClick={() => setActiveTab("nutrition")}
            >
              Nutrition
            </button>
          </div>

          {/* TAB CONTENT */}
          <div className="p-3 mt-2 border tab-content rounded-4">

            {activeTab === "description" && (
              <p className="text-muted">
                {currentproduct.description}
              </p>
            )}

            {activeTab === "ingredients" && (
              <ul className="text-muted">
                {
                  currentproduct.ingredients.map((prod) => <li>{prod}</li>
                  )
                }
                {/* <li>Fresh Sweet Lemon (Mosambi)</li>
              <li>Pure Filtered Water</li>
              <li>Natural Sugar</li>
              <li>No artificial color</li>
              <li>No preservatives</li> */}
              </ul>
            )}

            {activeTab === "nutrition" && (
              <ul className="text-muted">
                {Object.entries(currentproduct.nutrition).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* QUANTITY + ADD TO CART */}
          <div className="gap-3 mt-4 d-flex align-items-center justify-content-center">

            <button
              className="qty-btn"
              onClick={() => qty > 1 && setQty(qty - 1)}
            >
              -
            </button>

            <span className="fs-5">{qty}</span>

            <button
              className="qty-btn"
              onClick={() => setQty(qty + 1)}
            >
              +
            </button>

            <button className="px-4 btn btn-primary add-cart-btn">
              Add to Cart
            </button>

          </div>

        </div>
      

      </div >
      
      <div>
        <h4 className='px-5 pb-3'>Recommanded for You</h4>
        <ScrollBar />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};


export default Productdetail