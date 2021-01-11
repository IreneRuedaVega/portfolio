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
      <h1 className="cover-container__name">Irene Rueda</h1>
      <p className="cover-container__technologies">
        Junior frontend dev | JavaScript &#38; React <br /> HTML5 &#38; CSS3
        (SASS) | Agile &#38; SCRUM
      </p>
      <button className="cover-container__scroll"></button>
    </div>
  );
};

export default Cover;
