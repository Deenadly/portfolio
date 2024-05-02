import React from "react";
import Button from "../../component/button/Button";
import banner from "../../assets/bg1.webp";
import "./Manfree.css";
import manfree from "../../assets/manfree.webp";
import Footer from "../../component/footer/Footer";
import { Link } from "react-router-dom";
import Nav from "../../component/Navbar casestudy/NAV";

const Manfree = () => {
  return (
    <>
      <div
        className="maanfree-single-container"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center center",
        }}
      >
        <Nav />

        <div className="manfree-single-content">
          <div className="manfree-single-title">MANFREE TECHNOLOGIES</div>
          <div className="maanfrees-single-item">
            This page contains the case study of manfree technologies which
            includes the Project Overview, Tools Used and Live Links to the
            official product.
          </div>
          <Link
            to={"https://manfree-by-deenadhayalan.vercel.app"}
            target="_blank"
          >
            <Button name="live link" value="project-btn" />
          </Link>
        </div>
      </div>
      <div className="project-single-item">
        <img className="manfree" src={manfree} alt="" />
        <div className="project-single-details">
          <div className="project-title-single-manfree">PROJECT OVERVIEW</div>
          <div className="project-single-description">
            <p>
              Manfree is a resounding success that reflects my proficiency in
              frontend web development. I created a dynamic Software Institute
              Website for Manfree, leveraging a blend of HTML, CSS, JavaScript,
              and React.
            </p>
            <p>
              This platform beautifully encapsulates our company's mission and
              an impressive array of product offerings.
            </p>
            <p>
              My aim was to bolster Manfree's online presence and ensure a
              stellar user experience across all devices.
            </p>

            <p>Feel free to check out the Project by visiting the Live Link.</p>
          </div>
          <div className="tool-title-single-manfree">TOOLS USED</div>
          <div className="skills">
            <div className="skills__skill">HTML</div>
            <div className="skills__skill">CSS</div>
            <div className="skills__skill">JavaScript</div>
            <div className="skills__skill">React</div>
            <div className="skills__skill">GIT</div>
            <div className="skills__skill">Github</div>
          </div>
          <div className="tool-title-single-manfree">SEE LIVE</div>
          <div className="projects-btn">
            <Link
              to={"https://manfree-by-deenadhayalan.vercel.app"}
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

export default Manfree;
