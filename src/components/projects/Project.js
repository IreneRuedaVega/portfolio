import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./Project.scss";
import gitHubLogo from "../../media/gitHub.svg";
import gitHubHover from "../../media/github_hover.svg";
import webLogo from "../../media/web.svg";
import webHover from "../../media/web_hover.svg";
import flipRight from "../../media/flipDerecha.svg";
import flipRightHover from "../../media/flipDerecha_blanco.svg";

const Project = ({ img, title, description, github, web, logos, alt }) => {
  console.log(alt);
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
              className="project__card-header--web "
            >
              <img src={webLogo} alt="Logo de Github" className="web-logo" />
              <img src={webHover} alt="Logo de Github" className="web-hover" />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="project__card-header--github"
            >
              <img
                src={gitHubLogo}
                className="github-logo"
                alt="Logo de Github"
              />
              <img
                src={gitHubHover}
                className="github-hover"
                alt="Logo de Github"
              />
            </a>
            <button className="project__card-header--btn" onClick={handleClick}>
              <span className="span">Info</span>
              <img
                src={flipRightHover}
                alt="Flecha derecha voltear la tarjeta"
                className="left-arrow"
              />
              <img
                src={flipRight}
                alt="Flecha derecha voltear la tarjeta"
                className="right-arrow"
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
              className="project__card-header--web "
            >
              <img src={webLogo} alt="Logo de Github" className="web-logo" />
              <img src={webHover} alt="Logo de Github" className="web-hover" />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="project__card-header--github"
            >
              <img
                src={gitHubLogo}
                className="github-logo"
                alt="Logo de Github"
              />
              <img
                src={gitHubHover}
                className="github-hover"
                alt="Logo de Github"
              />
            </a>
            <button className="project__card-header--btn" onClick={handleClick}>
              <span className="span">Volver</span>
              <img
                src={flipRightHover}
                alt="Flecha para voltear la tarjeta"
                className="left-arrow"
              />
              <img
                src={flipRight}
                alt="Flecha para voltear la tarjeta"
                className="right-arrow"
              />
            </button>
          </div>
          <h3 className="project__card-title">{title}</h3>
          <p className="project__card-description">{description}</p>
          <div className="project__card-technologies technologies">
            <img
              src={logos.LogoHtml}
              alt="Logo de Html5"
              className="technologies__logo"
            />
            <img
              src={logos.LogoCss3}
              alt="Logo de Css3"
              className="technologies__logo"
            />
            <img
              src={logos.LogoSass}
              alt="Logo de Sass"
              className="technologies__logo"
            />
            <img src={logos.LogoJS} alt="" className="technologies__logo" />
            <img
              src={logos.LogoReact}
              alt={alt.AltLogoReact || "Hola"}
              className="technologies__logo"
            />
            <img
              src={logos.LogoGulp}
              alt="Logo de Gulp"
              className="technologies__logo"
            />
            <img
              src={logos.LogoGit}
              alt="Logo de Git"
              className="technologies__logo"
            />
          </div>
        </div>
      </ReactCardFlip>
    </article>
  );
};

export default Project;
