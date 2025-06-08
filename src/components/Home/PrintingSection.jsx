import React from "react";
import "./PrintingSection.css";

// Import images from src/assets
import fdmIcon from "../../assets/1.png";
import slaIcon from "../../assets/2.png";
import printingIcon from "../../assets/3.png";


const Card = ({ title, subtitle, description, icon, position }) => {
  return (
    <div className={`card ${position === "top-right" ? "middle-card" : "cart"}`}>
      {/* Render image inside .icon */}
      <div className="icon">
        <img src={icon} alt="Icon" className="icon-img" />
      </div>
      <div className="text-content">
      <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
      <h3 dangerouslySetInnerHTML={{ __html: subtitle }}></h3>
      <p>{description}</p>
      </div>
      <div className="box"></div>
      <div className="circle"></div>
      <div className="curve"></div>
      <div className="curve-left"></div>
    </div>
  );
};

const PrintingSection = () => {
  const cards = [
    {
      title: "Precision in <span class='highlight'>Every Layer</span> Innovation in <span class='highlight'>Every Print</span>",
      subtitle: "",
      description:
        "FDM Printing transforms digital designs into strong, functional 3D models with high accuracy. Ideal for prototyping and production, it offers cost-effective and durable solutions.",
      icon: fdmIcon, // Use imported image
      position: "bottom",
    },
    {
      title: "Ultra-Fine <span class='highlight'>Details</span>, <span class='highlight'>Smooth</span> & <span class='highlight'>Precise</span> Prints!",
      subtitle: "",
      description:
        "SLA Printing offers high-resolution, detailed 3D prints with a flawless finish. Ideal for intricate designs, prototypes, and miniatures. Experience precision like never before!",
      icon: slaIcon, // Use imported image
      position: "top-right",
    },
    {
      title: "Bringing Your Ideas to Life in <span class='highlight'>3D!</span>",
      subtitle: "",
      description:
        "Get high-quality 3D printing services across India with FDM, SLA, and more. Enjoy precision, durability, and fast turnaround—perfect for prototypes, custom parts, and creative projects at affordable prices!",
      icon: printingIcon, // Use imported image
      position: "bottom",
    },
  ];

  return (
    <section className="printing-section">
      <div className="container">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default PrintingSection;
