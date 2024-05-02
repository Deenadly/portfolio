import React from "react";
import "./Navbar.css";
import logo from "../../assets/symbolD.webp";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setShow(!show);
  };

  const handleNavItemClick = () => {
    setShow(false);
  };

  const handleclickhome = () => {
    navigate("/");
    setShow(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-parent" onClick={handleclickhome}>
          <img className="navbar-logo" src={logo} alt="logo" />
          <p className="navbar-title">DEENA DHAYALAN</p>
        </div>
        <div className="navbar-list">
          <div onClick={handleMenuClick} className="navbar-icon-parent">
            {show ? (
              <AiOutlineClose className="navbar-icon" />
            ) : (
              <AiOutlineMenu className="navbar-icon" />
            )}
          </div>
          <div id="myElement">
            <Link
              to={"/"}
              smooth={true}
              duration={500}
              onClick={() => {
                handleclickhome();
                handleNavItemClick();
              }}
            >
              HOME
            </Link>
            <Link
              to={"/about"}
              smooth={true}
              duration={500}
              onClick={handleNavItemClick}
            >
              ABOUT
            </Link>
            <NavLink className="res" to={"/resume"}>
              RESUME
            </NavLink>
            <Link
              to={"/project"}
              smooth={true}
              duration={500}
              onClick={handleNavItemClick}
            >
              PROJECTS
            </Link>
            <Link
              to={"/contact"}
              smooth={true}
              duration={500}
              onClick={handleNavItemClick}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
      {show && (
        <div className="navbar-list-content">
          <Link to={"/"} onClick={handleNavItemClick}>
            HOME
          </Link>
          <Link
            to={"/about"}
            smooth={true}
            duration={500}
            onClick={handleNavItemClick}
          >
            ABOUT
          </Link>
          <NavLink className="res" to={"/resume"}>
            RESUME
          </NavLink>
          <Link
            to={"/project"}
            smooth={true}
            duration={500}
            onClick={handleNavItemClick}
          >
            PROJECTS
          </Link>
          <Link
            to={"/contact"}
            smooth={true}
            duration={500}
            onClick={handleNavItemClick}
          >
            CONTACT
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
