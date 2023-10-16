import React from "react";
import "./About.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import java from "../../assets/js.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import query from "../../assets/query.png";
import router from "../../assets/router.png";
import git from "../../assets/gith.png";
import Button from "../../component/button/Button";
const About = () => {
  return (
    <>
      <div className="about-container">
        <p className="about-title">ABOUT ME</p>
        <div className="line-container">
          <div className="line"></div>
        </div>
        <div className="about-subtitle-container">
          <p className="about-subtitle">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology.
          </p>
        </div>
        <div className="about-content">
          <div className="about-known">
            <h3 className="tittle-known">GET TO kNOW ME!</h3>
            <div className="known-item">
              I'm a <span>Frontend Web Developer</span> building the Front-end
              of Websites and Web Applications that leads to the success of the
              overall product. Check out some of my work in the{" "}
              <span>Projects</span> section.
              <br />I also like sharing content related to the stuff that I have
              learned over the years in <span>Web Development</span> so it can
              help other people of the Dev Community. Feel free to Connect or
              Follow me on my{" "}
              <a
                href="https://www.linkedin.com/in/deenadhayalan-dev/"
                rel="noreferrer"
                target="_blank"
              >
                Linkedin
              </a>{" "}
              where I post useful content related to Web Development and
              Programming
              <br /> I'm open to <span>Job</span> opportunities where I can
              contribute, learn and grow. If you have a good opportunity that
              matches my skills and experience then don't hesitate to contact
              me.
            </div>
            <Button name="CONTACT" value="contact-btn" />
          </div>
          <div className="skillss">
            <h3 className="tittle-skill">MY SKILLS</h3>
            <div className="skill-items">
              <img src={html} alt="" />
              <img src={css} alt="" />
              <img src={java} alt="" />
              <img src={react} alt="" />
              <img src={redux} alt="" />
              <img src={router} alt="" />
              <img src={query} alt="" />
              <img src={git} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
