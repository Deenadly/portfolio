import React from "react";
import "./About.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import java from "../../assets/js.svg";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import query from "../../assets/query.png";
import router from "../../assets/router.png";
import git from "../../assets/git.png";

const About = () => {
  return (
    <>
      <div className="about-container">
        <p className="about-title">ABOUT ME</p>
        <p className="about-subtitle">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>
        <div className="about-content">
          <div className="about-known">
            <h3 className="tittle-known">GET TO kNOW ME!</h3>
            <p className="known-item">
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.
              <br />
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community.<br />
              Feel free to Connect or Follow me on my{" "}
              <a
                href="https://www.linkedin.com/in/deenadhayalan-dev/"
                rel="noreferrer"
                target="_blank"
              >
                Linkedin
              </a>{" "}
              where I post useful content related to Web Development and
              Programming I'm open to Job opportunities where I can contribute,
              learn and grow. If you have a good opportunity that matches my
              skills and experience then don't hesitate to contact me.
            </p>
            <button className="contact-btn">CONTACT</button>
          </div>
          <div className="skills">
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
