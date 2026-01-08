import React, { useContext, useState, useEffect } from "react";
import menuImage from "../../assets/menu.jpg";
import "./Menu.css";
import Navbar from "../Navbar";
import Footer from "../Footer2/Footer";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import Filter from "./Filter.jsx";

const Menu = () => {
  const { addToCart } = useContext(CartContext);
  const [searchterm, setsearchterm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(500);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  // 🔹 Fetch products from backend
 useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products");
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

console.log("Products state:", products); // debug

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  // 🔹 Filter products
  const filteredProducts = products.filter((prod) => {
    const matchesSearch = prod.name.toLowerCase().includes(searchterm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(prod.category);
    const matchesPrice = prod.price <= priceRange;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <>
      <Navbar />
      <div
        className="mt-3 hero-section"
        style={{ backgroundImage: `url(${menuImage})`, opacity: 0.8 }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Juice <span>Veda</span></h1>
          <div className="search-box">
            <i className="bi bi-search"></i>
            <input
              type="text"
              placeholder="Search Fruit Juice"
              value={searchterm}
              onChange={(e) => setsearchterm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container gap-5 mt-5 mb-5 menu-main d-flex">
        <div className="left-side">
          <Filter
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
          />
        </div>

        <div className="right-side">
          <div className="row g-4">
            {filteredProducts.map((prod) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={prod._id}>
                <div className="product-card h-100">
                  <div
                    className="product-image"
                    onClick={() => handleProductClick(prod._id)}
                  >
                    <img src={prod.image}  alt={prod.name} />
                  </div>

                  <h3 className="product-title">{prod.name}</h3>
                  <p className="product-desc">{prod.description}</p>
                  <p className="product-price">₹{prod.price}</p>

                  <button
                    className="mt-auto add-btn"
                    onClick={() => addToCart(prod._id)} // backend expects productId
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Menu;
