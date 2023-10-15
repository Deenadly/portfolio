import React from "react";
import Button from "../../component/button/Button";
import banner from "../../assets/bg1.jpg";
import "./Manfree.css";
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
        <div className="manfree-single-content">
          <div className="manfree-single-title">MANFREE TECHNOLOGIES</div>
          <div className="maanfrees-single-item">
            This page contains the case study of manfree technologies which
            includes the Project Overview, Tools Used and Live Links to the
            official product.
          </div>
          <Button name="live link" value="project-btn" />
        </div>
      </div>
    </>
  );
};

export default Manfree;
