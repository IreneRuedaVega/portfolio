import React from "react";
import "./About.scss";
import Photo from "../../media/avatarPortfolio.png";
import Arrow from "../../media/arrow.svg";
import Music from "../../media/musica.svg";
import Cinema from "../../media/cine.svg";
import Read from "../../media/libros.svg";
import Play from "../../media/juegos.svg";
import Camera from "../../media/camara.svg";
import Teacher from "../../media/educacion.svg";
import Code from "../../media/programar.svg";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-container__photo">
          <img
            className="about-container__photo--img"
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
            Como maestra he podido conocer de primera mano la importancia tanto
            de la educación como de la tecnología. Siendo profesora de robótica
            comenzó mi interés por la creatividad y la programación, lo que me
            llevó a formarme en el desarrollo frontend. La posibilidad de crear
            contenidos digitales y darles vida es lo que me atrapó de esta
            profesión.
          </p>
          <p className="about-container__desc--hobbies">
            La superación, la adaptación y la perseverancia me llevan a afrontar
            retos más allá de mi zona de confort mientras que la empatía y mis
            habilidades comunicativas me permiten ser una buena compañera de
            equipo.
          </p>
        </div>

        <div className="about-container__hobbies">
          <div className="about-container__hobbies--sign">
            <h3 className="hobbies-title">Hobbies</h3>
            <img
              className="hobbies-arrow"
              src={Arrow}
              alt="Flecha para indicar las hobbies"
            />
          </div>
          <div className="about-container__hobbies--favourites">
            <div className="hobbies-favourites-1">
              <img className="logo" src={Music} alt="Logo de react" />
              <img className="logo" src={Cinema} alt="Logo de JavaScript" />
              <img className="logo" src={Read} alt="Logo de Html" />
              <img className="logo" src={Play} alt="Logo de Css" />
            </div>
            <div className="hobbies-favourites-2">
              <img className="logo" src={Camera} alt="Logo de Sass" />
              <img className="logo" src={Teacher} alt="Logo de Git" />
              <img className="logo" src={Code} alt="Logo de Gulp" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
