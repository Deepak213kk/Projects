import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!token) navigate("/");
  }, [token, navigate]);

  if (!token) return null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="px-3 navbar navbar-light bg-light position-relative">

      {/* Logo */}
      <Link className="navbar-brand" to="/home">
        <img src={logo} height="40" alt="logo" />
      </Link>

      {/* Desktop Menu */}
      <ul className="flex-row gap-4 navbar-nav d-none d-lg-flex">
        <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/menu">Shop</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
      </ul>

      {/* Right icons */}
      <div className="gap-3 d-flex align-items-center ms-auto">

        {/* Cart (always visible) */}
        <Link to="/cart" className="text-dark fs-5">
          <FaShoppingCart />
        </Link>

        {/* Logout (desktop only) */}
        <button
          className="btn btn-danger d-none d-lg-block"
          onClick={handleLogout}
        >
          Logout
        </button>

        {/* Hamburger (mobile only) */}
        <button
          className="btn d-lg-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu-bts d-lg-none">
          <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/menu" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          <button className="mt-3 btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
