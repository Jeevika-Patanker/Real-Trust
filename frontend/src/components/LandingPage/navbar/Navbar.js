import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../../../asset/Images/logo.svg';


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (

    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`navbar-links ${menuOpen ? 'show' : ''}`}>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <Link to="/login" className="admin-link">Admin</Link>
          <a href="#contact" className="navbar-btn">Contact</a>

        </nav>


      </div>
    </header>
  );
}

export default Navbar;
