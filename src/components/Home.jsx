import React from "react";
import profile from "/profile.png";
import "../styles/home.scss";

function Home({ reference }) {
  return (
    <section id="home" ref={reference} className="home">
      <div className="home-title-container">
        <h1 className="home-title">
          Daniel <br /> Cortes
        </h1>
        <img src={profile} alt="Daniel Cortes profile" className="home-image"/>
        <h2 className="home-subtitle">
          Web <br /> developer
        </h2>
      </div>
    </section>
  );
}

export default Home;
