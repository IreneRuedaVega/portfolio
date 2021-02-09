import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "../../stylesheets/layout/project.scss";
import gitHubLogo from "../../media/gitHub.svg";
import gitHubHover from "../../media/github_hover.svg";
import webLogo from "../../media/web.svg";
import webHover from "../../media/web_hover.svg";
import flipRight from "../../media/flipDerecha.svg";
import flipRightHover from "../../media/flipDerecha_blanco.svg";

const Project = ({ img, title, description, github, web, icons, alt }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <article>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="project">
          <div className="project__card-header">
            <a
              href={web}
              target="_blank"
              rel="noreferrer"
              className="project__card-header--web web"
            >
              <img src={webLogo} alt="Logo de Github" className="web__logo" />
              <img src={webHover} alt="Logo de Github" className="web__hover" />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="project__card-header--github github"
            >
              <img
                src={gitHubLogo}
                className="github__logo"
                alt="Logo de Github"
              />
              <img
                src={gitHubHover}
                className="github__hover"
                alt="Logo de Github"
              />
            </a>
            <button
              className="project__card-header--btn arrow"
              onClick={handleClick}
            >
              <span className="arrow__span">Info</span>
              <img
                src={flipRightHover}
                alt="Flecha derecha voltear la tarjeta"
                className="arrow__left"
              />
              <img
                src={flipRight}
                alt="Flecha derecha voltear la tarjeta"
                className="arrow__right"
              />
            </button>
          </div>
          <h3 className="project__card-title">{title}</h3>
          <img
            className="project__card-img"
            src={img}
            alt="Imagen del proyecto"
          />
        </div>

        <div className="project">
          <div className="project__card-header">
            <a
              href={web}
              target="_blank"
              rel="noreferrer"
              className="project__card-header--web web"
            >
              <img src={webLogo} alt="Logo de Github" className="web__logo" />
              <img src={webHover} alt="Logo de Github" className="web__hover" />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="project__card-header--github github"
            >
              <img
                src={gitHubLogo}
                className="github__logo"
                alt="Logo de Github"
              />
              <img
                src={gitHubHover}
                className="github__hover"
                alt="Logo de Github"
              />
            </a>
            <button
              className="project__card-header--btn arrow"
              onClick={handleClick}
            >
              <span className="arrow__span">Volver</span>
              <img
                src={flipRightHover}
                alt="Flecha para voltear la tarjeta"
                className="arrow__left"
              />
              <img
                src={flipRight}
                alt="Flecha para voltear la tarjeta"
                className="arrow__right"
              />
            </button>
          </div>
          <h3 className="project__card-title">{title}</h3>
          <p className="project__card-description">{description}</p>
          <div className="project__card-technologies">
            <img src={icons} alt={alt} title={alt} />
          </div>
        </div>
      </ReactCardFlip>
    </article>
  );
};

export default Project;
