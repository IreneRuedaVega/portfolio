import React from "react";
import "./Cover.scss";
import coverVideo from "../../media/coverVideo.mp4";

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
      <p className="cover-container__job">Desarrolladora frontend junior</p>
      {/*  <button className="cover-container__scroll"></button> */}
    </div>
  );
};

export default Cover;
