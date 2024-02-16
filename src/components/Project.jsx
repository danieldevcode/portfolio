import React from "react";
import Button from "./Button";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/project.scss";

function Project({ title, imgSrc, description, webHref, codeHref }) {
  return (
    <article className="project">
      <picture>
        <source srcSet={imgSrc.srcSet} type={imgSrc.type} />
        {/* //TODO: Ask copilot about the default img */}
        <img
          className="project-img"
          src={""}
          alt={title}
          loading="lazy"
          fetchpriority="low"
        />
      </picture>

      <h3 className="project-header">{title}</h3>
      {description ? (
        <p className="project-description">{description}</p>
      ) : null}
      <div className="buttons-container">
        <Button
          text="Code"
          icon={faGithub}
          href={codeHref}
          size="sm"
          className={"btn-outlined"}
        />
        <Button
          text="Website"
          icon={faEarthAmericas}
          href={webHref}
          size="xs"
          className={"btn-filled"}
        />
      </div>
    </article>
  );
}

export default Project;
