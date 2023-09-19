import React from "react";
import "../styles/navbar.scss";

function Navbar({ reference }) {
  return (
    <header>
      <nav id="nav" className="nav" ref={reference}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
