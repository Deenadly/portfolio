import React from "react";
import "./Resume.css";
import banner from "../../assets/bg2.webp";
import resume from "../../assets/resume.webp";
import { Link } from "react-router-dom";
import Button from "../../component/button/Button";
import Footer from "../../component/footer/Footer";
import Nav from "../../component/Navbar casestudy/NAV";
import resumePdf from "../../assets/resumecv.pdf";
import { saveAs } from "file-saver";
const Resume = () => {
  const handleDownload = () => {
    saveAs(resumePdf, "Deenadhayal-cv.pdf");
  };
  return (
    <>
      <Nav />
      <div
        className="resume-container"
        style={{
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(to right,rgba(245,245,245,.6),rgba(245,245,245,.6)), url(${banner})`,
          backgroundPosition: "center center",
        }}
      >
        <p className="resume-title">RESUME</p>
        <div className="line-container">
          <div className="line"></div>
        </div>
        <div className="resume-items">
          <img src={resume} alt="" className="resume-img" />
        </div>
        <div className="projects-btn">
          <a
            href={resumePdf}
            download="Deenadhayal-cv.pdf"
            onClick={handleDownload}
          >
            <Button name="DOWNLOAD" value="download-btn" />
          </a>
          <Link to={"/"}>
            <Button name="GO BACK" value="download-back-btn" />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resume;
