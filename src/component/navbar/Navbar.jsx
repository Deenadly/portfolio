import React from "react";
import "./Navbar.css";
import logo from "../../assets/symbolD.png";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="logo-parent">
            <img className="navbar-logo" src={logo} alt="logo" />
            <p className="navbar-title">DEENA DHAYALAN</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
