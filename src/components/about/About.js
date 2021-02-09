import React from "react";
import "../../stylesheets/layout/about.scss";
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
      <section className="about-container">
        <div className="about-container__photo">
          <img
            className="about-container__photo--img"
            src={Photo}
            alt="Foto de Irene Rueda"
          />
        </div>
        <div className="about-container__desc">
          <div className="about-container__desc--topbar topbar">
            <div className="topbar__circles">
              <div className="topbar__circles--1"></div>
              <div className="topbar__circles--2"></div>
              <div className="topbar__circles--3"></div>
            </div>
            <h3 className="topbar__title">Sobre mí</h3>
          </div>
          <h3 className="about-container__desc--job">
            Desarrolladora front-end jr.
          </h3>
          <p className="about-container__desc--intro">
            ¡Hola! Me llamo Irene y soy desarrolladora frontend junior y maestra
            especializada en TIC.
          </p>
          <p className="about-container__desc--irene">
            Como maestra y creadora de contenido educativo digital he podido
            conocer de primera mano la importancia tanto de la educación como de
            la tecnología. Siendo profesora de robótica comenzó mi interés por
            la programación, lo que me llevó a formarme en el desarrollo
            front-end. La posibilidad de crear contenidos digitales y darles
            vida es lo que me atrapó de esta profesión.
          </p>
          <p className="about-container__desc--hobbies">
            La superación, la adaptación y la perseverancia me llevan a afrontar
            retos más allá de mi zona de confort, mientras que la empatía y mis
            habilidades comunicativas me permiten ser una buena compañera de
            equipo.
          </p>
        </div>

        <div className="about-container__hobbies">
          <div className="about-container__hobbies--sign hobbies">
            <h3 className="hobbies__title">Hobbies</h3>
            <img
              className="hobbies__arrow"
              src={Arrow}
              alt="Flecha para indicar las hobbies"
            />
          </div>
          <div className="about-container__hobbies--favourites favourites">
            <div className="favourites__part-1">
              <img
                className="favourites__part-1--logo"
                src={Music}
                alt="Uno de mis hobbies es escuchar música"
                title="Uno de mis hobbies es escuchar música"
              />
              <img
                className="favourites__part-1--logo"
                src={Cinema}
                alt="Me gusta ir al cine"
                title="Me gusta ir al cine"
              />
              <img
                className="favourites__part-1--logo"
                src={Read}
                alt="Me encanta leer"
                title="Me encanta leer"
              />
              <img
                className="favourites__part-1--logo"
                src={Play}
                alt="Jugar a juegos de mesa"
                title="Jugar a juegos de mesa"
              />
            </div>
            <div className="favourites__part-2">
              <img
                className="favourites__part-2--logo"
                src={Camera}
                alt="Me gusta hacer fotos"
                title="Me gusta hacer fotos"
              />
              <img
                className="favourites__part-2--logo"
                src={Teacher}
                alt="Mi otra vocación es la educación"
                title="Mi otra vocación es la educación"
              />
              <img
                className="favourites__part-2--logo"
                src={Code}
                alt="Me encanta programar"
                title="Me encanta programar"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
