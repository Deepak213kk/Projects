import React, { useContext, useState, useEffect } from "react";
import menuImage from "../../assets/menu.jpg";
import "./Menu.css";
import Navbar from "../Navbar";
import Footer from "../Footer2/Footer";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import Filter from "./Filter.jsx";

const Menu = () => {
  const { addToCart } = useContext(CartContext);
  const [searchterm, setsearchterm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(500);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  // ✅ Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://projects-1-7puw.onrender.com/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  // ✅ Handlers
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

  // ✅ Filtering logic
  const filteredProducts = products.filter((prod) => {
    const matchesSearch = prod.name.toLowerCase().includes(searchterm.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(prod.category);
    const matchesPrice = prod.price <= priceRange;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <>
      <Navbar />

      {/* ✅ Hero Section */}
      <div
        className="mt-3 hero-section"
        style={{ backgroundImage: `url(${menuImage})` }}
      >
        <div className="hero-overlay"></div>

        <div className="text-center hero-content">
          <h1 className="hero-title">
            Juice <span>Veda</span>
          </h1>

          <div className="mx-auto search-box">
            <input
              type="text"
              placeholder="Search Fruit Juice"
              value={searchterm}
              onChange={(e) => setsearchterm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* ✅ Main Section */}
      <div className="container mt-5 mb-5">
        <div className="row">

          {/* ✅ MOBILE FILTER BUTTON */}
          <div className="mb-3 col-12 d-lg-none">
            <button
              className="btn btn-success w-100 rounded-pill"
              data-bs-toggle="collapse"
              data-bs-target="#mobileFilter"
            >
              Filter Juices
            </button>

            <div className="mt-3 collapse" id="mobileFilter">
              <div className="p-3 shadow-sm card rounded-4">
                <Filter
                  selectedCategories={selectedCategories}
                  onCategoryChange={handleCategoryChange}
                  priceRange={priceRange}
                  onPriceChange={setPriceRange}
                />
              </div>
            </div>
          </div>

          {/* ✅ DESKTOP FILTER */}
          <div className="col-lg-3 d-none d-lg-block">
            <div className="p-3 shadow-sm card rounded-4">
              <Filter
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
                priceRange={priceRange}
                onPriceChange={setPriceRange}
              />
            </div>
          </div>

          {/* ✅ PRODUCTS */}
          <div className="col-12 col-lg-9">
            <div className="row g-4">
              {filteredProducts.map((prod) => (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-4"
                  key={prod._id}
                >
                  <div className="border-0 shadow-sm card product-card h-100 rounded-4">

                    <div
                      className="product-image"
                      onClick={() => handleProductClick(prod._id)}
                    >
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="card-img-top rounded-top-4"
                      />
                    </div>

                    <div className="card-body d-flex flex-column">
                      <h5 className="fw-bold">{prod.name}</h5>

                      <p className="text-muted small">
                        {prod.description}
                      </p>

                      <h6 className="mt-auto fw-bold text-success">
                        ₹{prod.price}
                      </h6>

                      <button
                        className="mt-3 btn btn-warning w-100 rounded-pill"
                        onClick={() => addToCart(prod._id)}
                      >
                        Add to cart
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Menu;