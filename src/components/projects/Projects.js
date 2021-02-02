import React from "react";
import Project from "./Project";
import "../../stylesheets/layout/Projects.scss";
import GithubHover from "../../media/github_hover.svg";

const Projects = ({ data }) => {
  return (
    <section className="projects-container">
      <span className="box2" id="projects"></span>
      <div className="projects-container__title">
        <h2 className="projects-container__title--h2">Mis proyectos</h2>
      </div>
      <div className="projects-container__wrapper">
        {data.map(({ id, title, description, github, web, img, icons }) => (
          <Project
            key={id}
            title={title}
            description={description}
            github={github}
            web={web}
            img={img}
            icons={icons}
          />
        ))}
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
        <span className="box3" id="skills"></span>
      </div>
    </section>
  );
};

export default Projects;
