import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";

// Importing images
import slaPrinter from "../../assets/15.png";
import fdmPrinter from "../../assets/16.png";
import uploadImg from "../../assets/17.png";
import selectImg from "../../assets/18.png";
import quoteImg from "../../assets/19.png";
import printImg from "../../assets/20.png";
import shipImg from "../../assets/21.png";
import receiveImg from "../../assets/22.png";
import { Helmet } from "react-helmet";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SpinningPrinterModel from './SpinningPrinterModel';

const Service = () => {
  return (
    <>
    <Helmet>
  <title>3D Printing Services | ND Automatronics</title>
  <meta
    name="description"
    content="Professional 3D printing services using FDM and SLA technologies by ND Automatronics. Upload your design, choose material, and receive quality prints with nationwide delivery."
  />
</Helmet>

      <section className="service-hero-section">
  <div className="service-hero-image" style={{ width: "600px", height: "400px" }}>
<div style={{ background: '#FFFAE9', padding: '20px' }}>
 <Canvas
  style={{ height: "400px", width: "100%", background: '#FFFAE9' }}
  camera={{ position: [0, 0, 10] }}
>
  <ambientLight intensity={1} />
  <directionalLight position={[5, 5, 5]} intensity={1} />
  <OrbitControls />
   <SpinningPrinterModel scale={0.0030} />
 {/* This will make model small */}
</Canvas>

</div>

</div>


  <div className="service-content">
    <h1>
      <span className="service-highlight">3D Printing</span> Services
    </h1>
    <p>
      At <span className="service-brand">ND Automatronics</span>, we provide professional 3D printing services for prototyping and manufacturing.
      Using FDM and SLA technologies, we deliver high-precision parts and cost-effective prototypes tailored to your needs.
    </p>
    <div className="service-button-group">
      <div className="service-button-group">
  <Link to="/about#contact" className="service-primary-btn">Enquiry Now</Link>
  <Link to="/about" className="service-outline-btn">About Us →</Link>
</div>

    </div>
  </div>
</section>
      <div className="ser">

      <div className="service-heading">
        <h2>Our <span className="service-highlight">3D Printing</span> Technologies</h2>
      </div>

      <section className="service-tech-section">
        <div className="service-tech-content">
          <div className="service-tech-text">
            <h3>FDM (<span className="service-highlight">Fused Deposition Modeling</span>) Printing</h3>
            <p>FDM is a cost-effective 3D printing technology that builds durable parts by layering thermoplastic filaments.</p>
            <ul>
              <li><span className="service-check-icon">✔</span> <strong>Best for:</strong> Industrial prototypes, mechanical parts, functional designs.</li>
              <li><span className="service-check-icon">✔</span> <strong>Materials:</strong> PLA, ABS, PETG, Nylon, TPU (Flexible).</li>
              <li><span className="service-check-icon">✔</span> <strong>Advantages:</strong> Cost-effective, durable, wide material options.</li>
            </ul>
            <Link to="/about#contact" className="service-primary-btn">Enquiry Now</Link>
          </div>
          <div className="service-tech-image">
            <img src={fdmPrinter} alt="3D Printer used in FDM and SLA" width="390" height="550" />
          </div>
        </div>
      </section>

      <section className="service-printing-section">
        <div className="service-printing-container">
          <div className="service-printing-image">
            <img src={slaPrinter} alt="SLA 3D Printer" />
          </div>
          <div className="service-printing-content">
            <h3>
              SLA (<span className="service-highlight">Stereolithography</span>) Printing
            </h3>
            <p>
              SLA 3D printing provides high-resolution, smooth, and detailed parts, ideal for intricate designs.
            </p>
            <ul>
              <li>
                <span className="service-check-icon">✔</span>
                <strong> Best for:</strong> Jewelry, dental models, engineering prototypes, high-detail designs.
              </li>
              <li>
                <span className="service-check-icon">✔</span>
                <strong> Materials:</strong> Standard resin, tough resin, flexible resin, biocompatible resin.
              </li>
              <li>
                <span className="service-check-icon">✔</span>
                <strong> Advantages:</strong> Superior detail, smooth surface finish, high accuracy.
              </li>
            </ul>
<Link to="/about#contact" className="service-primary-btn">Enquiry Now</Link>
          </div>
        </div>
      </section>
      </div>

      <section class="service-process-section">
        <h2>How Our <span class="service-highlight">3D Printing Works</span></h2>
        <div class="service-process-steps">
          <div class="service-step">
            <img src={uploadImg} alt="Upload Design" />
            <p>Upload Your Design</p>
          </div>
          <div class="service-step">
            <img src={selectImg} alt="Select Material" />
            <p>Select Your Material & Finish</p>
          </div>
          <div class="service-step">
            <img src={quoteImg} alt="Instant Quote" />
            <p>Receive an Instant Quote</p>
          </div>
          
          <div class="service-step">
            <img src={printImg} alt="Printing Quality Check" height="100" width="100" />
            <p>Printing & Quality Check</p>
          </div>
          <div class="service-step">
            <img src={shipImg} alt="Shipping" height="100" width="100" />
            <p>Shipping Across India</p>
          </div>
          
          <div class="service-step">
            <img src={receiveImg} alt="Order" height="100" width="100" />
            <p>Order safely received</p>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Service;
