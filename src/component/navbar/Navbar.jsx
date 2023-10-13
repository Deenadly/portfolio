import React from "react";
import "./Navbar.css";
import logo from "../../assets/symbolD.png";
const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <img src={logo} alt="" className="Navbar-logo" />
      </div>
    </>
  );
};

export default Navbar;
