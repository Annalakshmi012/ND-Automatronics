import React from 'react';
import './Archives.css';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: "APPLICATIONS OF 3D PRINTING",
    url: "/blog/Applications-of-3d-printing", // Correct URL
    excerpt:
      "In the ever-evolving landscape of 3D printing technology, few innovations have captured the imagination and potential as profoundly as 3D printing. This groundbreaking technology, also known as additive manufacturing, has swiftly emerged as a game-changer in various industries, revolutionizing the way we design, prototype, and produce objects.",
  },
];

const July2023 = () => {
  return (
     <div className="blog-page-wrapper">
    <div className="main-container">
      <h1 className="page-heading">July 2023</h1>
      <div className="blog-layout">
        {/* Left Section */}
        <div className="left-section">
          {posts.map(({ id, title, url, excerpt }) => (
            <div key={id} className="post-item">
              <h2 className="post-title">
                <Link to={url} className="post-link">{title}</Link>
              </h2>
              <p className="post-excerpt">{excerpt}</p>
              <Link to={url} className="read-more">Read More »</Link>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Right Section */}
        <div className="right-section">
          {/* Recent Posts */}
          <h3 className="underline-heading">Recent Posts</h3>
          <ul className="recent-posts">
            <li><Link to="/blog/Market-of-3d-printing-in-the-world-india">The Growing Market of 3D Printing in the World & India</Link></li>
            <li><Link to="/blog/Steps-in-the-sls-printer">Key Steps for Efficient SLS Printer Workflow Explained</Link></li>
            <li><Link to="/blog/3d-printing-comparison-fdm-vs-sls-vs-sl">3D Printing Technology Comparison: FDM vs SLS vs SLA</Link></li>
            <li><Link to="/blog/Steps-in-fdm-printer">Key Steps in FDM Printing: A Quick Guide</Link></li>
            <li><Link to="/blog/Best-slicing-software-for-3d-printer">Top Slicing Software for 3D Printer: Ultimate Guide to Success</Link></li>
            <li><Link to="/blog/Fdm-3d-printer-brand">Top 15 FDM 3D Printer Brands for Innovation and Quality</Link></li>
            <li><Link to="/blog/Pros-and-cons-of-sla-printers">Pros and Cons of SLA Printers: A Comprehensive Guide</Link></li>
            <li><Link to="/blog/Pros-and-cons-of-sls-printer">Understanding the Pros and Cons of SLS Printers</Link></li>
            <li><Link to="/blog/Key-steps-in-sla-printing">Key Steps in SLA Printing: A Quick Guide</Link></li>
            <li><Link to="/blog/Pros-and-cons-of-fdm-printer">Understanding the Pros and Cons of FDM Printers</Link></li>
          </ul>

          {/* Archives */}
          <h3 className="underline-heading">Archives</h3>
          <ul className="archives">
            <li><Link to="/november-2024">November 2024</Link></li>
            <li><Link to="/october-2024">October 2024</Link></li>
            <li><Link to="/september-2024">September 2024</Link></li>
            <li><Link to="/july-2023">July 2023</Link></li>
            <li><Link to="/june-2023">June 2023</Link></li>
          </ul>

          {/* Categories */}
          <h3 className="underline-heading">Categories</h3>
          <ul className="categories">
            <li><Link to="/3d-printing">3D Printing</Link></li>
            <li><Link to="/nd-automatronics">ND Automatronics</Link></li>
            <li><Link to="/uncategorized">Uncategorized</Link></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default July2023;
