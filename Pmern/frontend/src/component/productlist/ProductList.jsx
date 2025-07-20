import React, { useEffect, useState } from 'react'
import "./temp.css"
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { LiaRupeeSignSolid } from "react-icons/lia";
//import Productdetail from "../productlist/Productdetail"
import {products} from "../Data/ProdutListdata"
import { Link } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';
const ProdductList = () => {
    // const products = [
    //     { id: 1, name: "Rose Taupe Airy Linen Short Kurta", price: "₹ 799", rating: 4.8, bestseller: true, image: "rose-taupe.jpg" },
    //     { id: 2, name: "Yellow Airy Linen Short Kurta", price: "₹ 799", rating: 4.8, bestseller: true, image: "yellow.jpg" },
    //     { id: 3, name: "Lilac Airy Linen Short Kurta", price: "₹ 799", rating: 4.8, bestseller: false, image: "lilac.jpg" },
    //     { id: 4, name: "Black Airy Linen Short Kurta", price: "₹ 799", rating: 4.8, bestseller: false, image: "black.jpg" },
    //     { id: 5, name: "Yellow Airy Linen Short Kurta", price: "₹ 799", rating: 4.8, bestseller: true, image: "yellow.jpg" },
        
    //   ];
    const [Id, setId] = useState("")
        const [available, setAvailable] = useState(false);
        const [price, setPrice] = useState(false);
        const [color, setColor] = useState(false);
        const [handles, setHandles] = useState(false);
        const [material, setMaterial] = useState(false);
        // Track hovered product
      console.log(Id)

  useEffect(() => {
    localStorage.setItem("Id", Id);
  }, [Id]);
        return (
          <>
            <div>
             <Header/>
              <div className="basket">
                <h5 className="underline">FILTERS</h5>
      
                <div className="filter-item">
                  <h6 onClick={() => setAvailable(!available)}>Availability</h6>
                  {available && (
                    <div className="filter-options">
                      <label><input type="checkbox" name='instock' /> In Stock</label><br />
                      <label><input type="checkbox" name='outstock' /> Out of Stock</label>
                    </div>
                  )}
                </div>
      
                <div className="filter-item">
                  <h6 onClick={() => setPrice(!price)}>Price</h6>
                  {price && (
                    <div className="filter-options">
                      <label><input type="radio" name='price' /> Under 500</label><br />
                      <label><input type="radio" name='price' /> 500 - 1000</label><br />
                      <label><input type="radio" name='price' /> Over 1000</label>
                    </div>
                  )}
                </div>
      
                <div className="filter-item">
                  <h6 onClick={() => setColor(!color)}>Colour</h6>
                  {color && (
                    <div className="filter-options">
                      <label><input type="checkbox" name='black' /> Black</label><br />
                      <label><input type="checkbox" name='white' /> White</label><br />
                      <label><input type="checkbox" name='grey' /> Grey</label>
                    </div>
                  )}
                </div>
      
                <div className="filter-item">
                  <h6 onClick={() => setHandles(!handles)}>Handles</h6>
                  {handles && (
                    <div className="filter-options">
                      <label><input type="checkbox" name='yes' /> With Handles</label><br />
                      <label><input type="checkbox" name='no' /> Without Handles</label>
                    </div>
                  )}
                </div>
      
                <div className="filter-item">
                  <h6 onClick={() => setMaterial(!material)}>Material</h6>
                  {material && (
                    <div className="filter-options">
                      <label><input type="checkbox" name='woven' /> Woven Fiber</label><br />
                      <label><input type="checkbox" name='plastic' /> Recycled Plastic</label>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
            <div className="header">
        <h1>AIRY-LINEN SHORT KURTAS</h1>
        <p>
          Stay All Time Ready with सादा | SAADAA's Airy Linen Short Kurta available in
          10+ colors. Made from Cotton Linen Blend Fabric making it suitable for both
          office and casual outfits. A perfect pick for your capsule wardrobe.
        </p>
        <p className="product-count">19 products</p>
      </div>

      <div className="filters-sort">
        <div className="filters"> 
          <span>☰</span> 
        </div>
        <div className="sort">Sort by ▼</div>
      </div>
            </div>
      
            <div className='main'>
            <div className="product-listing">
      

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="grid-item">
            {product.bestseller && <span className="bestseller">BEST SELLER</span>}
           <Link  to={'/productdetail'} style={{textDecoration:'none' , color :"inherit"}}>  <img  key={product.id} src={product.images} alt={product.name} className="product-image" onClick={()=>{ setId(product.id)}}  /></Link>
            <h3><Link to={'/productdetail'} style={{textDecoration:'none' , color :"inherit"}}> {product.Name} </Link></h3>
            <p className="price"> <Link to={'/productdetail'} style={{textDecoration:'none' , color :"inherit"}}><LiaRupeeSignSolid style={{color:'black'}}/> {product.Price} </Link></p>
            
            <p className="rating">⭐⭐⭐⭐ {product.rating}</p>
          </div>
        ))}
      </div>
    </div>
            </div>
            <div>
        <Footer/>
      </div>
          </>
        );
      };

export default ProdductList