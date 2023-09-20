import React from "react";
import "../styles/home.scss";
import profile from "/profile.png";

function Home({ reference }) {
  return (
    <section id="home" ref={reference} className="home">
      <div className="home-title-container">
        <h1>
          DANIEL <br /> CORTES
        </h1>
        <img src={profile} alt="Daniel Cortes profile" />
        <h2>
          WEB <br /> DEVELOPER
        </h2>
      </div>
    </section>
  );
}

export default Home;
