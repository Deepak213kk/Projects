import { useState } from "react";
import "./menu.css";

export default function SidebarFilter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close Filters" : "Open Filters"}
      </button>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="filter">
          <h4>Availability</h4>
          <span>▼</span>
        </div>
        <hr />
        <div className="filter">
          <h4>Price</h4>
          <span>▼</span>
        </div>
        <hr />
        <div className="filter">
          <h4>Category</h4>
          <span>▼</span>
        </div>
        <hr />
        <div className="filter">
          <h4>Color</h4>
          <span>▼</span>
        </div>
        <hr />
        <div className="filter">
          <h4>Size</h4>
          <span>▼</span>
        </div>
        <hr />
        <div className="filter">
          <h4>Fabric</h4>
          <span>▼</span>
        </div>
        <hr />
        <div className="filter">
          <h4>Collections</h4>
          <span>▼</span>
        </div>
      </div>
    </>
  );
}
