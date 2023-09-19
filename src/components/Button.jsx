import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/button.scss";

function Button({ text, href, icon, size, className }) {
  return (
    <a
      className={`btn ${className ? className : "btn-primary"}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={icon} size={size ? size : "sm"} />
      <p className="btn-text">{text}</p>
    </a>
  );
}

export default Button;
