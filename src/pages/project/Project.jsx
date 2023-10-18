import React from "react";
import "./Project.css";
import manfree from "../../assets/manfree.png";
import netflix from "../../assets/netflix.png";
import Button from "../../component/button/Button";
import { Link } from "react-router-dom";
const Project = () => {
  return (
    <>
      <div name="/project" className="project-container">
        <p className="project-title">PROJECTS</p>
        <div className="line-container">
          <div className="line"></div>
        </div>
        <div className="project-subtitle-container">
          <p className="project-subtitle">
            Here you will find information about projects serve as a testament
            to my skills, creativity, and problem-solving abilities.
          </p>
        </div>
        <div className="project-list">
          <div className="project-item">
            <img className="manfreer" src={manfree} alt="" />
            <div className="project-details">
              <div className="project-title-manfree">MANFREE</div>
              <div className="project-description">
                manfree is a successful project that I created which have been a
                dynamic Software Institute Website using HTML, CSS,JavaScript,
                and React, showcasing our company's mission and our product
                offerings.
              </div>
              <Link to="/manfree">
                <Button name="case study" value="casestudy-btn" />
              </Link>
            </div>
          </div>
          <div className="project-item">
            <img className="manfreer" src={netflix} alt="" />
            <div className="project-details">
              <div className="project-title-manfree">NETFLIX-CLONE</div>
              <div className="project-description">
                I recreated the official web app of Netflix's streaming platform
                because I was drawn to its beautiful UI.It was a great
                experience for me to build the entire frontend.honing my skills
                and igniting my passion for creating captivating web
                experiences.
              </div>
              <Link to="/netflix">
                <Button name="case study" value="casestudy-btn" />
              </Link>
            </div>
          </div>
          <div className="project-item">
            <img className="manfreer" src={manfree} alt="" />
            <div className="project-details">
              <div className="project-title-manfree">PORTFOLIO</div>
              <div className="project-description">
                I developed my portfolio in an impressive manner to showcase my
                skills and projects. It was a rewarding experience for me to
                create a platform that reflects my passion for design and
                development.it's a visual narrative of my dedication to design
                and development.
              </div>
              <Link to="/portfolio">
                <Button name="case study" value="casestudy-btn" />
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Project;
