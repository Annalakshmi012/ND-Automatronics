// Career.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import './Career.css';
import illustration from "../../assets/8.png";
import remoteWorkIcon from "../../assets/9.png";
import workHoursIcon from "../../assets/10.png";
import industryIcon from "../../assets/11.png";
import certificateIcon from "../../assets/12.png";
import growthIcon from "../../assets/13.png";
import handsOnIcon from "../../assets/14.png";
import Navigation from "../Navigation/Navigation.jsx";
import { Helmet } from "react-helmet";

// Reusable Card Component
const CareerCard = ({ icon, title, description }) => (
  <div className="unique-card">
    <img src={icon} alt={`${title} Icon`} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Roles data
const roles = [
  {
    title: "Hardware Developer Intern",
    description: "Join our hardware team to work on designing, developing, and testing innovative electronic systems. A great opportunity to gain real-world experience in circuit design and embedded systems.",
    link: "https://drive.google.com/file/d/1V2L2ptOKMs0-DjVSqp5o2mqTVHgufF-0/view"
  },
  {
    title: "Visual Content Creator Intern",
    description: "Help us create visually engaging content for our brand across various platforms. Ideal for creative individuals passionate about storytelling through graphics and visuals.",
    link: "https://drive.google.com/file/d/11xqhBV3CI2v0U45E2NoLgtgHPwpmi5wx/view"
  },
  {
    title: "Website Developer Intern",
    description: "Be part of our web development team to build and maintain responsive, user-friendly websites. Gain hands-on experience in front-end technologies and performance optimization.",
    link: "https://drive.google.com/file/d/1juNHT3D3xTWCi13GyGy-b_haiCjz4OXS/view"
  },
  {
    title: "Business Developer Intern",
    description: "Work closely with our business team to explore market opportunities, generate leads, and support growth strategies. Perfect for ambitious candidates interested in business development and strategy.",
    link: "https://drive.google.com/file/d/1cKfO-ImGq6fRX4wHXk9FpHh66fbaaEqs/view"
  },
  {
    title: "3D Designers Intern",
    description: "Use your 3D modeling skills to bring ideas to life. You’ll help create 3D assets for products, marketing, and visual storytelling.",
    link: "https://drive.google.com/file/d/1A5nAtM2ugWT8AXBWV4OWtH-btHcRfVTp/view"
  },
  {
    title: "Sales & Marketing Intern",
    description: "Support our sales and marketing campaigns, conduct research, and engage with potential clients. Gain exposure to real sales funnels and marketing tools.",
    link: "https://drive.google.com/file/d/1OIZW7-JLzekWf84ZJlSRzeRSTAgZq6lH/view"
  },
  {
    title: "Creative Conceptor Intern",
    description: "Bring your imagination to the table to develop original creative concepts for branding, campaigns, and digital content.",
    link: "https://drive.google.com/file/d/1Lh5pEnh-_rea9OSn2fs9446GOWoWoYwj/view"
  },
  {
    title: "2D/3D Animator Intern",
    description: "Use animation tools to breathe life into our projects. You'll work on product animations, explainers, and digital content for social media.",
    link: "https://drive.google.com/file/d/1MNW0HxjCsrkYx0nahWFzvD1sIyXpdDaq/view"
  },
  {
    title: "Digital Marketing Intern",
    description: "Learn SEO, SEM, content marketing, and analytics while assisting in the execution of our digital marketing strategy.",
    link: "https://drive.google.com/file/d/128YQO-xVwnP8NHvyk8OUAvcqmk3UGWms/view"
  }
];


const steps = [
  { number: '01', title: 'Apply Online' },
  { number: '02', title: 'Screening' },
  { number: '03', title: 'Interviews' },
  { number: '04', title: 'Final Selection & Offer' },
  { number: '05', title: 'Onboarding & Welcome!' }
];

const Career = () => {
  return (
    <>
    
  <Helmet>
    <title>Careers & Internships | ND Automatronics</title>
    <meta
      name="description"
      content="Explore exciting career and internship opportunities at ND Automatronics. Gain hands-on experience in 3D printing, web development, marketing, and more!"
    />
  </Helmet>

      <Navigation />
      <div className="unique-career-container">
        <div className="unique-career-text">
          <h1>
            <span className="unique-highlight">Career</span> & <span className="unique-highlight">Intern</span>
          </h1>
          <p>
            Kickstart your <span className="unique-highlight">Career</span> With an Internship In a Leading <br />
            <span className="unique-highlight">3D Printing</span> Industry
          </p>
<button
  className="unique-view-btn"
  onClick={() => {
    document.getElementById('roles-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  }}
>
  View Openings
</button>

        </div>
        <div className="unique-career-image">
          <img src={illustration} alt="Career illustration" />
        </div>
      </div>

      <div className="unique-career-cardscontainer">
        <div className="unique-career-cards">
          <CareerCard icon={remoteWorkIcon} title="Remote Work Flexibility" description="Work from home (WFH) with a flexible environment." />
          <CareerCard icon={workHoursIcon} title="Adaptable Work Hours" description="Manage your schedule with flexible working hours." />
          <CareerCard icon={industryIcon} title="Industry Exposure" description="Work with cutting-edge 3D printing technology and startup strategies." />
          <CareerCard icon={certificateIcon} title="Certificate of Completion" description="Receive a valuable internship completion certificate." />
          <CareerCard icon={growthIcon} title="Professional Growth" description="Gain hands-on experience and training in a fast-growing industry." />
          <CareerCard icon={handsOnIcon} title="Hands-on Experience" description="Work closely with an R&D-driven startup in a dynamic setting." />
        </div>

        <div className="unique-career-cardstext">
          <h1>
            <strong>YOUR LIFE AT</strong><br />
            <span className="unique-highlight">ND Automatronics</span>
          </h1>
          <p>
            At ND Automatronics, innovation meets passion! As an R&D-driven startup, we foster a collaborative and dynamic work environment where creativity thrives.
            Our dedicated team pushes the boundaries of 3D printing, combining engineering excellence with artistic vision. 
            We provide not just internships but transformative experiences that shape your professional journey.
          </p>
          <p>
            Whether working remotely or on-site in our advanced R&D facility, you’ll gain real-world experience, collaborate with experts, and contribute to meaningful projects. 
            Each day is an opportunity to challenge the ordinary, drive innovation, and shape a smarter, automated future.
          </p>
          <p>
            Join ND Automatronics and be part of a future where imagination, technology, and ambition unite to redefine what's possible in the world of 3D printing and automation.
          </p>
          <Link to="/about" className="unique-views-btn">
  View More
</Link>

        </div>

      </div>
      

      {/* Role Cards Section */}
      <div className="unique-role-section" id="roles-section" >
        <h1 className="unique-role-heading">BE PART OF <span className="unique-highlight">OUR MISSION</span></h1>
        <div className="unique-role-cards">
          {roles.map((role, index) => (
  <div className="unique-role-card" key={index}>
    
    <div>
      <h2>{role.title}</h2>
      <p>{role.description}</p>
    </div>
  <button
  className="unique-role-button"
  onClick={() => window.open(role.link, '_blank')}
>
  APPLY ↗
</button>


  </div>
))}

        </div>
      </div>
      <div className="hiring-container">
      <h1>
        Hiring <span className="highlight">Process</span>
      </h1>
      <div className="steps">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
  <div className="step-number">{step.number}</div>
  <div className="step-title">{step.title}</div>
</div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Career;
