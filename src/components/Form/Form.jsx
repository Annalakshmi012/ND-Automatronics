import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <div className="form-container">
        <div className="form-left">
          <h2>Contact Us</h2>
          {/* Embedded Google Form */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdIubnqsQF4UbyUQq9MK4-evJd3D-Mxx12JR57djk0NutE4-w/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Contact Form"
          >
            Loading…
          </iframe>
        </div>

       
           <div className="form-right">
  <h2>Our Locations</h2>
  <div className="map-box">
  <iframe
    title="ND Automatronics - Coimbatore"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.010543830907!2d77.0127199!3d11.0899626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f96eadf62729%3A0xf291b19d2b26efe5!2sND%20Automatronics!5e0!3m2!1sen!2sin!4v1717692123456!5m2!1sen!2sin"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
  <div className="map-label">Saravanampatti, Coimbatore</div>
</div>

<div className="map-box">
  <iframe
    title="ND Automatronics - Omalur"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.745134128752!2d77.0915123!3d11.6787262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba909ab15fb2bfb%3A0x5b2483b72ab9b4f1!2sAnna%20Nagar%2C%20Omalur%2C%20Tamil%20Nadu%20636455!5e0!3m2!1sen!2sin!4v1717692456789!5m2!1sen!2sin"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
  <div className="map-label">Omalur, Salem</div>
</div>

  </div>

        </div>
      </div>
 
  );
};

export default Form;
