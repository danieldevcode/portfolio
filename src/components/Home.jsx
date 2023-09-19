import React from "react";
import "../styles/home.scss";

function Home({ reference }) {
  return (
    <section id="home" ref={reference} className="home">
      <h1>DANIEL CORTES</h1>
      <h2>PORTFOLIO</h2>
    </section>
  );
}

export default Home;
