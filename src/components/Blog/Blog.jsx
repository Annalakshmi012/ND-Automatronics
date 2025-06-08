import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import { FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";
import printingImage from "../../assets/26.jpg";
import blog1 from '../../assets/29.jpg';
import blog2 from '../../assets/30.jpg';
import blog3 from '../../assets/31.jpg';
import blog4 from '../../assets/29.jpg';
import blog5 from '../../assets/76.webp';
import blog6 from '../../assets/77.webp';
import blog7 from '../../assets/78.webp';
import blog8 from '../../assets/79.webp';
import blog9 from '../../assets/80.webp';
import blog10 from '../../assets/101.webp';
import blog11 from '../../assets/102.webp';
import blog12 from '../../assets/103.webp';
import top15Image from '../../assets/32.jpg';


const blogPosts = [
  {
    title: 'Key Steps for Efficient SLS Printer Workflow Explained',
    tag: '3d printing',
    description: 'Understanding the steps in SLS printer operation is essential for achieving high-quality results...',
    image: blog1,
    path: '/blog/steps-in-the-sls-printer'
  },
  {
    title: '3D Printing Technology Comparison: FDM vs SLS vs SLA',
    tag: '3d printing',
    description: 'Selecting the right technology can be crucial for achieving desired results...',
    image: blog2,
    path: '/blog/3d-printing-comparison-fdm-vs-sls-vs-sl'
  },
  {
    title: 'Types of 3D Printing Resins: A Comprehensive Overview',
    tag: '3d printing',
    description: 'Understanding the types of 3D printing resins available can significantly impact the print quality...',
    image: blog3,
    path: '/blog/types-of-3d-printing-resins'
  },
  {
    title: 'The Essential Guide to Calibration of FDM Printer for Perfect Prints',
    tag: '3d printing',
    description: 'Proper calibration boosts your printer’s efficiency and ensures accurate prints...',
    image: blog4,
    path: '/blog/essential-guide-to-calibration-of-fdm-printer'
  },
  {
    title: 'Pros and Cons of SLA Printers: A Comprehensive Guide',
    tag: '3d printing',
    description: 'SLA printers offer detailed prints with smooth finishes but have their own limitations...',
    image: blog5,
    path: '/blog/pros-and-cons-of-sla-printers'
  },
  {
    title: '3D Printing for Beginners: What You Need to Know',
    tag: '3d printing',
    description: 'Your complete beginner guide to entering the 3D printing world and starting your journey...',
    image: blog6,
    path: '/blog/3d-printing'
  },
  {
    title: 'APPLICATIONS OF 3D PRINTING',
    tag: '3d printing',
    description: 'Explore how 3D printing is transforming industries like healthcare and automotive...',
    image: blog7,
    path: '/blog/Applications-of-3d-printing'
  },
  {
    title: 'Different Types of FDM Filaments for 3D Printing',
    tag: '3d printing',
    description: 'Each filament type offers unique properties for various printing needs...',
    image: blog8,
    path: '/blog/different-types-of-fdm-filaments-for-3d-printing'
  },
  {
    title: 'Versatile Ways to use 3D Printing',
    tag: '3d printing',
    description: 'Discover practical applications of 3D printing across different industries...',
    image: blog9,
    path: '/blog/versatile-ways-to-use-3d-printing'
  },
  {
    title: 'Top 15 FDM 3D Printer Brands for Innovation and Quality',
    tag: '3d printing',
    description: 'Explore the leading FDM 3D printer brands revolutionizing additive manufacturing...',
    image: blog10,
    path: '/blog/fdm-3d-printer-brand'
  },
  {
    title: 'Top Slicing Software for 3D Printer: Ultimate Guide to Success',
    tag: 'slicing software',
    description: 'Learn how slicing software prepares 3D models for high-quality prints...',
    image: blog11,
    path: '/blog/top-slicing-software-for-3d-printer'
  },
 {
  title: 'Understanding the Cause of Errors in SLA Printing',
  tag: '3d printing',
  description: 'Discover the common causes of SLA print failures and how to troubleshoot them effectively...',
  image: blog12,
  path: '/blog/understanding-the-cause-of-errors-in-sla-printing'
}

];


const Blog = () => {
  const shareUrl = "https://yourblogpage.com";
  const visiblePosts = 3;
  const cardWidth = 340; // 300px + 40px margin
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.ceil(blogPosts.length / visiblePosts) - 1;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const translateX = -currentIndex * (cardWidth * visiblePosts);

  const handleShare = (platform) => {
    let url = "";
    switch (platform) {
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(shareUrl)}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      default:
        return;
    }
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="blog-header-section">
        <h1 onClick={() => (window.location.href = "/blog/3d-printing")} style={{ cursor: "pointer" }}>
          The Growing Market of 3D Printing <br /> in the World & India
        </h1>
        <div className="blog-icons" style={{ cursor: "pointer" }}>
          <FaWhatsapp onClick={() => handleShare("whatsapp")} />
          <FaTwitter onClick={() => handleShare("twitter")} />
          <FaLinkedin onClick={() => handleShare("linkedin")} />
        </div>
      </div>

      <div className="blog-image-section">
        <div className="blog-image-wrapper">
          <img src={printingImage} alt="3D Printing Market" />
        </div>
      </div>

      <section className="blog-main-section">
        <h2 className="blog-main-heading">
          <span className="blog-latest">Latest</span> <span className="highlight">Blog Posts</span>
        </h2>

        <div className="blog-cards-wrapper">
          <div className="blog-cards" style={{ transform: `translateX(${translateX}px)` }}>
            {blogPosts.map((post, index) => (
              <div className="blog-card" key={index}>
                <Link to={post.path}>
                  <img src={post.image} alt={post.title} />
                </Link>
                <p className="blog-category">{post.tag}</p>
                <h3>
                  <Link to={post.path} className="blog-title-link">
                    {post.title}
                  </Link>
                </h3>
                <p className="blog-description">{post.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="blog-navigation">
          <button className="blog-nav-btn circle-btn" onClick={handlePrev} disabled={currentIndex === 0}>
            &#8592;
          </button>
          <button className="blog-nav-btn circle-btn" onClick={handleNext} disabled={currentIndex === maxIndex}>
            &#8594;
          </button>
        </div>
      </section>

      
<section className="threeD-section">
  <div className="content-wrapper">
    <div className="image-side">
      <img src={top15Image} alt="Top 15 FDM 3D Printers" />
    </div>
    <div className="text-side">
      <h2 className="blog-main-heading">3d printing</h2>
      <Link to="/blog/fdm-3d-printer-brand" className="subheading-link">
        <h3 className="subheading">Top 15 FDM 3D Printer Brands for Innovation and Quality</h3>
      </Link>
      <p className="description">
        Fused Deposition Modeling (FDM) 3D printing is one of the most widely used additive manufacturing technologies, praised for its versatility, affordability, and range of applications from prototyping to small-batch production...
      </p>
    </div>
  </div>
</section>
    </>
  );
};

export default Blog;
