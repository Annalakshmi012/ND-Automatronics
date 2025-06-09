import React from 'react';
import "./Archives.css";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const posts = [
  {
    id: 1,
    title: "Types of 3D Printing Resins: A Comprehensive Overview",
    url: "/blog/Types-of-3d-printing-resins",
    excerpt:
      "In the world of crafting, choosing the right resin is like finding the right paintbrush—it’s the key to turning your vision into reality. 3D printing has revolutionized how we create and manufacture objects, with resins playing a crucial role in this technology. Understanding the types of 3D printing resins available can significantly impact the quality […]",
  },
  {
    id: 2,
    title: "Versatile Ways to use 3D Printing",
    url: "/blog/Versatile-ways-to-use-3d-printing",
    excerpt:
      "In recent years, 3D printing has transformed from a specialized technology into a versatile tool across many fields. This advancement is reshaping how we create, design, and solve everyday problems. Discover how 3D printing can unlock new possibilities.",
  },
  {
    id: 3,
    title: "Different Types of FDM Filaments for 3D Printing",
    url: "/blog/Different-types-of-fdm-filaments-for-3d-printing",
    excerpt:
      "Choosing the proper filament is crucial to the success of your 3D printing projects. With various types of FDM filaments available, each offering unique properties, selecting the right one can make a significant difference in your results.",
  },
  {
    id: 4,
    title: "Types of 3D Printing Technologies: A Guide to 3D Printing Services",
    url: "/blog/Types-of-3d-printing-technologies",
    excerpt:
      "Are you fascinated by the innovative world of 3D Printing? This guide explores the various types of 3D printing technologies and how each one caters to different needs—from custom prototypes to practical solutions.",
  },
];

const September2024 = () => {
  return (
     <div className="blog-page-wrapper">
      <Helmet>
  <title>September 2024 Archives | 3D Printing Blog</title>
  <meta name="description" content="Explore 3D printing articles from September 2024 including resin types, FDM filaments, and versatile applications." />
</Helmet>

    <div className="main-container">
      <h1 className="page-heading">September 2024</h1>
      <div className="blog-layout">
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

export default September2024;
