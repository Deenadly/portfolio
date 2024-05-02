import React from "react";
import banner from "../../assets/bg1.webp";
import "./Home.css";
import Button from "../../component/button/Button";
import About from "../about/About.jsx";
import linked from "../../assets/linkedin.webp";
import twitter from "../../assets/twitterx.webp";
import instagram from "../../assets/instagram.webp";
import github from "../../assets/github.webp";
import gmail from "../../assets/gmail.webp";
import Project from "../project/Project";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import { Link } from "react-scroll";
import Contact from "../contact/Contact.jsx";

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
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src={linked} alt="LinkedIn" />
          </a>
          <a
            href="mailto:deenadhayal007@gmail.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src={gmail} alt="Email" />
          </a>
          <a
            href="https://github.com/Deenadly"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://www.instagram.com/d_sirius_black_"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src={instagram} alt="Instagram" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src={twitter} alt="Twitter" />
          </a>
        </div>

        <div className="home-content">
          <div
            className="name-items"
            data-aos="zoom-out"
            
          >
            HEY, I'M DEENA DHAYALAN
          </div>
          <div className="home-items">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product.
          </div>
          <Link to={"/project"} smooth={true} duration={500}>
            <Button name="projects" value="project-btn" />
          </Link>
          <div className="mouse-con">
            <div className="mouse"></div>
          </div>
        </div>
      </div>
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
