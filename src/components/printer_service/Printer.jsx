import React from 'react';
import './Printer.css';
import bgImage from '../../assets/23.jpg';
import arrowIcon from '../../assets/24.png';
import promoImage from '../../assets/25.jpg';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
const Printer = () => {
  return (
    <>
    <Helmet>
  <title>3D Printer Service | ND Automatronics</title>
  <meta
    name="description"
    content="Explore ND Automatronics' 3D printer services including SLA, FDM printing, and nationwide repair & maintenance with expert consultation."
  />
</Helmet>

      {/* Hero Section */}
      <div className="printer-hero" style={{ backgroundImage: `url(${bgImage})` }}>

        <div className="printer-overlay" />
        <h1 className="printer-title">3D Printer<br />Service</h1>
      </div>

      {/* Services Section */}
      <div className="services-container">
        <h1 className="section-title">
          Our <span className="highlight">3D Printer</span> Services
        </h1>

        <div className="service-cards">
          <div className="service-card">
            <h2>
              <span className="blue">Where</span> Precision<br />
              <span className="blue">Meets</span> Perfection
            </h2>
            <p>
              SLA printing achieves ultra-high detail with smooth surfaces and sharp features.
              It's the go-to choice for intricate models, dental applications, and artistic designs
              requiring premium finish quality.
            </p>
          </div>

          <div className="service-card">
            <h2>
              Built for <span className="blue">Strength</span>,<br />
              <span className="blue">Designed for</span> Performance
            </h2>
            <p>
              FDM technology delivers durable, practical parts ideal for everyday use. Whether it's
              robust prototypes or functional end-use components, FDM ensures reliability with
              material versatility and rapid production.
            </p>
          </div>

          <div className="service-card">
            <h2>
              Your Vision,<br />
              <span className="blue">Printed Nationwide</span>
            </h2>
            <p>
              Experience fast, high-quality 3D printing with pan-India service. From single prints to
              bulk manufacturing, we offer scalable solutions with expert guidance and delivery
              across all major cities.
            </p>
          </div>
        </div>

        {/* Repair & Maintenance Section */}
        <div className="repair-container">
          <div className="repair-left">
            <h1>
              3D PRINTER (FDM) <span className="highlight-blue">REPAIR &<br />MAINTENANCE SERVICE</span>
            </h1>

            <ul className="repair-list">
              <li><img src={arrowIcon} alt="arrow" className="arrow-icon" /> Professional Repair & Troubleshooting</li>
              <li><img src={arrowIcon} alt="arrow" className="arrow-icon" /> Calibration & Performance Tuning</li>
              <li><img src={arrowIcon} alt="arrow" className="arrow-icon" /> Routine Maintenance</li>
              <li><img src={arrowIcon} alt="arrow" className="arrow-icon" /> Fast Turnaround & Competitive Pricing</li>
              <li><img src={arrowIcon} alt="arrow" className="arrow-icon" /> Online & Onsite Assistance</li>
            </ul>

            <div className="center-button-container">
  <Link to="/about#contact" className="repair-button">Get Free Consultation</Link>
</div>
          </div>

          <div className="repair-right">
            <div className="repair-promo-box">
              <img src={promoImage} alt="3D Printer Promo" className="promo-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Printer;
