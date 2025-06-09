import React from "react";
import "./Training.css";
import trainerImage from "../../assets/27.png"; 
import workshopImg from "../../assets/28.png";
import WorkshopCard from "./WorkshopCard"; // import the new component
import { Helmet } from "react-helmet";
const Training = () => {
 

  return (
    <div className="training-main-container">
      <Helmet>
      <title>3D Printing Training & Workshops | ND Automatronics</title>
      <meta
        name="description"
        content="Join our 3D Printing Training program with hands-on workshops, seminars, and personal training. Ideal for students, professionals, and industries. Learn FDM, design, and more!"
      />
    </Helmet>
      {/* Welcome Section */}
      <section className="training-welcome-section">
        <div className="training-welcome-text">
          <h1>Welcome to our 3D Printing Training!</h1>
          <p>
            Dive into the world of additive manufacturing with our structured and hands-on 3D Printing training program. Designed for students and professionals alike, this course covers everything from the basics to advanced
            applications empowering you with the skills and knowledge needed to thrive in this cutting-edge technology.
          </p>
        </div>

        <div className="training-welcome-image">
          <div className="training-curved-frame">
            <img src={trainerImage} alt="Trainer" className="training-main-image" />
          </div>
        </div>
      </section>
     <div className="training-main-section">
  <div className="training-workshop-wrapper">
    {/* Introductory Seminar */}
    <WorkshopCard
      imgSrc={workshopImg}
      altText="Introductory Seminar"
      duration="4 Hours"
      audience={[
        "For Students of College, Polytechnic & School",
        "Minimum Batch of 30 Students"
      ]}
      content={[
        "Introduction to 3D Printing",
        "Types of 3D Printing",
        "Process Flow in 3D Printing",
        "Components of FDM Printer",
        "Industrial Applications",
        "Advancements & Future of 3D Printing"
      ]}
    />

    {/* Hands-on Workshop */}
    <WorkshopCard
      reverse={true}
      imgSrc={workshopImg}
      altText="Hands-on Workshop"
      duration="2 Days (13 Hours)"
      audience={[
        "For Students of College, Polytechnic & School",
        "Minimum Batch of 30 Students"
      ]}
      content={[
        "Introduction to 3D Printing",
        "Types of 3D Printing",
        "Process Flow in 3D Printing",
        "Components of FDM Printer",
        "Hands-on 3D Printing Demonstration",
        "Types of FDM Printer",
        "Simple 3D Designing",
        "Industrial Application",
        "Advancements & Future of 3D Printing",
        "Entrepreneurial Opportunities"
      ]}
    />

    {/* Personal Training */}
    <WorkshopCard
      imgSrc={workshopImg}
      altText="Personal Training (1-on-1)"
      duration="1 Day (8 Hours)"
      audience={[
        "For Industrial Person"
      ]}
      content={[
        "Introduction to 3D Printing",
        "Types of 3D Printing",
        "Process Flow in 3D Printing",
        "Hands-on 3D Printing Training",
        "Types of FDM Printer",
        "3D Designing Tools",
        "Slicer Setting",
        "Application",
        "Advancements & Future of 3D Printing",
        "Entrepreneurial Opportunities"
      ]}
    />

    {/* 3D Printing Consultation / Guidance */}
    <WorkshopCard
      reverse={true}
      imgSrc={workshopImg}
      altText="3D Printing Consultation / Guidance"
      duration="Custom Duration"
      audience={[
        "Consultation Service"
      ]}
      content={[
        "Effective usage of 3D Printing for your Application",
        "Printer Maintenance and Calibration",
        "Troubleshooting Print Issues",
        "Optimal Slicer Settings",
        "Material Selection",
        "Better Design Optimization",
        "Software Training",
        "Emerging Trends and Technologies",
        "... and more"
      ]}
    />
  </div>
</div>



    
    </div>
  );
};

export default Training;
