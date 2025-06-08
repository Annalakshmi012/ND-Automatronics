import React from "react";
import "./Archives.css";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Understanding the Pros and Cons of FDM Printers",
    url: "/blog/pros-cons-fdm-printers",
    excerpt:
      "Fused Deposition Modeling (FDM) printing has revolutionized the way we approach manufacturing and prototyping. This 3D printing technology is particularly popular due to its unique advantages, making it suitable for a wide range of applications across industries. However, it’s essential to also consider the disadvantages that come with FDM printing. In this blog, we will […]",
  },
  {
    id: 2,
    title: "Difference between Laser Engraving, Etching & Marking",
    url: "/blog/laser-engraving-etching-marking",
    excerpt:
      "In the world of manufacturing and design, laser engraving, etching, and marking are essential techniques that offer unique benefits and applications. Understanding the differences between these methods is crucial for businesses looking to enhance their product branding and functionality.",
  },
  {
    id: 3,
    title: "Unlocking Creativity: A Comprehensive Guide to CC Licenses",
    url: "/blog/Comprehensive-guide-to-cc-licenses",
    excerpt:
      "In today’s digital age, sharing creative work is easier than ever, thanks in large part to CC licenses. These licenses allow creators to share their work while retaining certain rights, fostering collaboration and innovation.",
  },
  {
    id: 4,
    title: "Top 10 Common Errors in 3D Printing (SLA) You Need to Avoid!",
    url: "/blog/Top-10-common-errors-in-3d-printing-sla",
    excerpt:
      "Welcome to our exploration of Errors in 3D Printing (SLA)! If you’re delving into the fascinating world of stereolithography, understanding the common pitfalls can make all the difference in achieving flawless prints.",
  },
  {
    id: 5,
    title: "The Pros and Cons of FDM Printers: What You Need to Know",
    url: "/blog/Pros-and-cons-of-fdm-printer",
    excerpt:
      "When considering 3D printing, understanding the pros and cons of FDM printer technology is essential for making an informed decision. This article explores key advantages and disadvantages like cost, ease of use, print quality, and material options.",
  },
];

const BlogPost = () => {
  return (
     <div className="blog-page-wrapper">
    <div className="main-container">
      <h1 className="page-heading">October 2024</h1>
      <div className="blog-layout">
        {/* Left Section */}
        <div className="left-section">
          {posts.map(({ id, title, url, excerpt }) => (
            <div key={id} className="post-item">
              <h2 className="post-title">
                <Link to={url} className="post-link">
                  {title}
                </Link>
              </h2>
              <p className="post-excerpt">{excerpt}</p>
              <Link to={url} className="read-more">
                Read More »
              </Link>
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
            <li>
              <Link to="/blog/Market-of-3d-printing-in-the-world-india">
                The Growing Market of 3D Printing in the World & India
              </Link>
            </li>
            <li>
              <Link to="/blog/Steps-in-the-sls-printer">
                Key Steps for Efficient SLS Printer Workflow Explained
              </Link>
            </li>
            <li>
              <Link to="/blog/3d-printing-comparison-fdm-vs-sls-vs-sl">
                3D Printing Technology Comparison: FDM vs SLS vs SLA
              </Link>
            </li>
            <li>
              <Link to="/blog/Steps-in-fdm-printer">Key Steps in FDM Printing: A Quick Guide</Link>
            </li>
            <li>
              <Link to="/blog/Best-slicing-software-for-3d-printer">
                Top Slicing Software for 3D Printer: Ultimate Guide to Success
              </Link>
            </li>
            <li>
              <Link to="/blog/Fdm-3d-printer-brand">Top 15 FDM 3D Printer Brands for Innovation and Quality</Link>
            </li>
            <li>
              <Link to="/blog/Pros-and-cons-of-sla-printers">Pros and Cons of SLA Printers: A Comprehensive Guide</Link>
            </li>
            <li>
              <Link to="/blog/Pros-and-cons-of-sls-printer">Understanding the Pros and Cons of SLS Printers</Link>
            </li>
            <li>
              <Link to="/blog/Key-steps-in-sla-printing">Key Steps in SLA Printing: A Quick Guide</Link>
            </li>
            <li>
              <Link to="/blog/Pros-and-cons-of-fdm-printer">Understanding the Pros and Cons of FDM Printers</Link>
            </li>
          </ul>

          {/* Archives */}
          <h3 className="underline-heading">Archives</h3>
          <ul className="archives">
            <li>
              <Link to="/november-2024">November 2024</Link>
            </li>
            <li>
              <Link to="/october-2024">October 2024</Link>
            </li>
            <li>
              <Link to="/september-2024">September 2024</Link>
            </li>
            <li>
              <Link to="/july-2023">July 2023</Link>
            </li>
            <li>
              <Link to="/june-2023">June 2023</Link>
            </li>
          </ul>

          {/* Categories */}
          <h3 className="underline-heading">Categories</h3>
          <ul className="categories">
            <li>
              <Link to="/3d-printing">3D Printing</Link>
            </li>
            <li>
              <Link to="/nd-automatronics">ND Automatronics</Link>
            </li>
            <li>
              <Link to="/uncategorized">Uncategorized</Link>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BlogPost;
