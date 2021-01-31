import baila from "../media/baila.png";
import adivina from "../media/adivina.png";
import likeWatch from "../media/likeWatch.png";
import rickMorty from "../media/rickMorty.png";
import drums from "../media/drums.png";
import insideMood from "../media/insideMood.png";
import iconsProject01 from "../media/icons01.svg";
import iconsProject02 from "../media/icons02.svg";
import iconsProject03 from "../media/icons03.svg";

const PROJECTS_DATA = [
  {
    id: "1",
    title: "Rick and Morty finder",
    img: rickMorty,
    description: "Buscador de personajes de Rick and Morty.",
    github:
      "https://github.com/IreneRuedaVega/modulo-3-evaluacion-final-IreneRuedaVega",
    web:
      "https://ireneruedavega.github.io/modulo-3-evaluacion-final-IreneRuedaVega/#/",
    icons: iconsProject03,
  },

  {
    id: "2",
    title: "Inside Mood",
    img: insideMood,
    description:
      "Aplicación web para registrar el estado de ánimo de los usuarios",
    github: "https://github.com/IreneRuedaVega/mood-calendar",
    web: "https://ireneruedavega.github.io/mood-calendar/#/",
    icons: iconsProject03,
  },

  {
    id: "3",
    title: "Like.watch",
    img: likeWatch,
    description:
      "Like.watch es una aplicación web, que mediante la API de TV Maze, permite al usuario buscar series y crear una lista de sus favoritas.",
    github:
      "https://github.com/IreneRuedaVega/modulo-2-evaluacion-final-IreneRuedaVega",
    web:
      "https://ireneruedavega.github.io/modulo-2-evaluacion-final-IreneRuedaVega/",
    icons: iconsProject02,
  },

  {
    id: "4",
    title: "DrumsKit",
    img: drums,
    description: "Aplicación para hacer música",
    github: "https://github.com/IreneRuedaVega/drum-kit",
    web: "https://ireneruedavega.github.io/drum-kit/",
    icons: iconsProject02,
  },

  {
    id: "5",
    title: "Adivina el número",
    img: adivina,
    description: "Juego que consiste en adivinar el número correcto.",
    github:
      "https://github.com/IreneRuedaVega/modulo-2-evaluacion-intermedia-IreneRuedaVega",
    web:
      "https://ireneruedavega.github.io/modulo-2-evaluacion-intermedia-IreneRuedaVega/",
    icons: iconsProject02,
  },

  {
    id: "6",
    title: "B.A.I.L.A",
    img: baila,
    description:
      "B.A.I.L.A es una web responsive con presentación y datos de contacto. Desarrollo grupal.",
    github: "https://github.com/Adalab/project-promo-k-module-1-team-2",
    web: "https://beta.adalab.es/project-promo-k-module-1-team-2/",
    icons: iconsProject01,
  },
];

export default PROJECTS_DATA;
