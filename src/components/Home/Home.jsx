import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Navigation from "../Navigation/Navigation.jsx";
import PrintingSection from "./PrintingSection.jsx";
import RotatingModel from "../model/RotatingModel.jsx";
import "./Home.css";
import image5 from "../../assets/5.png";
import image4 from "../../assets/4.png";
import image6 from "../../assets/6.png";
import image7 from "../../assets/7.png";
import FAQ from "./FAQ.jsx";
const Home = () => {
  const [openIndex, setOpenIndex] = useState(0);

 const faqs = [
  {
    question: "Introductory Seminar",
    answer: [
      "Introduction to 3D Printing",
      "Types of 3D Printing",
      "Process Flow in 3D Printing",
      "Components of FDM Printer",
      "Industrial Applications",
      "Advancements & Future of 3D Printing",
    ],
  },
  {
    question: "Hands-on Workshop",
    answer:
      "This intensive workshop offers participants the opportunity to operate real 3D printers and explore slicing software, design tools, and calibration methods. Attendees will gain hands-on experience with FDM 3D printers, learn to troubleshoot common issues, and create their own 3D printed parts. Ideal for those who want practical exposure and to understand the end-to-end process from design to production.",
  },
  {
    question: "Personal Training (1 on 1 Training)",
    answer:
      "Our personalized 1-on-1 training sessions are designed to adapt to the learner’s pace and skill level. Whether you're a beginner or looking to advance your skills, we customize each session to suit your goals — including CAD designing, printer assembly, maintenance, and project-specific guidance. This format ensures individual attention, in-depth understanding, and faster progress.",
  },
  {
    question: "3D Printing Consultation & Guidance",
    answer:
      "Our expert consultants provide strategic guidance on integrating 3D printing technology into your academic, industrial, or personal projects. From selecting the right printer and materials to optimizing print quality and reducing costs, we help you every step of the way. Whether you’re prototyping a product or setting up a 3D printing lab, our insights ensure successful implementation.",
  },
];


  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
 const rawTestimonials = [
  { name: "Ravikumar", rating: 5, feedback: "ND Automatronics helped us a lot in mastering 3D printing skills." },
  { name: "Priyadarshini", rating: 4, feedback: "Very useful training. Trainers were knowledgeable and friendly." },
  { name: "Anbarasu", rating: 5, feedback: "I got placed in a company because of the training from ND Automatronics." },
  { name: "Snehalatha", rating: 5, feedback: "Great support from the team, even after the session was over." },
  { name: "Sathishkumar", rating: 4, feedback: "Clear explanations, modern equipment, and hands-on experience." },
  { name: "Meenakshi", rating: 4, feedback: "Enjoyed learning with their tools. Would definitely recommend!" },
  { name: "Naveenkumar", rating: 5, feedback: "They handled everything very professionally." },
  { name: "Divyashree", rating: 4, feedback: "I used their service for my college project and it was amazing." },
  { name: "Karthikeyan", rating: 5, feedback: "Excellent teaching and practical exposure!" },
  { name: "Lakshmipriya", rating: 4, feedback: "They delivered the project on time with great quality." },
];


const testimonials = rawTestimonials.map(item => ({ ...item })); // Clone objects

const halfLength = Math.ceil(testimonials.length / 2);
const topRowTestimonials = testimonials.slice(0, halfLength);
const bottomRowTestimonials = testimonials.slice(halfLength);


  return (
    <>
     <Helmet>
        <title>ND Automatronics | 3D Printing Industry</title>
        <meta name="description" content="ND Automatronics: Bringing Your Ideas to Life with High-Precision 3D Printing Solutions." />
      </Helmet>
      <Navigation />

      <section className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <h1>
              <span className="highlight">ND Automatronics</span> 3D Printing Industry
            </h1>
            <p>Bringing Your Ideas to Life with High-Precision 3D Printing Solutions.</p>
            <div className="hero-buttons">
      <Link to="/about" className="btn-primary">About Us</Link>
      <Link to="/about#contact" className="btn-secondary">Get in Touch</Link>
    </div>
          </div>
          <div className="hero-right">
            <Canvas style={{ height: "80vh", width: "100%" }} camera={{ position: [5, 2, 6] }}>
              <ambientLight intensity={3.5} />
              <OrbitControls />
              <RotatingModel scale={[1.5, 1.5, 1.5]} position={[0, 0, 0]} />
            </Canvas>
          </div>
        </div>
      </section>

      <section className="service">
        <h2>SERVICE</h2>
        
      </section>

      <PrintingSection />

      <div className="workshop-container">
        <div className="workshop-content">
          <h1 className="workshop-title">
            3D Printing <span className="highlight">Training</span> & Workshop
          </h1>
          <div className="faq-section">
            {faqs.map((faq, index) => (
    <div key={index} className="faq-item">
      <button className="faq-question" onClick={() => toggleSection(index)}>
        {faq.question} <span>{openIndex === index ? "⬆" : "⬇"}</span>
      </button>
      {openIndex === index && (
        <div className="faq-answer">
          {Array.isArray(faq.answer) ? (
            <ul>
              {faq.answer.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{faq.answer}</p>
          )}
        </div>
      )}
    </div>
  ))}
          </div>
        </div>
      </div>
      <div className="nd-container">
      <div className="text-section">
        <h2 className="heading">
          Why Choose  <br />
          <div className="underline"></div>
          <span>ND Automatronics?</span>
        </h2>
        <p className="descriptions">
          Transform the landscape of manufacturing with ND Automatronics, where we specialize
          in pioneering large-scale 3D printing solutions tailored for industrial applications.
          Our innovative technology empowers businesses to turn complex concepts into reality.
        </p>
        <p className="descriptions">
          Transform the landscape of manufacturing with ND Automatronics, where we specialize
          in pioneering large-scale 3D printing solutions tailored for industrial applications.
          Our innovative technology empowers businesses to turn complex concepts into reality.
        </p>
      </div>
      <div className="image-section">
      <img src={image6} alt="Spark" className="sprak"/>
      <img src={image7} alt="Arrow" className="arrow rotate-upside-down"/>

      <img src={image4} alt="Laser Cutting" className="image" /> 
      <img src={image5} alt="3D Printing" className="image-rotated" />
      
      </div>
    </div>
    <div className="testimonial-scroll-horizontal-wrapper">
  {/* Top Row */}
  <div className="testimonial-scroll-horizontal top-row">
    {topRowTestimonials.map((item, index) => (
      <div className="testimonial-card" key={`top-${index}`}>
        <h3 className="testimonial-name">{item.name}</h3>
        <div className="testimonial-stars">
          {Array.from({ length: item.rating }).map((_, idx) => (
            <span key={idx}>⭐</span>
          ))}
        </div>
        <p className="testimonial-text">{item.feedback}</p>
      </div>
    ))}
    {/* Duplicate top row for smooth loop */}
    {topRowTestimonials.map((item, index) => (
      <div className="testimonial-card" key={`top-dup-${index}`}>
        <h3 className="testimonial-name">{item.name}</h3>
        <div className="testimonial-stars">
          {Array.from({ length: item.rating }).map((_, idx) => (
            <span key={idx}>⭐</span>
          ))}
        </div>
        <p className="testimonial-text">{item.feedback}</p>
      </div>
    ))}
  </div>

  {/* Bottom Row */}
  <div className="testimonial-scroll-horizontal bottom-row">
    {bottomRowTestimonials.map((item, index) => (
      <div className="testimonial-card" key={`bottom-${index}`}>
        <h3 className="testimonial-name">{item.name}</h3>
        <div className="testimonial-stars">
          {Array.from({ length: item.rating }).map((_, idx) => (
            <span key={idx}>⭐</span>
          ))}
        </div>
        <p className="testimonial-text">{item.feedback}</p>
      </div>
    ))}
    {/* Duplicate bottom row for smooth loop */}
    {bottomRowTestimonials.map((item, index) => (
      <div className="testimonial-card" key={`bottom-dup-${index}`}>
        <h3 className="testimonial-name">{item.name}</h3>
        <div className="testimonial-stars">
          {Array.from({ length: item.rating }).map((_, idx) => (
            <span key={idx}>⭐</span>
          ))}
        </div>
        <p className="testimonial-text">{item.feedback}</p>
      </div>
    ))}
  </div>
</div>
<FAQ/>

    </>
  );
};

export default Home;
