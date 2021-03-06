import React from "react";
import "../../stylesheets/layout/Skills.scss";
import WebDevContent from "./sections/WebDevContent";
import LayoutContent from "./sections/LayoutContent";
import TeamWorkContent from "./sections/TeamWorkContent";
import Learning from "./sections/Learning";

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h2 className="skills-container__title">Habilidades</h2>
      <div className="skills-container__content">
        <WebDevContent
          title="Desarrollo"
          titleTechnologies="Tecnologías"
          item="JavaScript"
          item2="React"
          item3="npm"
          item4="Git"
          item5="Gulp"
          titleTools="Herramientas"
          tool="VSCode"
        />
        <LayoutContent
          title="Maquetación web"
          titleTechnologies="Tecnologías"
          item="HTML5"
          item2="CSS3"
          item3="Sass"
          item4="CSS Grid"
          item5="Flexbox"
          item6="Bootstrap"
          titleTools="Herramientas"
          tool="Zeplin"
          tool2="Figma"
        />
        <TeamWorkContent
          title="Trabajo en equipo"
          titleTechnologies="Metodologias ágiles"
          item="Agile"
          item2="SCRUM"
          titleTools="Organización"
          tool="Github"
          tool2="Trello"
          tool3="JIRA"
          tool4="Slack"
        />
      </div>
      <Learning />
    </div>
  );
};

export default Skills;
