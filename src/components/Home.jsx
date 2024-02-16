import React from "react";
import profile from "/images/minified/profile.jpg-312px.min.webp";
import "../styles/home.scss";

function Home({ reference }) {
  return (
    <section id="home" ref={reference} className="home">
      <div className="home-title-container">
        <h1 className="home-title">
          Daniel <br /> Cortes
        </h1>
        {/* //TODO: replace img with picture, 312w 505w */}
        <img
          src={profile}
          alt="Daniel Cortes profile"
          className="home-image"
          width="2"
          height="1"
          fetchpriority="high"
        />
        <h2 className="home-subtitle">
          Web <br /> developer
        </h2>
      </div>
    </section>
  );
}

export default Home;
