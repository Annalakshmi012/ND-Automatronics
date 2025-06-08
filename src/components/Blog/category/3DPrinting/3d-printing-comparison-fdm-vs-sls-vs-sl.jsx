import React from "react";
import "../../BlogPost.css";
import blog1 from "../../../../assets/104.webp";
import blog2 from "../../../../assets/105.webp";
import blog3 from "../../../../assets/106.webp";
import blog4 from "../../../../assets/107.webp";
import blog5 from "../../../../assets/108.webp";
import blog6 from "../../../../assets/109.webp";
import blog7 from "../../../../assets/110.webp";
import blog8 from "../../../../assets/111.webp";
import blog9 from "../../../../assets/112.webp";
import blog10 from "../../../../assets/113.webp";


import related1 from "../../../../assets/77.webp";
import related2 from "../../../../assets/80.webp";
import related3 from "../../../../assets/114.webp";
import { Link } from 'react-router-dom';
import  { useState } from "react";
import { 
  FaHeart, FaRegHeart, 
  FaFacebook, FaEnvelope, FaLinkedin, FaTelegram, 
  FaWhatsapp, FaPrint, FaReddit, FaPinterest 
} from "react-icons/fa";


const PrintingComparison = () => {
 const blogUrl = encodeURIComponent(
  "https://nda3d.in/blog/3d-printing-comparison-fdm-vs-sls-vs-sl"
);
const blogTitle = encodeURIComponent(
  "3D Printing Technology Comparison: FDM vs SLS vs SLA"
);

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
     <div className="blog-page-wrapper">
    <div className="blog-layout">
      <div className="left-section">
         <h1 className="custom-heading">
          3D Printing Technology Comparison: FDM vs SLS vs SLA
        </h1>

        <div className="blog-breadcrumb">
          <a href="#comment-form">Leave a Comment</a> /
          <Link to="/3d-printing"> 3D Printing</Link> /
          <Link to="/about-author"> By ND Automatronics</Link>
        </div>

        <div className="blog-introduction">
          <p>
            In the rapidly evolving world of 3D printing, selecting the right
            technology can be crucial for achieving desired results. The three
            primary methods—FDM, SLA, and SLS—each have their strengths and
            weaknesses. Here's a comparison to help you choose the best one.
          </p>

          <h2>1. Printing Process</h2>
          <p>
            <strong>FDM:</strong> Melts thermoplastic filament through a nozzle. <br />
            <strong>SLA:</strong> Uses UV laser to cure resin. <br />
            <strong>SLS:</strong> Uses laser to sinter powder, no support needed.
          </p>
           <div className="image-wrapper">
            <img className="featured-image" src={blog1} alt="SLS Workflow" />
          </div>
          <h2>2. Material Types</h2>
          <p>
            <strong>FDM:</strong> ABS, PLA, PETG <br />
            <strong>SLA:</strong> Standard & specialty resins <br />
            <strong>SLS:</strong> Nylon, glass-filled composites
          </p>
           <div className="image-wrapper">
            <img className="featured-image" src={blog2} alt="SLS Workflow" />
          </div>
          <h2>3. Resolution & Accuracy</h2>
          <p>
            <strong>FDM:</strong> Moderate <br />
            <strong>SLA:</strong> High precision <br />
            <strong>SLS:</strong> Good but slightly rough
          </p>
           <div className="image-wrapper">
            <img className="featured-image" src={blog3} alt="SLS Workflow" />
          </div>
          <h2>4. Surface Finish</h2>
          <p>
            <strong>FDM:</strong> Rough, needs post-processing <br />
            <strong>SLA:</strong> Smooth and clean <br />
            <strong>SLS:</strong> Grainy, needs media blasting
          </p>
           <div className="image-wrapper">
            <img className="featured-image" src={blog4} alt="SLS Workflow" />
          </div>
          <h2>5. Support Structures</h2>
          <p>
            <strong>FDM:</strong> Needs supports <br />
            <strong>SLA:</strong> Needs supports (easy removal) <br />
            <strong>SLS:</strong> No supports needed
          </p>
            <div className="image-wrapper">
            <img className="featured-image" src={blog5} alt="SLS Workflow" />
          </div>
          <h2>6. Build Volume</h2>
          <p>
            <strong>FDM:</strong> Large (up to 300×600 mm) <br />
            <strong>SLA:</strong> Moderate <br />
            <strong>SLS:</strong> Small-medium (high precision)
          </p>
          <div className="image-wrapper">
            <img className="featured-image" src={blog6} alt="SLS Workflow" />
          </div>
          <h2>7. Print Speed</h2>
          <p>
            <strong>FDM:</strong> Fast <br />
            <strong>SLA:</strong> Slow <br />
            <strong>SLS:</strong> Moderate
          </p>
           <div className="image-wrapper">
            <img className="featured-image" src={blog7} alt="SLS Workflow" />
          </div>
          <h2>8. Post-Processing</h2>
          <p>
            <strong>FDM:</strong> Support removal, sanding <br />
            <strong>SLA:</strong> Washing & curing <br />
            <strong>SLS:</strong> Powder cleaning, optional finishing
          </p>
            <div className="image-wrapper">
            <img className="featured-image" src={blog8} alt="SLS Workflow" />
          </div>
          <h2>9. Cost of Materials</h2>
          <p>
            <strong>FDM:</strong> Low ($50–150/kg) <br />
            <strong>SLA:</strong> High ($100–500/L) <br />
            <strong>SLS:</strong> Moderate ($100/kg with reuse)
          </p>
           <div className="image-wrapper">
            <img className="featured-image" src={blog9} alt="SLS Workflow" />
          </div>
          <h2>10. Ideal Use Cases</h2>
          <p>
            <strong>FDM:</strong> Prototypes, hobby projects <br />
            <strong>SLA:</strong> Jewelry, dental, detailed models <br />
            <strong>SLS:</strong> Functional & industrial parts
          </p>
           <div className="image-wrapper">
            <img className="featured-image" src={blog10} alt="SLS Workflow" />
          </div>
          <h2>Conclusion</h2>
          <p>
            Choosing between FDM, SLA, and SLS depends on your need for
            resolution, material strength, cost, and complexity. Each method
            shines in different applications—pick the one that fits your
            project.
          </p>
          
        </div>
        <div className="share-section">

  <h3 className="share-heading">Share this:</h3>
        <ul className="share-buttons">
  <li>
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.print();
      }}
      title="Print"
      className="share-link"
    >
      <FaPrint size={20} /> Print
    </a>
  </li>
  <li>
    <a
      href={`mailto:?subject=${blogTitle}&body=Check out this article: ${blogUrl}`}
      title="Email"
      target="_blank"
      rel="noopener noreferrer"
      className="share-link"
    >
      <FaEnvelope size={20} /> Email
    </a>
  </li>
  <li>
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${blogUrl}`}
      title="Share on Facebook"
      target="_blank"
      rel="noopener noreferrer"
      className="share-link"
    >
      <FaFacebook size={20} /> Facebook
    </a>
  </li>
  <li>
    <a
      href={`https://www.linkedin.com/sharing/share-offsite/?url=${blogUrl}`}
      title="Share on LinkedIn"
      target="_blank"
      rel="noopener noreferrer"
      className="share-link"
    >
      <FaLinkedin size={20} /> LinkedIn
    </a>
  </li>
  <li>
    <a
      href={`https://t.me/share/url?url=${blogUrl}&text=${blogTitle}`}
      title="Share on Telegram"
      target="_blank"
      rel="noopener noreferrer"
      className="share-link"
    >
      <FaTelegram size={20} /> Telegram
    </a>
  </li>
  <li>
    <a
      href={`https://wa.me/?text=${blogTitle}%20${blogUrl}`}
      title="Share on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      className="share-link"
    >
      <FaWhatsapp size={20} /> WhatsApp
    </a>
  </li>
  <li>
    <a
      href={`https://www.reddit.com/submit?url=${blogUrl}&title=${blogTitle}`}
      title="Share on Reddit"
      target="_blank"
      rel="noopener noreferrer"
      className="share-link"
    >
      <FaReddit size={20} /> Reddit
    </a>
  </li>
  <li>
    <a
      href={`https://pinterest.com/pin/create/button/?url=${blogUrl}&description=${blogTitle}`}
      title="Share on Pinterest"
      target="_blank"
      rel="noopener noreferrer"
      className="share-link"
    >
      <FaPinterest size={20} /> Pinterest
    </a>
  </li>
