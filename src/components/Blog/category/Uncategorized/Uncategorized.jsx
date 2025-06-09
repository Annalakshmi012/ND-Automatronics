import React from 'react';
import "./Uncategorized.css";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const posts = [
 {
  id: 1,
  title: "Top Slicing Software for 3D Printer: Ultimate Guide to Success",
  url: "/blog/Best-slicing-software-for-3d-printer",
  excerpt: "In the world of 3D printing, slicing software for 3D printers plays a pivotal role in transforming 3D models into printable files. Whether you’re new or experienced, understanding slicing software is crucial for achieving high-quality prints...",
},
{
  id: 2,
  title: "Top 15 FDM 3D Printer Brands for Innovation and Quality",
  url: "/blog/Fdm-3d-printer-brand",
  excerpt: "Fused Deposition Modeling (FDM) 3D printing is praised for its affordability and versatility. This article highlights top FDM 3D printer brands pushing the boundaries of innovation...",
},
{
  id: 3,
  title: "Difference between Laser Engraving, Etching & Marking",
  url: "/blog/Difference-between-laser-engraving-etching-marking",
  excerpt: "Laser engraving, etching, and marking each offer unique benefits in manufacturing and design. This blog explores their differences to help you choose the right method...",
},
{
  id: 4,
  title: "Unlocking Creativity: A Comprehensive Guide to CC Licenses",
  url: "/blog/Comprehensive-guide-to-cc-licenses",
  excerpt: "Creative Commons (CC) licenses enable creators to share their work while retaining rights. This article explains the different types of CC licenses and their applications...",
},
{
  id: 5,
  title: "Top 10 Common Errors in 3D Printing (FDM) You Need to Avoid!",
  url: "/blog/Top-10-common-errors-in-3d-printing-fdm",
  excerpt: "3D printing with FDM is powerful but prone to issues. This guide covers the most common FDM printing errors and how to avoid them for better print success...",
}
];



const  Uncategorized = () => {
  return (
     <div className="blog-page-wrapper">
      <Helmet>
  <title>Uncategorized | 3D Printing Blog</title>
  <meta name="description" content="Explore uncategorized articles on 3D printing, FDM printers, slicing software, and more." />
</Helmet>

    <div className="main-container">
      <h1 className="page-heading">Uncategorized</h1>
      <div className="main-blog-layout">
        {/* Left Section */}
        <div className="left-section">
          {posts.map(({ id, title, url, excerpt }) => (
            <div key={id} className="post-item">
              <h2 className="post-title">
                <a href={url} className="post-link">{title}</a>
              </h2>
              <p className="post-excerpt">{excerpt}</p>
              <a href={url} className="read-more">Read More »</a>
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

export default  Uncategorized;
