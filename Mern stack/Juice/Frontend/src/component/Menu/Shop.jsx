import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import menuImage from "../../assets/menu.jpg";
import "./shop.css";

const API_URL = "https://projects-1-7puw.onrender.com/api/products";

// Replace this with your actual WhatsApp number.
// Include country code, without + or spaces.
const WHATSAPP_NUMBER = "917208236401";

const categories = [
  {
    name: "Mosambi",
    subtitle: "Sweet & refreshing",
    keywords: ["mosambi", "sweet lime"],
    emoji: "🍈",
  },
  {
    name: "Orange",
    subtitle: "Citrus goodness",
    keywords: ["orange"],
    emoji: "🍊",
  },
  {
    name: "Pineapple",
    subtitle: "Tropical delight",
    keywords: ["pineapple", "pine apple"],
    emoji: "🍍",
  },
];

const benefits = [
  {
    icon: "🍃",
    title: "Freshly Prepared",
    description:
      "Prepared fresh for your order using carefully selected fruit.",
  },
  {
    icon: "🍊",
    title: "Quality Ingredients",
    description:
      "Real fruit goodness with no added preservatives or refined sugar in our fresh juices.",
  },
  {
    icon: "🧼",
    title: "Hygienic Preparation",
    description:
      "Careful preparation and clean packaging for every order.",
  },
  {
    icon: "🛵",
    title: "Fast Delivery",
    description:
      "Enjoy refreshing juices delivered across Mumbai and Navi Mumbai, where available.",
  },
];

