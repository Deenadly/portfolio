import React from "react";
import "./Navbar.css";
import logo from "../../assets/symbolD.png";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";

const Navbar2 = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScreen = () => {
      const element = document.getElementById("myElement");
      const screenWidth = window.innerWidth;

      if (screenWidth < 760) {
        element.style.display = "none";
      } else {
        element.style.display = "flex";
      }
    };
    handleScreen();
    window.addEventListener("resize", handleScreen);
  }, []);
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-parent">
          <img className="navbar-logo" src={logo} alt="logo" />
          <p className="navbar-title">DEENA DHAYALAN</p>
        </div>
        <div className="navbar-list">
          <div onClick={() => setShow(!show)} className="navbar-icon-parent">
            <AiOutlineMenu className="navbar-icon" />
          </div>
          <div id="myElement">
            <a href="/">HOME</a>
            <a href={"/about"}>ABOUT</a>
            <Link to={"/project"} smooth={true} duration={500}>
              PROJECTS
            </Link>
            <Link to={"/footer"} smooth={true} duration={500}>
              CONTACT
            </Link>
          </div>
        </div>
      </div>
      {show && (
        <div className="navbar-list-content">
          <Link to={"/"}>HOME</Link>
          <Link to={"/about"} smooth={true} duration={500}>
            ABOUT
          </Link>
          <Link to={"/project"} smooth={true} duration={500}>
            PROJECTS
          </Link>

          <Link to={"/footer"} smooth={true} duration={500}>
            CONTACT
          </Link>
        </div>
      )}
    </div>
  );
};
export default Navbar2;
