import React from "react";
import logo from "/logo.svg";
import "../styles/footer.scss";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <a href="#home" className="footer-logo">
        <img src={logo} alt="Logo" loading="lazy" fetchpriority="low" />
      </a>
      <ul className="footer-list">
        <li>
          <a href="https://github.com/danieldevcode">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/danielcortesdev/">LinkedIn</a>
        </li>
      </ul>
      <small className="footer-copyright">
        Copyright © 2024 - Daniel Cortes. All Rights Reserved.
      </small>
    </footer>
  );
}

export default Footer;
