import React from "react";
import "../styles/project.scss";
import Button from "./Button";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project({ title, type, imageSrc, description, webHref, codeHref }) {
  return (
    <article className="project">
      <div className="header">
        <h3 className="project-title">{title}</h3>
        <p className="project-type">{type}</p>
      </div>
      {description ? (
        <p className="project-description">{description}</p>
      ) : null}
      <img className="project-img" src={imageSrc} alt={title} />
      <div className="button-container">
        <Button
          text="Website"
          icon={faEarthAmericas}
          href={webHref}
          size="xs"
        />
        <Button text="Code" icon={faGithub} href={codeHref} size="sm" />
      </div>
    </article>
  );
}

export default Project;
