import React from "react";
import profile500wWebp from "/images/minified/profile-500px.min.webp";
import profile500wJpeg from "/images/minified/profile-500px.min.jpeg";
import "../styles/home.scss";

function Home({ reference }) {
  return (
    <section id="home" ref={reference} className="home">
      <div className="home-title-container">
        <h1 className="home-title">
          Daniel <br /> Cortes
        </h1>
        <picture>
          <source srcSet={`${profile500wWebp} 500w`} type="image/webp" />
          <img
            src={profile500wJpeg}
            alt="Daniel Cortes profile"
            className="home-image"
            fetchpriority="high"
            width="2"
            height="1"
          />
        </picture>
        <h2 className="home-subtitle">
          Web <br /> developer
        </h2>
      </div>
    </section>
  );
}

export default Home;
