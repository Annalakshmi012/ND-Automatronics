import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Career from './components/Career/Career';
import About from './components/About/About';
import Service from './components/printing_service/Service';
import Printer from './components/printer_service/Printer';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import BlogPost from './components/Blog/BlogPost';
import NDAMachine from './components/NDAMachine/NDAMachine';
import Training from './components/Training/Training';
import ThreeDPrintings from './components/Blog/category/3DPrinting/3DPrinting';
import NDAutomatronics from './components/Blog/category/NDAutomatronics/NDAutomatronics';
import Uncategorized from './components/Blog/category/Uncategorized/Uncategorized';
import November2024 from './components/Blog/Archives/November2024';
import October2024 from './components/Blog/Archives/October2024';
import September2024 from './components/Blog/Archives/September2024';
import July2023 from './components/Blog/Archives/July2023';
import June2023 from './components/Blog/Archives/June2023';
import VersatileWays from './components/Blog/category/3DPrinting/Versatile-ways-to-use-3d-printing';
import ThreeDPrinting from './components/Blog/category/3DPrinting/3d-printing';
import FDMvsSLSvsSL from './components/Blog/category/3DPrinting/3d-printing-comparison-fdm-vs-sls-vs-sl';
import Applications from './components/Blog/category/3DPrinting/Applications-of-3d-printing';
import FdmFilaments from './components/Blog/category/3DPrinting/Different-types-of-fdm-filaments-for-3d-printing';
import CalibrationGuide from './components/Blog/category/3DPrinting/Essential-guide-to-calibration-of-fdm-printer';
import SLAKeySteps from './components/Blog/category/3DPrinting/Key-steps-in-sla-printing';
import MarketGrowth from './components/Blog/category/3DPrinting/Market-growth-of-3d-printing';
import MarketWorldIndia from './components/Blog/category/3DPrinting/Market-of-3d-printing-in-the-world-india';
import FDMProsCons from './components/Blog/category/3DPrinting/Pros-and-cons-of-fdm-printer';
import SLAProsCons from './components/Blog/category/3DPrinting/Pros-and-cons-of-sla-printers';
import SLSProsCons from './components/Blog/category/3DPrinting/Pros-and-cons-of-sls-printer';
import FDMSteps from './components/Blog/category/3DPrinting/Steps-in-fdm-printer';
import SLSSteps from './components/Blog/category/3DPrinting/Steps-in-the-sls-printer';
import FDMCauses from './components/Blog/category/3DPrinting/The-cause-of-errors-in-fdm-printing';
import SLAErrors from './components/Blog/category/3DPrinting/Top-10-common-errors-in-3d-printing-sla';
import ResinsTypes from './components/Blog/category/3DPrinting/Types-of-3d-printing-resins';
import TechnologiesTypes from './components/Blog/category/3DPrinting/Types-of-3d-printing-technologies';
import SLACauses from './components/Blog/category/3DPrinting/Understanding-the-causes-of-errors-in-sla-printing';
import BeginningNda from './components/Blog/category/NDAutomatronics/Beginning-nda';
import BestSlicingSoftware from './components/Blog/category/Uncategorized/Best-slicing-software-for-3d-printer';
import CCLicensesGuide from './components/Blog/category/Uncategorized/Comprehensive-guide-to-cc-licenses';
import LaserEngravingDifference from './components/Blog/category/Uncategorized/Difference-between-laser-engraving-etching-marking';
import FdmPrinterBrand from './components/Blog/category/Uncategorized/Fdm-3d-printer-brand';
import FDMTopErrors from './components/Blog/category/Uncategorized/Top-10-common-errors-in-3d-printing-fdm';
import Ndautomatronics from './components/Blog/Ndautomatronics';
import ThankYou from "./components/Form/ThankYou";


import './App.css';

