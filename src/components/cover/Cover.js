import React from "react";
import "../../stylesheets/layout/Cover.scss";
import coverVideo from "../../media/coverVideo.mp4";
import Typewriter from "typewriter-effect";

const Cover = () => {
  return (
    <div className="cover-container">
      <video
        className="cover-container__video"
        src={coverVideo}
        autoPlay
        loop
        muted
      />
      <h1 className="cover-container__name">¡Hola! Soy Irene.</h1>
      <div className="cover-container__jobs">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Desarrolladora front-end junior")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Maestra especializada en TIC")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Creadora de contenidos digitales")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </div>
      <a
        href="#aboutMe"
        title="Ir a la sección 'Sobre mi'"
        className="cover-container__scroll"
      >
        Ir a la siguiente sección
      </a>
      <span className="box" id="aboutMe"></span>
    </div>
  );
};

export default Cover;
