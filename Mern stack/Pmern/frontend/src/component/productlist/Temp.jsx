import React, { useState } from "react";
import "./product.css";
import { products } from "../Data/ProdutListdata"; // Import product data

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  
  // Get stored ID and convert it to a number
  const storedId = parseInt(localStorage.getItem("Id"), 10); 
  console.log("Stored ID:", storedId);

  // Find the product by ID
  const product = products.find((item) => item.id === storedId);
  console.log("Found Product:", product);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-container">
      <div className="image-gallery">
        {product.images.map((img, index) => (
          <img key={index} src={img} alt={product.Name} className="thumbnail" />
        ))}
      </div>

      <div className="product-details">
        <h2>{product.Name}</h2>
        <p className="price">{product.Price}</p>
        <p className="rating">⭐ {product.rating} ({product.reviews} reviews)</p>

        <div className="color-section">
          <p>Color: {product.color}</p>
          <div className="color-options">
            {product.availableColors?.map((color, index) => (
              <span key={index} className={`color-circle ${color}`} />
            ))}
          </div>
        </div>

        <div className="size-section">
          <p>Select a Size:</p>
          <div className="size-options">
            {product.sizes?.map((size) => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? "selected" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="add-to-cart">ADD TO CART</button>

        <div className="highlights">
          <h3>Key Highlights</h3>
          <ul>
            {Object.entries(product.highlights || {}).map(([key, value]) => (
              <li key={key}>
                <strong>{key.replace(/([A-Z])/g, " $1")}: </strong> {value}
              </li>
            ))}
          </ul>
        </div>

        <p className="shipping">🚚 Free Shipping | 7 Days Return & Exchange</p>
      </div>
    </div>
  );
};

export default ProductPage;
