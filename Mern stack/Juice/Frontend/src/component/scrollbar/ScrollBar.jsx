import React, { useEffect, useState } from 'react';
import './scroll.css' ;
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

const ScrollBar = () => {
    const [products, setProducts] = useState([]);
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
}, []);
  return (
    <>
    
    <div className="featured-container ">
      {products.map((products)=>(
          <div className='featured-scroll'>
        <div className='feature-img'> <img src={products.image} alt="" /></div>
        <div>
          <h5> {products.name}</h5>
          <p>
           {products.description}
          </p>
          <span>₹ {products.price}</span>
          <div className='review'> <IoMdStar color='#FFC107'/><IoMdStar color='#FFC107'/> <IoMdStar color='#FFC107'/> <IoMdStarHalf color='#FFC107'/> <IoMdStarOutline color='#FFC107'/> </div>
          <button className='btn btn-primary'>Add to Cart</button>
        </div>
        
      </div>
      ))}    
    </div>
    </>
  );
};

export default ScrollBar;
