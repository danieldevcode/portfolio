import React from "react";
import "../styles/work.scss";
import Project from "./Project";
import biblebitsImg from "/biblebits.png";
import randomquotemachineImg from "/randomquotemachine.png";
import memegeneratorImg from "/memegenerator.png";
import tenziesImg from "/tenzies.png";

function Work() {
  return (
    <section id="work" className="work">
      <h2>Work</h2>
      <Project
        title="Biblebits"
        type="Project"
        imageSrc={biblebitsImg}
        webHref="https://biblebits.danielcortes.tech/"
        codeHref="https://github.com/danieldevcode/biblebits"
      />
      <Project
        title="Quotes"
        type="Learning"
        imageSrc={randomquotemachineImg}
        webHref="https://danieldevcode.github.io/randomquotemachine/"
        codeHref="https://github.com/danieldevcode/randomquotemachine"
      />
      <Project
        title="Tenzies"
        type="Learning"
        imageSrc={tenziesImg}
        webHref="https://danieldevcode.github.io/tenzies/"
        codeHref="https://github.com/danieldevcode/tenzies"
      />
      <Project
        title="Meme generator"
        type="Learning"
        imageSrc={memegeneratorImg}
        webHref="https://danieldevcode.github.io/memegenerator/"
        codeHref="https://github.com/danieldevcode/memegenerator"
      />
    </section>
  );
}

export default Work;
