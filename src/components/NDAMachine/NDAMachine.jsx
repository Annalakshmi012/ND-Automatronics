import React, { useState } from 'react';
import './NDAMachine.css';

const splineEmbeds = {
  "FDM PRINTER": "https://my.spline.design/fdm-YVMF6S1avc90CZJRqbtPelmh/",
  "SLA PRINTER": "https://my.spline.design/sla-mvrFnGdFrH8vYyazCB6OTNTS/",
  "CNC MILLER": "https://my.spline.design/cnc-XVt5Q9LYatJhPl4mddHeN0ya/",
  "IMPRESSION PLOTER": "https://my.spline.design/impression-Pu6dK3BxNdwLasjPx4URAxmY/",
  "A4 PLOTER": "https://my.spline.design/untitled-BYpPNLDalTg9Sls79bUiOEvg/",
  "PETG MAKER": "https://my.spline.design/fdm-YVMF6S1avc90CZJRqbtPelmh"
};

const machineDescriptions = {
  "FDM PRINTER": "Fused Deposition Modeling (FDM) is the most common 3D printing method. It works by extruding thermoplastic filament layer-by-layer to create functional parts, prototypes, and tools. It’s affordable, reliable, and widely used in education, engineering, and design.",
  "SLA PRINTER": "Stereolithography (SLA) uses a laser to cure liquid resin into hardened plastic in a layer-by-layer process. It produces highly detailed parts with smooth surfaces — ideal for dental models, jewelry, and engineering prototypes.",
  "CNC MILLER": "A CNC milling machine uses rotary cutters to remove material from a solid block based on programmed instructions. It’s widely used for creating precise metal and plastic components in the automotive, aerospace, and manufacturing industries.",
  "IMPRESSION PLOTER": "An impression plotter is typically used for high-precision imprinting or engraving on various surfaces like circuit boards or templates. It ensures accurate mechanical or artistic outputs, suitable for prototyping or signage.",
  "A4 PLOTER": "The A4 plotter is a compact machine used for line drawings, architectural blueprints, and design printouts on A4 paper. It’s commonly used in educational settings and small design studios.",
  "PETG MAKER": "The PETG Maker is a specialized 3D printer for PETG filament — a durable, slightly flexible material great for mechanical parts and outdoor use. It balances ease of printing and strength, making it ideal for practical applications."
};

function App() {
  const [selected, setSelected] = useState("FDM PRINTER");

  return (
    <div className="app-container">
      <p className="top-caption">
        3D printing turns imagination into reality, one layer at a time.
      </p>

      <h1 className="main-title">ND Automatronics</h1>
      <h2 className="sub-title">Machineries</h2>

      <p className="description">
        Explore our collection of cutting-edge machines used in modern fabrication, additive manufacturing, and prototyping.
      </p>

      <div className="button-container">
        {Object.keys(splineEmbeds).map((item, index) => (
          <button
            key={index}
            className={`nav-button ${selected === item ? "active" : ""}`}
            onClick={() => setSelected(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="dynamic-space">
        <div className="canvas-columns">
          <div className="left-description">
            <h3>{selected}</h3>
            <p>{machineDescriptions[selected]}</p>
          </div>

          <div className="iframe-container">
            <iframe
              src={splineEmbeds[selected]}
              title={selected}
              frameBorder="0"
              width="100%"
              height="100%"
              allow="fullscreen"
            ></iframe>
            <div className="bottom-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
