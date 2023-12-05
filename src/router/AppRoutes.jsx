import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Project from "../pages/project/Project";
import Footer from "../component/footer/Footer";
import Manfree from "../pages/casestudy/Manfree";
import Netflix from "../pages/casestudy/Netflix";
import Portfolio from "../pages/casestudy/Portfolio";
import ScrollToTop from "../component/scrolltotop/Scrolltotop";
import Navbar from "../component/navbar/Navbar";
import Contact from "../pages/contact/Contact";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/manfree" element={<Manfree />} />
        <Route path="/netflix" element={<Netflix />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<h1>Not Found 404</h1>} />
      </Routes>
      <ScrollToTop />
    </div>
  );
};

export default AppRoutes;
