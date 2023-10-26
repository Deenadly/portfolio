import React from "react";
import Button from "../../component/button/Button";
import banner from "../../assets/bg1.jpg";
import "./Netflix.css";
import netflix from "../../assets/netflix.png";
import Footer from "../../component/footer/Footer";
import { Link } from "react-router-dom";
import Nav from "../../component/Navbar casestudy/NAV";

const Netflix = () => {
  return (
    <>
      <div
        className="netflix-single-container"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center center",
        }}
      >
        <Nav />
        <div className="netflix-single-content">
          <div className="netflix-single-title">NETFLIX-CLONE</div>
          <div className="netflix-single-item">
            This page features the case study of the Netflix clone project,
            encompassing the Project Overview, Tools Utilized, and live link.
          </div>
          <Link
            to={"https://netflix-clone-two-fawn.vercel.app/"}
            target="_blank"
          >
            <Button name="live link" value="project-btn" />
          </Link>
        </div>
      </div>
      <div className="project-single-item">
        <img className="netflix" src={netflix} alt="" />
        <div className="project-single-details">
          <div className="project-title-single-netflix">PROJECT OVERVIEW</div>
          <div className="project-single-description">
            <p>
              Creating a Netflix clone was a remarkable achievement, showcasing
              my expertise in frontend web development. I meticulously crafted a
              sophisticated web application, harnessing HTML, CSS, JavaScript,
              and React to replicate the renowned streaming platform's user
              interface and functionality.
            </p>
            <p>
              It was a rewarding experience that further fueled my passion for
              crafting compelling user experiences and expanding my skill set.
            </p>
            <p>
              My objective was to enhance the Netflix clone's online presence
              and ensure a seamless user experience across a wide range of
              devices
            </p>
            <p>Feel free to check out the Project by visiting the Live Link.</p>
          </div>
          <div className="tool-title-single-netflix">TOOLS USED</div>
          <div className="skills">
            <div className="skills__skill">HTML</div>
            <div className="skills__skill">CSS</div>
            <div className="skills__skill">JavaScript</div>
            <div className="skills__skill">React</div>
            <div className="skills__skill">GIT</div>
            <div className="skills__skill">Github</div>
          </div>
          <div className="tool-title-single-netflix">SEE LIVE</div>
          <div className="projects-btn">
            <Link
              to={"https://netflix-clone-two-fawn.app/"}
              target="_blank"
            >
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

export default Netflix;
