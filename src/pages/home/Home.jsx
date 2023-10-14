import React from "react";
import banner from "../../assets/bg1.jpg";
import "./Home.css";
import Button from "../../component/button/Button";
import About from "../about/About.jsx";

const Home = () => {
  return (
    <>
      <div
        className="home-container"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="home-content">
          <div className="name-items">HEY, I'M DEENA DHAYALAN</div>
          <div className="home-items">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </div>
          <Button name="projects" value="project-btn" />
          <div className="mouse"></div>
        </div>
      </div>
      <About />
    </>
  );
};

export default Home;
