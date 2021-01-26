import React from "react";
import Project from "./Project";
import "./Projects.scss";

const Projects = ({ data }) => {
  console.log(data);
  return (
    <section className="projects-container" id="projects">
      <div className="projects-container__title">
        <h2 className="projects-container__title--h2">Mis proyectos</h2>
      </div>
      <div className="projects-container__wrapper">
        {data.map(({ title, description, github, web, img, skills }) => (
          <Project
            title={title}
            description={description}
            githubLink={github}
            webLink={web}
            img={img}
            skills={skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
