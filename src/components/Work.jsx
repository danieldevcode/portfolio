import React from "react";
import "../styles/work.scss";
import Project from "./Project";
import biblebitsImg from "/biblebits.png";
import randomquotemachine from "/randomquotemachine.png";

function Work() {
  return (
    <section id="work" className="work">
      <h2>Work</h2>
      <Project
        title="Biblebits"
        type="Project"
        imageSrc={biblebitsImg}
        webHref="https://biblebits.danielcortes.tech/"
        codeHref="#"
      />
      <Project
        title="Quotes"
        type="Learning"
        imageSrc={randomquotemachine}
        webHref="https://danieldevcode.github.io/randomquotemachine/"
        codeHref="https://github.com/danieldevcode/randomquotemachine"
      />
    </section>
  );
}

export default Work;
