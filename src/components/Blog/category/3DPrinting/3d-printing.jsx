import React from "react";
import "../../BlogPost.css";
import related1 from "../../../../assets/30.jpg";
import related2 from "../../../../assets/31.jpg";
import related3 from "../../../../assets/32.jpg";
import { Link } from 'react-router-dom';
import  { useState } from "react";

import { 
  FaHeart, FaRegHeart, 
  FaFacebook, FaEnvelope, FaLinkedin, FaTelegram, 
  FaWhatsapp, FaPrint, FaReddit, FaPinterest 
} from "react-icons/fa";


const  ThreeDPrinting = () => {
  const blogUrl = encodeURIComponent(
    "https://nda3d.in/blog/3d-printing-market"
  );
  const blogTitle = encodeURIComponent(
    "The Growing Market of 3D Printing in the World & India"
  );
   const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0); // Optional: if you're tracking count

  const handleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1); // Toggle count
  };
  return (
      <div className="blog-page-wrapper">
    <div className="blog-layout">
      {/* Left Section */}
      <div className="left-section">
        
       <h1 className="custom-heading">3D Printing</h1>

<div className="blog-breadcrumb">
  <a href="#comment-form">10 Comments</a> /{" "}
  <Link to="/3d-printing">3D Printing</Link> /{" "}
  <Link to="/about-author">
    By ND Automatronics - 3D Printing Industry
  </Link>
</div>

<div className="blog-introduction">
  <p>
    <strong>3D Printing</strong>, also known as <strong>Additive Manufacturing</strong>, is a process of creating three-dimensional objects by building them layer by layer using a digital model. It is a revolutionary technology that allows physical objects to be created from a wide range of materials, including plastics, metals, ceramics, and even living tissue.
  </p>

  <p>
    The process typically starts with a 3D model created using computer-aided design (CAD) software or data obtained from a 3D scanner. The model is then sliced into thin horizontal cross-sectional layers, and these slices are sent to a 3D printer in general format of G-Code. The 3D printer reads the instructions from the sliced model and starts building the object layer by layer. It does this by depositing material in a specific pattern, solidifying it, and then moving on to the next layer. This process continues until the entire object is created.
  </p>

  <h3>The Major different types of 3D printing technologies, such as</h3>
  <ul>
    <li>Fused Deposition Modeling (FDM)</li>
    <li>Stereolithography (SLA)</li>
    <li>Selective Laser Sintering (SLS)</li>
    <li>Powder Bed Fusion (PBF)</li>
  </ul>
  <p>Each technology uses different methods and materials to create the final object.</p>

  <p>
    3D printing has numerous applications across various industries. It is used in prototyping and product development, allowing designers and engineers to quickly create physical models for testing and validation. It is also used in manufacturing customized products, such as personalized medical implants, dental prosthetics, and consumer goods. Additionally, 3D printing has made advancements in areas like aerospace, automotive, architecture, education, and art.
  </p>

  <p>
    Overall, 3D printing offers greater design freedom, cost-efficiency for small-scale production, and the ability to create complex geometries that are difficult or impossible with traditional manufacturing method.
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
             <img src={related1} alt="3D Printing Market Growth" />
             <Link to="/blog/Market-growth-of-3d-printing">
               Market Growth of 3D Printing: Insights and Future Trends
             </Link>
             <small>October 19, 2024 – In "3D Printing"</small>
           </div>
           <div className="post-card">
             <img src={related2} alt="Applications of 3D Printing" />
             <Link to="/blog/Applications-of-3d-printing">
               APPLICATIONS OF 3D PRINTING
             </Link>
             <small>July 10, 2023 – In "3D Printing"</small>
           </div>
           <div className="post-card">
             <img src={related3} alt="Top FDM 3D Printer Brands" />
             <Link to="/blog/Fdm-3d-printer-brand">
               Top 15 FDM 3D Printer Brands for Innovation and Quality
             </Link>
             <small>November 18, 2024 – In "FDM 3D Printing Brands"</small>
           </div>
         </div>
         </div>
         
         
                   {/* Post Navigation */}
                  <div className="post-navigation">
           <Link to="/blog/Market-growth-of-3d-printing" className="prev-post">
             &larr; Previous Post
           </Link>
           <Link to="/blog/Applications-of-3d-printing" className="next-post">
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

export default  ThreeDPrinting;
