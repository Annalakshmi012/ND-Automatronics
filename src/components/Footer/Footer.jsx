import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/0.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-column">
          <img src={logo} alt="ND Automatronics Logo" className="footer-logo-img" />
          <p>ND 3D PRINTING INDUSTRY</p>
        </div>

        {/* Quick Links & Stay Connected */}
        <div className="footer-column footer-links-stayconnected">
          {/* Quick Links */}
          <div className="footer-subsection">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services/printing">Our Services</Link></li>
              <li><Link to="/NDAMachines">NDAMachines</Link></li>
              <li><Link to="/blog">Blog Posts</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="footer-subsection">
            <h4>Stay Connected</h4>
            <ul>
              <li><a href="https://www.facebook.com/ndautomatronics3d/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i> Facebook</a></li>
              <li><a href="https://www.instagram.com/ndautomatronics/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/ndautomatronics/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
              <li><a href="https://www.youtube.com/@NDAutomatronic" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i> YouTube</a></li>
              <li><a href="https://api.whatsapp.com/send?phone=7538899851" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i> WhatsApp</a></li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <div className="footer-subsection">
  <h4>Contact</h4>
  <ul>
    <li><i className="fas fa-map-marker-alt"></i> Saravanampatti, Coimbatore</li>
    <li><i className="fas fa-map-marker-alt"></i> Omalur, Salem</li>
    <li><i className="fas fa-envelope"></i> ndautomatronics@gmail.com</li>
    <li><i className="fas fa-phone"></i> +91 753 8899 851</li>
    <li><i className="fas fa-phone"></i> +91 9944 5375 91</li>
  </ul>
  </div>
</div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 ND Automatronics - 3D Printing Industry</p>
       
      </div>
    </footer>
  );
};

export default Footer;
