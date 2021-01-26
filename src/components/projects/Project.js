import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./Project.scss";

const Project = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <article>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="project">
          This is the front of the card.
          <button onClick={handleClick}>Click to flip</button>
        </div>

        <div className="project">
          This is the back of the card.
          <button onClick={handleClick}>Click to flip</button>
        </div>
      </ReactCardFlip>
    </article>
  );
};

export default Project;
