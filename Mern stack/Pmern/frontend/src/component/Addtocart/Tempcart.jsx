import React, { useState } from "react";
import "./tempc.css";

const products = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 15 },
  { id: 3, name: "Product C", price: 20 }
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container">
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Cart</h2>
      <ul className="cart">
        {cart.map((item, index) => (
          <li key={index}><h1> this is dtat</h1>{item.name} - ${item.price} </li>
        ))}
      </ul>
    </div>
  );
}