const Menu = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(false);

        const res = await fetch(API_URL);

        if (!res.ok) {
          throw new Error("Unable to load products");
        }

        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Product fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getProductText = (product) =>
    `${product.name || ""} ${product.category || ""}`.toLowerCase();

  const matchesCategory = (product, categoryName) => {
    if (categoryName === "All") return true;

    const category = categories.find(
      (item) => item.name === categoryName
    );

    return category?.keywords.some((keyword) =>
      getProductText(product).includes(keyword)
    ) ?? false;
  };

  const visibleProducts = products.filter((product) =>
    matchesCategory(product, selectedCategory)
  );

  const featuredProducts = visibleProducts.filter(
    (product) => product.isFeatured === true || product.featured === true
  );

  // const bestSellerProducts = visibleProducts.filter(
  //   (product) =>
  //     product.isBestSeller === true || product.bestSeller === true
  // );

  // If your database has no featured/bestseller flags yet,
  // display products as a fallback so the sections aren't empty.
  const featuredToDisplay =
    featuredProducts.length > 0
      ? featuredProducts.slice(0, 4)
      : visibleProducts.slice(0, 4);

  // const bestSellersToDisplay =
  //   bestSellerProducts.length > 0
  //     ? bestSellerProducts.slice(0, 4)
  //     : visibleProducts.slice(0, 4);

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Juice Veda Corner! I'd like to order fresh juice. Please share the available juices and prices."
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const scrollToMenu = () => {
    document.getElementById("popular-categories")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);

    document.getElementById("featured-juices")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const renderProductCard = (product) => (
    <article className="jv-product-card" key={product._id}>
      <button
        className="jv-product-image"
        onClick={() => navigate(`/product/${product._id}`)}
        aria-label={`View ${product.name}`}
      >
        <img
          src={product.image || menuImage}
          alt={product.name}
          loading="lazy"
        />
      </button>

      <div className="jv-product-info">
        <h3>{product.name}</h3>

        <p className="jv-product-description">
          {product.description || "Freshness in every sip."}
        </p>

        <div className="jv-product-bottom">
          <span className="jv-product-price">
            ₹{product.price}
          </span>

          <button
            className="jv-add-button"
            onClick={() => addToCart(product._id)}
          >
            <span aria-hidden="true">+</span> Add
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <main className="juice-veda-home">
      {/* HERO */}
      <section
        className="jv-hero"
        style={{ "--hero-image": `url("${menuImage}")` }}
      >
        <div className="jv-hero-overlay" />

        <div className="jv-hero-content">
          <span className="jv-eyebrow">
            FRESH FRUIT. FRESH FEELING.
          </span>

          <h1>
            Sip Fresh.
            <br />
            <span>Feel the Goodness.</span>
          </h1>

          <p>
            Your daily dose of fruity freshness.
            Discover refreshing juices made for your happy moments.
          </p>

          <div className="jv-hero-actions">
            <button className="jv-primary-button" onClick={scrollToMenu}>
              Order Now <span aria-hidden="true">→</span>
            </button>

            <button
              className="jv-whatsapp-button"
              onClick={openWhatsApp}
            >
              <span aria-hidden="true">◉</span> Order via WhatsApp
            </button>
          </div>

          <div className="jv-hero-note">
            <span>✳</span> Fresh choices, happy sips.
          </div>
        </div>
      </section>

      {/* POPULAR CATEGORIES */}
      <section className="jv-section jv-categories" id="popular-categories">
        <div className="jv-section-heading">
          <div>
            <span className="jv-eyebrow">FIND YOUR FAVOURITE</span>
            <h2>Popular Categories</h2>
            <p>Which refreshing flavour are you craving today?</p>
          </div>

          <button
            className="jv-text-link"
            onClick={() => handleCategoryClick("All")}
          >
            Explore all juices →
          </button>
        </div>

        <div className="jv-category-grid">
          {categories.map((category) => {
            const product = products.find((item) =>
              matchesCategory(item, category.name)
            );

            return (
              <button
                className={`jv-category-card ${
                  selectedCategory === category.name ? "active" : ""
                }`}
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
              >
                <div className="jv-category-image">
                  {product?.image ? (
                    <img src={product.image} alt={category.name} />
                  ) : (
                    <img src={menuImage} alt={category.name} />
                  )}
                  <span className="jv-category-emoji">
                    {category.emoji}
                  </span>
                </div>

                <div className="jv-category-info">
                  <div>
                    <h3>{category.name}</h3>
                    <p>{category.subtitle}</p>
                  </div>
                  <span className="jv-category-arrow">↗</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* FEATURED JUICES */}
      <section className="jv-section jv-featured" id="featured-juices">
        <div className="jv-section-heading">
          <div>
            <span className="jv-eyebrow">HANDPICKED FOR YOU</span>
            <h2>Featured Juices</h2>
            <p>Fresh favourites for your everyday refreshment.</p>
          </div>

          <button
            className="jv-text-link"
            onClick={() => setSelectedCategory("All")}
          >
            View all →
          </button>
        </div>

        <div className="jv-filter-chips">
          {["All", "Mosambi", "Orange", "Pineapple"].map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category ? "jv-chip active" : "jv-chip"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="jv-message">Preparing your juice menu...</p>
        ) : error ? (
          <p className="jv-message">
            Unable to load juices right now. Please try again shortly.
          </p>
        ) : featuredToDisplay.length > 0 ? (
          <div className="jv-product-grid">
            {featuredToDisplay.map(renderProductCard)}
          </div>
        ) : (
          <p className="jv-message">
            No juices found in this category yet.
          </p>
        )}
      </section>

      {/* BESTSELLERS */}
      {/* <section className="jv-section jv-bestsellers">
        <div className="jv-section-heading">
          <div>
            <span className="jv-eyebrow">CUSTOMER FAVOURITES</span>
            <h2>Our Bestsellers</h2>
            <p>The refreshing picks worth coming back for.</p>
          </div>
          <span className="jv-bestseller-mark">♥ Made with freshness</span>
        </div>

        {!loading && !error && bestSellersToDisplay.length > 0 ? (
          <div className="jv-product-grid">
            {bestSellersToDisplay.map(renderProductCard)}
          </div>
        ) : (
          <p className="jv-message">
            {loading
              ? "Loading bestsellers..."
              : error
                ? "Bestsellers are temporarily unavailable."
                : "Your favourites will appear here soon."}
          </p>
        )}
      </section> */}

      {/* WHY CHOOSE JUICE VEDA */}
      <section className="jv-why">
        <div className="jv-why-heading">
          <span className="jv-eyebrow">A LITTLE GOODNESS IN EVERY GLASS</span>
          <h2>Why Choose Juice Veda?</h2>
          <p>
            Good fruit, careful preparation and refreshing moments
            in every order.
          </p>
        </div>

        <div className="jv-benefit-grid">
          {benefits.map((benefit) => (
            <article className="jv-benefit-card" key={benefit.title}>
              <div className="jv-benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Menu;