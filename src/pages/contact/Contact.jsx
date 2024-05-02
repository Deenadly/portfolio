import React from "react";
import "./Contact.css";
import banner from "../../assets/bg2.webp";
import Button from "../../component/button/Button";
import emailjs from "emailjs-com";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      from_name: document.getElementById("fullname").value,
      email_id: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    emailjs
      .send(
        `service_4uzzdql`,
        `template_wqedw48`,
        formData,
        `EEyZ38RNIdVTRyBQI`
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          document.getElementById("fullname").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };
  return (
    <>
      <div
        name="/contact"
        className="contact-container"
        style={{
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(to right,rgba(245,245,245,.6),rgba(245,245,245,.6)), url(${banner})`,
          backgroundPosition: "center center",
        }}
      >
        <p className="contact-title">CONTACT</p>
        <div className="line-container">
          <div className="line"></div>
        </div>
        <div className="contact-subtitle-container">
          <p className="contact-subtitle">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible.
          </p>
        </div>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="fullname" className="name-ctn">
              Name
            </label>
            <input
              type="text"
              id="fullname"
              name="name"
              className="name"
              placeholder="Enter Your Name"
              autoComplete="name"
              required
            />
            <br />
            <label htmlFor="email" className="email-ctn">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="email"
              placeholder="Enter Your Email"
              autoComplete="email"
              required
            />
            <br />

            <label htmlFor="message" className="message-ctn">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              cols="30"
              rows="10"
              className="message"
              placeholder="Enter Your Message"
              autoComplete="off"
              required
            ></textarea>

            <Button name="SUBMIT" value="submit-btn" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
