import React from "react";
import Project from "./Project";
import "./Projects.scss";

const Projects = ({ data }) => {
  return (
    <section className="projects-container" id="projects">
      <div className="projects-container__title">
        <h2 className="projects-container__title--h2">Mis proyectos</h2>
      </div>
      <div className="projects-container__wrapper">
        {data.map(({ id, title, description, github, web, img, logos }) => (
          <Project
            key={id}
            title={title}
            description={description}
            github={github}
            web={web}
            img={img}
            logos={logos}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
