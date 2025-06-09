import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
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
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
          <li
            className="nav-item dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="nav-link">
              Services <FaChevronDown className="dropdown-icon" />
            </span>
            <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
              <li>
                <NavLink
                  to="/services/printing"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  3D Printing Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/printer"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  3D Printer Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/training"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  3D Printing Training
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink
              to="/NDAMachines"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              NDA Machines
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/career"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Career
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>

        <NavLink
          to="/about#contact"
          className="contact-button desktop-only"
        >
          Contact
          <div className="border-line top"></div>
          <div className="border-line bottom"></div>
          <div className="border-line left"></div>
          <div className="border-line right"></div>
        </NavLink>
      </div>

      {/* Sidebar Menu (Mobile) */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          onClick={toggleSidebar}
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={toggleSidebar}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/services/printing"
          onClick={toggleSidebar}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          3D Printing Service
        </NavLink>
        <NavLink
          to="/services/printer"
          onClick={toggleSidebar}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          3D Printer Service
        </NavLink>
        <NavLink
          to="/services/training"
          onClick={toggleSidebar}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          3D Printing Training
        </NavLink>
        <NavLink
          to="/NDAMachines"
          onClick={toggleSidebar}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          NDA Machines
        </NavLink>
        <NavLink
          to="/career"
          onClick={toggleSidebar}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Career
        </NavLink>
        <NavLink
          to="/blog"
          onClick={toggleSidebar}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Blog
        </NavLink>
        <NavLink
          to="/about#contact"
          onClick={toggleSidebar}
          className={({ isActive }) => (isActive ? "active mobile-only" : "mobile-only")}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
