import React, { useEffect } from "react";
import "../styles/navbar.scss";

function Navbar({ reference }) {
  return (
    <header>
      <nav id="nav" className="nav" ref={reference}>
        <ul>
          <li>
            <a href="#home">Home</a>
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