</ul>

</div>


           <div className="like-container">
      <button className="like-button" onClick={handleLike}>
        {liked ? <FaHeart color="red" /> : <FaRegHeart color="gray" />}
        <span>{likes} Like{likes !== 1 && "s"}</span>
      </button>
    </div>

          {/* Related Posts */}
       <div className="related-posts">
  <h3>Related</h3>
  <div className="posts-container">
    <div className="post-card">
      <img src={related1} alt="3D Printing Technologies" />
      <Link to="/blog/Types-of-3d-printing-technologies">
        Types of 3D Printing Technologies: A Guide to 3D Printing Services
      </Link>
      <small>September 14, 2024 – In "3D Printing"</small>
    </div>
    <div className="post-card">
      <img src={related2} alt="3D Printing Overview" />
      <Link to="/blog/3d-printing">
        3D Printing
      </Link>
      <small>June 25, 2023 – In "3D Printing"</small>
    </div>
    <div className="post-card">
      <img src={related3} alt="FDM Pros and Cons" />
      <Link to="/blog/Pros-and-cons-of-fdm-printer">
        The Pros and Cons of FDM Printers: What You Need to Know
      </Link>
      <small>October 20, 2024 – In "3D Printing"</small>
    </div>
  </div>
</div>

                   {/* Post Navigation */}
                  <div className="post-navigation">
           <Link to="/blog/Key-steps-in-sla-printing" className="prev-post">
             &larr; Previous Post
           </Link>
           <Link to="/blog/Steps-in-fdm-printer" className="next-post">
             Next Post &rarr;
           </Link>
         </div>
         
                   {/* Comment Summary */}
                   
                   <div className="comment-form" id="comment-form">
           <h3>Leave a Reply</h3>
           <form>
             <textarea placeholder="Write your comment here..." rows="5" required></textarea>
             <button type="submit">Post Comment</button>
           </form>
         </div>
         
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
  );
};

export default  PrintingComparison;