function App() {
  return (
    <>
    <Helmet>
        {/* Meta Title */}
        <title>ND Automatronics - India's Best 3D Printing Services, Products, Training & Professional Internships</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="ND Automatronics is India's leading 3D printing company offering cutting-edge 3D printing services, innovative 3D products, expert training programs, and professional internships. Join us to gain hands-on experience in the fastest growing 3D printing industry and shape your career with top industry professionals."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="3D printing India, 3D printing services, 3D printed products, 3D printing training, 3D printing internship, professional internships, 3D modeling, additive manufacturing, ND Automatronics, 3D design, 3D printing career, 3D prototyping"
        />

        {/* Robots meta to allow indexing */}
        <meta name="robots" content="index, follow" />

        {/* Author meta */}
        <meta name="author" content="ND Automatronics" />

        {/* 
          Why focus on these meta tags & keywords?
          - 3D printing services: Target users looking for companies offering 3D printing jobs or product creation.
          - 3D printed products: Attract customers and enthusiasts searching for innovative 3D products.
          - Training & internships: Reach students and professionals seeking hands-on learning and career growth opportunities.
          - India-focused: Local SEO for geographic relevance to Indian market.
          - Professional internships: Draw serious candidates who want valuable real-world experience.
        */}
      </Helmet>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/services/printing" element={<Service />} />
        <Route path="/services/printer" element={<Printer />} />
        <Route path="/services/training" element={<Training />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/NDAMachines" element={<NDAMachine />} />
        <Route path="/about" element={<About />} />
         <Route path="/blogPost" element={<BlogPost />} />
        <Route path="/3d-printing" element={<ThreeDPrintings />} />
        <Route path="/nd-automatronics" element={<NDAutomatronics />} />
        <Route path="/uncategorized" element={<Uncategorized />} />
                <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/november-2024" element={<November2024 />} />
        <Route path="/october-2024" element={<October2024 />} />
        <Route path="/september-2024" element={<September2024 />} />
        <Route path="/july-2023" element={<July2023 />} />
        <Route path="/june-2023" element={<June2023 />} />
         <Route path="/blog/Versatile-ways-to-use-3d-printing" element={<VersatileWays />} />
  <Route path="/blog/3d-printing" element={<ThreeDPrinting />} />
  <Route path="/blog/3d-printing-comparison-fdm-vs-sls-vs-sl" element={<FDMvsSLSvsSL />} />
  <Route path="/blog/Applications-of-3d-printing" element={<Applications />} />
  <Route path="/blog/Different-types-of-fdm-filaments-for-3d-printing" element={<FdmFilaments />} />
  <Route path="/blog/Essential-guide-to-calibration-of-fdm-printer" element={<CalibrationGuide />} />
  <Route path="/blog/Key-steps-in-sla-printing" element={<SLAKeySteps />} />
  <Route path="/blog/Market-growth-of-3d-printing" element={<MarketGrowth />} />
  <Route path="/blog/Market-of-3d-printing-in-the-world-india" element={<MarketWorldIndia />} />
  <Route path="/blog/Pros-and-cons-of-fdm-printer" element={<FDMProsCons />} />
  <Route path="/blog/Pros-and-cons-of-sla-printers" element={<SLAProsCons />} />
  <Route path="/blog/Pros-and-cons-of-sls-printer" element={<SLSProsCons />} />
  <Route path="/blog/Steps-in-fdm-printer" element={<FDMSteps />} />
  <Route path="/blog/Steps-in-the-sls-printer" element={<SLSSteps />} />
  <Route path="/blog/The-cause-of-errors-in-fdm-printing" element={<FDMCauses />} />
  <Route path="/blog/Top-10-common-errors-in-3d-printing-sla" element={<SLAErrors />} />
  <Route path="/blog/Types-of-3d-printing-resins" element={<ResinsTypes />} />
  <Route path="/blog/Types-of-3d-printing-technologies" element={<TechnologiesTypes />} />
  <Route path="/blog/Understanding-the-causes-of-errors-in-sla-printing" element={<SLACauses />} />
  <Route path="/blog/Beginning-nda" element={<BeginningNda />} />
<Route path="/blog/Best-slicing-software-for-3d-printer" element={<BestSlicingSoftware />} />
<Route path="/blog/Comprehensive-guide-to-cc-licenses" element={<CCLicensesGuide />} />
<Route path="/blog/Difference-between-laser-engraving-etching-marking" element={<LaserEngravingDifference />} />
<Route path="/blog/Fdm-3d-printer-brand" element={<FdmPrinterBrand />} />
<Route path="/blog/Top-10-common-errors-in-3d-printing-fdm" element={<FDMTopErrors />} />
<Route path="/about-author" element={<Ndautomatronics />} />


      </Routes>
      <Footer/>
    </>
  );
}

export default App;
