import React, { useState, useEffect } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Header({ onUserClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "visible" : ""}`}>
      <div className="header-container">
        <img
          src="https://www.lakushop.id/images/icons/logo.png"
          alt="Lakushop Logo"
          className="logo-header"
        />
        <nav className="nav-desktop">
          <a href="/all-products">Home</a>
          <a href="/all-products">Products</a>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        {menuOpen && <div className="overlay" onClick={closeMenu}></div>}

        <nav className={`nav-mobile ${menuOpen ? "active" : ""}`}>
          <a href="#" onClick={closeMenu}>
            Home
          </a>
          <a href="#" onClick={closeMenu}>
            Products
          </a>
          <a href="#" onClick={closeMenu}>
            Transactions
          </a>
          <a href="#" onClick={closeMenu}>
            Profile
          </a>
        </nav>

        <div className="header-actions">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="icon"
            onClick={onUserClick}
          />
          <FontAwesomeIcon
            icon={faUser}
            className="icon"
            onClick={onUserClick}
          />
        </div>

        {/* <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div> */}
      </div>
    </header>
  );
}

export default Header;
