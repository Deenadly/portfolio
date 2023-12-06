import React from "react";
import "./NAV.css";
import logo from "../../assets/symbolD.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
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
            <a
              
              href={"/"}
              onClick={() => {
                handleclickhome();
                handleNavItemClick();
              }}
            >
              HOME
            </a>
          </div>
        </div>
      </div>
      {show && (
        <div className="navbar-list-content">
          <a  href={"/"} onClick={handleNavItemClick}>
            HOME
          </a>
        </div>
      )}
    </div>
  );
};

export default Nav;
