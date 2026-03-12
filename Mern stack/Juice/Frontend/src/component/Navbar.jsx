import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="px-3 navbar navbar-light bg-light position-relative">

      {/* Logo */}
      <Link className="navbar-brand" to="/home">
        <img src={logo} height="40" alt="logo" />
      </Link>

      {/* Desktop Menu */}
      <ul className="flex-row gap-4 navbar-nav d-none d-lg-flex">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/menu">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Right Icons */}
      <div className="gap-3 d-flex align-items-center ms-auto">

        {/* Cart */}
        {/* edit for admin dashboard link
        <Link to={"/dashboard"}> Admin</Link> */}
        <Link to="/cart" className="text-dark fs-5">
          <FaShoppingCart />
        </Link>

        {/* Auth Buttons */}
        {isLoggedIn ? (
          <button
            className="btn btn-danger d-none d-lg-block"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-primary me-2 d-none d-lg-block">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="btn btn-success d-none d-lg-block">
                Signup
              </button>
            </Link>
          </>
        )}

        {/* Mobile Hamburger */}
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
          <Link to="/" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          {isLoggedIn ? (
            <button className="mt-3 btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">
                <button className="mt-3 btn btn-primary w-100">
                  Login
                </button>
              </Link>

              <Link to="/signup">
                <button className="mt-2 btn btn-success w-100">
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;