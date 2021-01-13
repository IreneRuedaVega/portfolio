import React from "react";
import "./About.scss";
import Photo from "../../media/foto.png";
import Arrow from "../../media/arrow.svg";
import LogoReact from "../../media/react.svg";
import LogoJS from "../../media/js.svg";
import LogoHtml from "../../media/html.svg";
import LogoCss from "../../media/css3.svg";
import LogoSass from "../../media/sass.svg";
import LogoGit from "../../media/git.svg";
import LogoGulp from "../../media/gulp.svg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-container__photo">
        <img
          className="about-container__container-photo--img"
          src={Photo}
          alt="Foto de Irene Rueda"
        />
      </div>
      <div className="about-container__desc">
        <div className="about-container__desc--topbar">
          <div className="topbar-circles">
            <div className="topbar-circles__1"></div>
            <div className="topbar-circles__2"></div>
            <div className="topbar-circles__3"></div>
          </div>
          <h3 className="title-topbar">Sobre mí</h3>
        </div>
        <h3 className="about-container__desc--job">Jr. frontend dev</h3>
        <p className="about-container__desc--intro">
          Desarrolladora frontend y maestra especializada en tecnologías de la
          información y la comunicación.
        </p>
        <p className="about-container__desc--irene">
          Como maestra he podido conocer de primera mano la importancia tanto de
          la educación como de la tecnología. Siendo profesora de robótica
          comenzó mi interés por la creatividad y la programación, lo que me
          llevó a formarme en el desarrollo frontend. La posibilidad de crear
          contenidos digitales y darles vida es lo que me atrapó de esta
          profesión.
        </p>
        <p className="about-container__desc--skills">
          La superación, la adaptación y la perseverancia me llevan a afrontar
          retos más allá de mi zona de confort mientras que la empatía y mis
          habilidades comunicativas me permiten ser una buena compañera de
          equipo.
        </p>
      </div>
      <div className="about-container__skills">
        <div className="about-container__skills--sign">
          <h3 className="skills-title">Skills</h3>
          <img
            className="skills-arrow"
            src={Arrow}
            alt="Flecha para indicar las skills"
          />
        </div>
        <div className="about-container__skills--tecnologies">
          <div className="skills-tecnologies-1">
            <img className="logo" src={LogoReact} alt="Logo de react" />
            <img className="logo" src={LogoJS} alt="Logo de JavaScript" />
            <img className="logo" src={LogoHtml} alt="Logo de Html" />
            <img className="logo" src={LogoCss} alt="Logo de Css" />
          </div>
          <div className="skills-tecnologies-2">
            <img className="logo" src={LogoSass} alt="Logo de Sass" />
            <img className="logo" src={LogoGit} alt="Logo de Git" />
            <img className="logo" src={LogoGulp} alt="Logo de Gulp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
