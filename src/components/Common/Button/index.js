import React from "react";
import "./style.css";

const Button = ({ text, onClick, disabled, width }) => {
  return (
    <div
      onClick={onClick}
      className="customBtn"
      disabled={disabled}
      style={{ width: width }}
    >
      {text}
    </div>
  );
};

export default Button;
