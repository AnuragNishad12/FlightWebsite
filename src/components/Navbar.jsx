import React, { useState } from 'react';
import '../pages/navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav>
      <div className="menu">
        <div className="logo">
          <a href="/">
            <img src="/images/logo.png" alt="Logo" />
          </a>
        </div>

        <input
          type="checkbox"
          id="check"
          checked={menuOpen}
          onChange={toggleMenu}
        />

        <ul className={menuOpen ? "open" : ""}>
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/">Deal of The Day</a></li>
          <li className={`dropdown ${dropdownOpen ? 'active' : ''}`}>
            <a 
              href="#"
              onClick={toggleDropdown}
            >
              Explore {dropdownOpen ? '▲' : '▼'}
            </a>
            {dropdownOpen && (
              <ul className="sub-menu mobile-dropdown">
                <li><a href="/p">Jets</a></li>
                <li><a href="/helicopter">Chopper</a></li>
                <li><a href="/yacht">Yacht</a></li>
                <li><a href="/c">Car</a></li>
              </ul>
            )}
          </li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="#contact-sec">Contact</a></li>
          <li><button className="login-button">Enquiry</button></li>
        </ul>

        <label htmlFor="check" className="btn bars">
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;