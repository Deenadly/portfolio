import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import Footer from "./component/footer/Footer";
import Home from "./pages/home/Home";
import { BrowserRouter } from "react-router-dom";
// import Project from "./pages/project/Project";
// import About from "./pages/about/About";
// import Manfree from "./pages/casestudy/Manfree";
// import Navbar from "./component/navbar/Navbar";
// import Netflix from "./pages/casestudy/Netflix";
// import Portfolio from "./pages/casestudy/Portfolio";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Navbar /> */}
    {/* <About /> */}
    {/* <Home /> */}
    {/* <Project /> */}
    {/* <Manfree /> */}
    {/* <Footer /> */}
    {/* <Netflix /> */}
    {/* <Portfolio /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
