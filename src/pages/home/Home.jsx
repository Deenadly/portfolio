import React from "react";
import banner from "../../assets/bg1.jpg";
import "./Home.css";
import Button from "../../component/button/Button";
import About from "../about/About.jsx";
import linked from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";
import gmail from "../../assets/gmail.png";
import Project from "../project/Project";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
const Home = () => {
  return (
    <>
      <div
        name="/"
        className="home-container"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center center",
        }}
      >
        <Navbar />

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/deenadhayalan-dev/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={linked} alt="" />
          </a>
          <a
            href="https://github.com/Deenadly"
            rel="noreferrer"
            target="_blank"
          >
            <img src={github} alt="" />
          </a>
          <a
            href="https://deenadhayal007@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <img src={gmail} alt="" />
          </a>
          <a
            href="https://www.instagram.com/d_sirius_black_/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={instagram} alt="" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            rel="noreferrer"
            target="_blank"
          >
            <img src={twitter} alt="" />
          </a>
        </div>
        <div className="home-content">
          <div className="name-items">HEY, I'M DEENA DHAYALAN</div>
          <div className="home-items">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product.
          </div>
          <Button name="projects" value="project-btn" />
          <div className="mouse-con">
            <div className="mouse"></div>
          </div>
        </div>
      </div>
      <About />
      <Project />
      <Footer />
    </>
  );
};

export default Home;
