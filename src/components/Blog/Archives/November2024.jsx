// November2024.jsx
import React from 'react';
import './Archives.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const posts = [
  {
    id: 1,
    title: 'The Growing Market of 3D Printing in the World & India',
    url: '/blog/Market-of-3d-printing-in-the-world-india',
    excerpt:
      'The market of 3D printing in the world & India has witnessed significant growth...',
  },
  {
    id: 2,
    title: 'Key Steps for Efficient SLS Printer Workflow Explained',
    url: '/blog/Steps-in-the-sls-printer',
    excerpt:
      'In the world of additive manufacturing, understanding the steps in SLS printer operation...',
  },
  {
    id: 3,
    title: '3D Printing Technology Comparison: FDM vs SLS vs SLA',
    url: '/blog/3d-printing-comparison-fdm-vs-sls-vs-sl',
    excerpt:
      'In the rapidly evolving world of 3D printing, selecting the right technology can be crucial...',
  },
  {
    id: 4,
    title: 'Key Steps in FDM Printing: A Quick Guide',
    url: '/blog/Steps-in-fdm-printer',
    excerpt:
      'This guide covers essential steps from design to printing in FDM...',
  },
  {
    id: 5,
    title: 'Top Slicing Software for 3D Printer: Ultimate Guide to Success',
    url: '/blog/Best-slicing-software-for-3d-printer',
    excerpt:
      'An overview of slicing software used in 3D printing that converts models into printable files...',
  },
  {
    id: 6,
    title: 'Top 15 FDM 3D Printer Brands for Innovation and Quality',
    url: '/blog/Fdm-3d-printer-brand',
    excerpt:
      'A list of the top FDM 3D printer brands known for innovation and quality...',
  },
  {
    id: 7,
    title: 'Pros and Cons of SLA Printers: A Comprehensive Guide',
    url: '/blog/Pros-and-cons-of-sla-printers',
    excerpt:
      'This guide covers the advantages and disadvantages of SLA printers...',
  },
  {
    id: 8,
    title: 'Understanding the Pros and Cons of SLS Printers',
    url: '/blog/Pros-and-cons-of-sls-printer',
    excerpt:
      'A detailed look into the benefits and drawbacks of SLS printers...',
  },
  {
    id: 9,
    title: 'Key Steps in SLA Printing: A Quick Guide',
    url: '/blog/Key-steps-in-sla-printing',
    excerpt:
      'An article detailing the SLA printing process from initial design to finished print...',
  },
];

const November2024 = () => {
  return (
     <div className="blog-page-wrapper">
      <Helmet>
  <title>November 2024 Archives | Blog</title>
</Helmet>

    <div className="main-container">
      <h1 className="page-heading">November 2024</h1>
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

export default November2024;
