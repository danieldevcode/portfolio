import React from "react";
import "../styles/work.scss";
import Project from "./Project";
import projectsData from "../data/projects";

function Work() {
  const projectComponents = projectsData.map(
    function createProjectFrom(project) {
      return <Project key={project.title} {...project} />;
    },
  );

  return (
    <section id="work" className="work">
      <h2 className="work-header">Work</h2>
      <div className="projects-container">{projectComponents}</div>
    </section>
  );
}

export default Work;
