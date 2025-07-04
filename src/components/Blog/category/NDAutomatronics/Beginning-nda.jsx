import React from "react";
import "../../BlogPost.css";
import related1 from "../../../../assets/76.webp";
import related2 from "../../../../assets/77.webp";
import related3 from "../../../../assets/70.jpg";
import { Link } from 'react-router-dom';
import  { useState } from "react";
import { 
  FaHeart, FaRegHeart, 
  FaFacebook, FaEnvelope, FaLinkedin, FaTelegram, 
  FaWhatsapp, FaPrint, FaReddit, FaPinterest 
} from "react-icons/fa";
import { Helmet } from 'react-helmet';


const  BeginningNDA = () => {
 const blogUrl = encodeURIComponent("https://nda3d.in/blog/Beginning-nda");
 const blogTitle = encodeURIComponent("Beginning of ND Automatronics");

   const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0); // Optional: if you're tracking count

  const handleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1); // Toggle count
  };
  return (
     <div className="blog-page-wrapper">
      <Helmet>
  <title>Beginning of ND Automatronics | ND Blog</title>
  <meta name="description" content="The journey of ND Automatronics starting from AGNII.1 FDM printer to becoming a registered manufacturer." />
  <link rel="canonical" href="https://nda3d.in/blog/Beginning-nda" />
</Helmet>

    <div className="blog-layout">
      {/* Left Section */}
      <div className="left-section">
        <h1 className="custom-heading">
          Beginning of ND Automatronics
        </h1>

        <div className="blog-breadcrumb">
          <a href="#comment-form">Leave a Comment</a> / 
          <Link to="/nd-automatronics">ND Automatronics</Link> / 
          <Link to="/about-author">By ND Automatronics - 3D Printing Industry</Link>
        </div>

        <div className="blog-introduction">
          <p>
            In September 2020, Mr Dinesh Krishna T. & Mr Hari Vignesh A. came up with the concept for building an FDM 3D printer. Components for 3D printers were gathered from various sources. Through a lot of experimentation, the first functioning FDM printer, known as “AGNII.1,” was brought to life on December 2020.
          </p>
          <p>
            Several printings for projects and domestic use were carried out successfully. Innovative upgrades and redesigns were made to AGNII.1’s functionality. As a result of this, AGNII.1 was able to plot A4 papers and introduced a new product termed pencil bordered A4 sheets.
          </p>
          <p>
            With Natarajan & Dhanam Automated Electronics, the name “ND Automatronics” came into existence in February 2021. The NDA became operational with its Instagram page.
          </p>
          <p>
            In Salem, Tamil Nadu on June 2021, ND Automatronics had been properly registered on MSME-Udayam (UDYAM-TN-20-0025648) and GST (33DTUPA8317J1ZD).
          </p>
          <p>
            Manufacturing of personalized products, developing prototypes, and FDM 3D printers were the categories into which ND Automatronics came. Over a span of over two years, NDA delivered excellent customer service to more than 100 customers across India and continues.
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
      <img src={related1} alt="3D Printing" />
      <Link to="/blog/3d-printing">3D Printing</Link>
      <small>June 25, 2023 – In "3D Printing"</small>
    </div>
    <div className="post-card">
      <img src={related2} alt="Pros and Cons" />
      <Link to="/blog/Pros-and-cons-of-fdm-printer">The Pros and Cons of FDM Printers: What You Need to Know</Link>
      <small>October 20, 2024 – In "3D Printing"</small>
    </div>
    <div className="post-card">
      <img src={related3} alt="CC Licenses" />
      <Link to="/blog/Comprehensive-guide-to-cc-licenses">Unlocking Creativity: A Comprehensive Guide to CC Licenses</Link>
      <small>October 26, 2024 – In "cc licenses"</small>
    </div>
  </div>
</div>

          {/* Post Navigation */}
           <div className="post-navigation">

          
          <Link to="/blog/Pros-and-cons-of-fdm-printer" className="prev-post">
  &larr; Previous Post
</Link>
<Link to="/blog/Errors-in-SLA-printing" className="next-post">
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

export default BeginningNDA;
