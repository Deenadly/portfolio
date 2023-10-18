import React from "react";
import "./Footer.css";
import linked from "../../assets/linkedin.png";
import twitter from "../../assets/twitters.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";
import gmail from "../../assets/gmail.png";
const Footer = () => {
  return (
    <div className="Footer-container">
      <div className="Footer-items">
        <div className="Footer-social">
          <div className="Footer-social-title">SOCAIL</div>
          <a
            href="mailto:deenadhayal007@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <img src={gmail} alt="Gmail" />
          </a>
          <a
            href="https://www.linkedin.com/in/deenadhayalan-dev/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={linked} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/Deenadly"
            rel="noreferrer"
            target="_blank"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://www.instagram.com/d_sirius_black_/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={instagram} alt="Instagram" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            rel="noreferrer"
            target="_blank"
          >
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
        <div className="Footer-about">
          <div className="Footer-about-title">DEENA DHAYALAN</div>
          <div className="Footer-about-details">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </div>
        </div>
      </div>
      <div className="footer-lower">
        © Copyright2023 Made by {""}
        <a rel="noreferrer" target="_blank" href="/">
          Deena Dhayalan
        </a>
      </div>
    </div>
  );
};

export default Footer;
