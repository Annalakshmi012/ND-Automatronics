import React from "react";

const WorkshopCard = ({ imgSrc, altText, duration, audience, content, reverse }) => {
  return (
    <div className={`training-workshop-card ${reverse ? "reverse" : ""}`}>
      {/* If reverse: image-section gets class right, else left */}
      <div className={`training-image-section ${reverse ? "right" : "left"}`}>
        <img src={imgSrc} alt={altText} />
      </div>
      <div className="training-text-section">
        <p><strong>Duration :</strong> {duration}</p>
        <ul>
          {audience.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p><strong>Content :</strong></p>
        <ul>
          {content.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkshopCard;
