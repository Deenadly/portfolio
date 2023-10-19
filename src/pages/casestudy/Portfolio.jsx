import React from "react";
import Button from "../../component/button/Button";
import banner from "../../assets/bg1.jpg";
import "./Portfolio.css";
import portfolio from "../../assets/Portfolio.png";
import Footer from "../../component/footer/Footer";
import { Link } from "react-router-dom";
import Nav from "../../component/Navbar casestudy/NAV";

const Portfolio = () => {
  return (
    <>
      <div
        className="portfolio-single-container"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center center",
        }}
      >
        <Nav />
        <div className="portfolio-single-content">
          <div className="portfolio-single-title">PORTFOLIO</div>
          <div className="portfolio-single-item">
            This page presents a comprehensive case study of my portfolio,
            providing an in-depth Project Overview and offering a direct link to
            explore my work.
          </div>
          <Link to={"/"} target="_blank">
            <Button name="live link" value="project-btn" />
          </Link>
        </div>
      </div>
      <div className="project-single-item">
        <img className="portfolio" src={portfolio} alt="" />
        <div className="project-single-details">
          <div className="project-title-single-portfolio">PROJECT OVERVIEW</div>
          <div className="project-single-description">
            <p>
              Designing my portfolio was a significant milestone, demonstrating
              my proficiency in web development. I carefully constructed a sleek
              digital space, using HTML, CSS, JavaScript, and React to showcase
              my projects and skills in an engaging and user-friendly manner.
              created a engaging platform that reflects my passion for design
              and development.
            </p>
            <p>
              Creating my portfolio was an enriching journey that has only
              deepened my passion for crafting captivating user experiences and
              expanding my skill set.
            </p>
            <p>
              My primary goal in creating my portfolio was to elevate its online
              presence and ensure a seamless and user-friendly experience across
              a diverse range of devices.
            </p>
            <p>Feel free to check out the Project by visiting the Live Link.</p>
          </div>
          <div className="tool-title-single-portfolio">TOOLS USED</div>
          <div className="skills">
            <div className="skills__skill">HTML</div>
            <div className="skills__skill">CSS</div>
            <div className="skills__skill">JavaScript</div>
            <div className="skills__skill">React</div>
            <div className="skills__skill">GIT</div>
            <div className="skills__skill">Github</div>
          </div>
          <div className="tool-title-single-portfolio">SEE LIVE</div>
          <div className="projects-btn">
            <Link to={"/"} target="_blank">
              <Button name="LIVE LINK" value="live-btn" />
            </Link>
            <Link to={"/"}>
              <Button name="GO BACK" value="back-btn" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
