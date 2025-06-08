import React from 'react';
import './AboutPage.css';
import Form from '../Form/Form';


// Section 1 Assets
import mainImage from '../../assets/6.jpeg';
import philosophyImage from '../../assets/0.png';

// Section 2 Assets (Meet the Principal)
import jayBritto from '../../assets/231.jpg';
import backgroundImage from '../../assets/banner-2.png';

const AboutPage = () => {
  return (
    <div>
      {/* SECTION 1: About Us */}
      <div className="about-grid">
        <div className="about-text">
          <h1 className="about-heading">ABOUT US</h1>
          <p className="about-subtitle">TechGaint in 3D Printing Industry</p>
          <p className="about-description">
          To become a TechGiant in the 3D Printing Industry, leading the future with sustainable, smart, and scalable manufacturing solutions.
          </p>
        </div>

        <div className="about-main-image-container">
          <img src={mainImage} alt="Main" className="about-main-image" />
        </div>

        <div className="about-philosophy">
          <img src={philosophyImage} alt="Philosophy" className="about-philosophy-image" />
          <h3 className="philosophy-title">Our Philosophy</h3>
          <p className="philosophy-description">
          To drive the advancement of the Additive Manufacturing Industry in India, enabling industries and individuals to harness the full power of 3D printing
          </p>
        </div>
      </div>

      {/* SECTION 2: Meet the Principal */}
      <div className="meet-wrapper">
        <div className="principal-card">
          <div className="principal-image-container">
            <img src={jayBritto} alt="Jay Britto" className="principal-image" />
          </div>

          <div className="principal-content">
            <h2 className="principal-title">MEET THE FOUNDER</h2>

            <div className="principal-background">
              <img src={backgroundImage} alt="Background" />
            </div>

            <p className="principal-description">
              As the CEO and designer, the founder leads the day-to-day operations of ND Automatronics, overseeing the research, design, and development of our large-scale 3D printers and innovative accessories that power industries and inspire educational growth across India.
            </p>

            <div className="principal-name">
              <h3>Natarajan Dhanam </h3>
              <p>FOUNDER AND CEO</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: ND Automatronics */}
      <div className="nd-automatronics">
        <h2 className="nd-title">Natarajan Dhanam Automated Electronics</h2>
        <p className="nd-description">
          At ND Automatronics, we are groundbreakers driving innovation and technological advancements in India’s 3D printing industry.
          As an R&D-focused company, we specialize in designing and manufacturing large-scale, customizable 3D printers and various accessories tailored for industrial applications.
        </p>
        <p className="nd-description">
          Committed to fostering growth in the education sector, ND Automatronics empowers young minds across India by promoting awareness and hands-on learning in 3D printing technology.
          We go beyond traditional applications, integrating 3D printing into diverse fields such as education, construction, food, and much more.
        </p>
        <p className="nd-description">
          Our collaborative approach emphasizes quality, client satisfaction, and delivering successful outcomes for every project.
          The possibilities with 3D printing are limitless, and the future of this technology is being shaped today with ND Automatronics!
        </p>
      </div>

            {/* SECTION 4: Business Details */}
<div className="business-details-section">
  <div className="business-grid">
    <div className="business-item">
      <h3 className="business-heading">Mission</h3>
      <p className="business-description">Additive Manufacturing Industry of India</p>
    </div>
    <div className="business-item">
      <h3 className="business-heading">Vision</h3>
      <p className="business-description">TechGaint in 3D Printing Industry</p>
    </div>
    <div className="business-item">
      <h3 className="business-heading">GSTIN</h3>
      <p className="business-subtext"><em>Yet to Register</em></p>
    </div>
    <div className="business-item">
      <h3 className="business-heading">UDYAM REGISTRATION</h3>
      <p className="udyam-id">UDYAM-TN-20-0025648</p>
    </div>
  </div>
</div>
<div id="contact">
        <Form />
      </div>
    </div>

  );
};

export default AboutPage;






























































































