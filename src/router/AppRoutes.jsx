import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Project from "../pages/project/Project";
import Footer from "../component/footer/Footer";
import Manfree from "../pages/casestudy/Manfree";
import Netflix from "../pages/casestudy/netflix";
import Portfolio from "../pages/casestudy/Portfolio";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/manfree" element={<Manfree />} />
        <Route path="/netflix" element={<Netflix />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<h1>Not Found 404</h1>} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
