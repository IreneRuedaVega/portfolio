import React from "react";
import "./Cover.scss";
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
      <div className="cover-container__job">
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

      {/*  <button className="cover-container__scroll"></button> */}
    </div>
  );
};

export default Cover;
