import React from "react";
import logo from "/logo.svg";
import "../styles/footer.scss";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <a href="#home">
        <img src={logo} alt="Logo" />
      </a>
      <ul>
        <li>
          <a href="https://github.com/danieldevcode">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/danielcortesdev/">LinkedIn</a>
        </li>
      </ul>
      <p>
        Copyright © {new Date().getUTCFullYear()} - Daniel Cortes. All Rights
        Reserved.
      </p>
    </footer>
  );
}

export default Footer;
