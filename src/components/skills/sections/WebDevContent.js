import React from "react";
import "../Skills.scss";

const WebDevContent = ({
  title,
  titleTechnologies,
  item,
  item2,
  item3,
  item4,
  item5,
  titleTools,
  tool,
}) => {
  return (
    <div className="skillscontent-container">
      <h2 className="skillscontent-container__title">{title}</h2>
      <div className="skillscontent-container__technologies">
        <h3 className="skillscontent-container__technologies--title">
          {titleTechnologies}
        </h3>
        <hr className="skillscontent-container__technologies--line" />
        <ul className="skillscontent-container__technologies--list">
          <li className="item">{item}</li>
          <li className="item">{item2}</li>
          <li className="item">{item3}</li>
          <li className="item">{item4}</li>
          <li className="item">{item5}</li>
        </ul>
      </div>
      <div className="skillscontent-container__tools">
        <h3 className="skillscontent-container__tools--title">{titleTools}</h3>
        <hr className="skillscontent-container__tools--line" />
        <ul className="skillscontent-container__tools--list">
          <li className="item">{tool}</li>
        </ul>
      </div>
    </div>
  );
};

export default WebDevContent;
