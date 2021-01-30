import React from "react";
import Project from "./Project";
import "./Projects.scss";
import GithubHover from "../../media/github_hover.svg";

const Projects = ({ data }) => {
  return (
    <section className="projects-container" id="projects">
      <div className="projects-container__title">
        <h2 className="projects-container__title--h2">Mis proyectos</h2>
      </div>
      <div className="projects-container__wrapper">
        {data.map(
          ({ id, title, description, github, web, img, logos, alt }) => (
            <Project
              key={id}
              title={title}
              description={description}
              github={github}
              web={web}
              img={img}
              logos={logos}
              alt={alt}
            />
          )
        )}
      </div>
      <div className="projects-container__more-projects">
        <img
          className="projects-container__more-projects--github-logo"
          src={GithubHover}
          alt="Logo de Github"
        />
        <span>
          <a
            className="projects-container__more-projects--text"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/IreneRuedaVega"
          >
            Ver más proyectos
          </a>
        </span>
      </div>
    </section>
  );
};

export default Projects;
