import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navigation.css";
import logoImage from "../../assets/0.png";

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img src={logoImage} alt="Logo" className="logo-img" />
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          <li
            className="nav-item dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="nav-link">
              Services <FaChevronDown className="dropdown-icon" />
            </span>
            <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
              <li><Link to="/services/printing" className="nav-link">3D Printing Service</Link></li>
              <li><Link to="/services/printer" className="nav-link">3D Printer Service</Link></li>
              <li><Link to="/services/training" className="nav-link">3D Printing Training</Link></li>
            </ul>
          </li>
          <li className="nav-item"><Link to="/NDAMachines" className="nav-link">NDA Machines</Link></li>
          <li className="nav-item"><Link to="/career" className="nav-link">Career</Link></li>
          <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
        </ul>
          <Link to="/about#contact" className="contact-button desktop-only">Contact
  <div className="border-line top"></div>
  <div className="border-line bottom"></div>
  <div className="border-line left"></div>
  <div className="border-line right"></div></Link>
        
      </div>

      {/* Sidebar Menu (Mobile) */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleSidebar}>Home</Link>
        <Link to="/about" onClick={toggleSidebar}>About</Link>
        <Link to="/services/printing" onClick={toggleSidebar}>3D Printing Service</Link>
        <Link to="/services/printer" onClick={toggleSidebar}>3D Printer Service</Link>
        <Link to="/services/training" onClick={toggleSidebar}>3D Printing Training</Link>
        <Link to="/NDAMachines" onClick={toggleSidebar}>NDA Machines</Link>
        <Link to="/career" onClick={toggleSidebar}>Career</Link>
        <Link to="/blog" onClick={toggleSidebar}>Blog</Link>
        <Link to="/about#contact" className="mobile-only" onClick={toggleSidebar}>Contact</Link>
        
  
      </div>
    </nav>
  );
};

export default Navigation;
