import React from "react";
import "./JuiceFilter.css";
//import product from "../Data/Data.jsx";

const Filter = ({
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceChange,
}) => {
  return (
    <div className="filter-wrapper">
      <h5 className="filter-title">Filter Juices</h5>

      {/* Category Filter */}
      <div className="filter-section">
        <p className="section-title">Category</p>

        {["Diabetes", "Special Refreshment", "Energy Booster"].map(
          (category) => (
            <div className="filter-option" key={category}>
              <input
                type="checkbox"
                id={category}
                checked={selectedCategories.includes(category)}
                onChange={() => onCategoryChange(category)}
              />
              <label htmlFor={category}>{category}</label>
            </div>
          )
        )}
      </div>

      {/* Price Filter */}
      <div className="filter-section">
        <p className="section-title">Max Price</p>
        <input
          type="range"
          min="50"
          max="500"
          step="10"
          value={priceRange}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="price-range"
        />
        <p className="price-value">₹ {priceRange}</p>
      </div>
    </div>
  );
};

export default Filter;
