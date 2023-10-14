import React from "react";
import "./Button.css";
const Button = (props) => {
  return <button className={props.value}>{props.name}</button>;
};

export default Button;
