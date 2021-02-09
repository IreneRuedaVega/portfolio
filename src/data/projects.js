import baila from "../media/baila.png";
import adivina from "../media/adivina.png";
import likeWatch from "../media/likeWatch.png";
import rickMorty from "../media/rickMorty.png";
import drums from "../media/drums.png";
import insideMood from "../media/insideMood.png";
import iconsProjectsReact from "../media/reactHtmlSass.svg";
import iconsProjectsJS from "../media/jsHtmlCss.svg";
import iconsProjectsHTML from "../media/htmlSassGulp.svg";

const PROJECTS_DATA = [
  {
    id: "1",
    title: "Rick and Morty finder",
    img: rickMorty,
    description:
      "Aplicación web que permite buscar personajes de Rick and Morty. Podemos buscarlos a través de su nombre, género, especie o estado y ordenarlos alfabéticamente.",
    github: "https://github.com/IreneRuedaVega/rick-and-morty-finder",
    web: "https://ireneruedavega.github.io/rick-and-morty-finder/#/",
    icons: iconsProjectsReact,
    alt: "React, HTML5, Sass",
  },

  {
    id: "2",
    title: "Inside Mood",
    img: insideMood,
    description:
      "Aplicación web que permite hacer un registro diario del estado de ánimo de los usuarios.",
    github: "https://github.com/IreneRuedaVega/inside-mood-calendar",
    web: "https://ireneruedavega.github.io/inside-mood-calendar/#/",
    icons: iconsProjectsReact,
    alt: "React, HTML5, Sass",
  },

  {
    id: "3",
    title: "Like.watch",
    img: likeWatch,
    description:
      "Aplicación web, que mediante la API de TV Maze, permite al usuario buscar series y crear una lista de favoritas y guardar en el local storage.",
    github: "https://github.com/IreneRuedaVega/like.watch",
    web: "https://ireneruedavega.github.io/like.watch/",
    icons: iconsProjectsJS,
    alt: "JavaScript, HTML5, CSS3",
  },

  {
    id: "4",
    title: "DrumsKit",
    img: drums,
    description:
      "Aplicación web que permite al usuario hacer música mediante distintos sonidos de bateria manejados a través del teclado o el ratón.",
    github: "https://github.com/IreneRuedaVega/drum-kit",
    web: "https://ireneruedavega.github.io/drum-kit/",
    icons: iconsProjectsJS,
    alt: "JavaScript, HTML5, CSS3",
  },

  {
    id: "5",
    title: "Adivina el número",
    img: adivina,
    description:
      "Juego que consiste en adivinar el número secreto. El juego te da pistas de si el número que estás adivinando es mayor o menor para llegar al correcto.",
    github: "https://github.com/IreneRuedaVega/adivina-el-numero",
    web: "https://ireneruedavega.github.io/adivina-el-numero/",
    icons: iconsProjectsJS,
    alt: "JavaScript, HTML5, CSS3",
  },

  {
    id: "6",
    title: "B.A.I.L.A",
    img: baila,
    description:
      "Web responsive colaborativa que cuenta con la presentación, descripción y datos de contacto del equipo y un formulario de contacto.",
    github: "https://github.com/IreneRuedaVega/B.A.I.L.A",
    web: "https://ireneruedavega.github.io/B.A.I.L.A/",
    icons: iconsProjectsHTML,
    alt: "HTML5, Sass, Gulp",
  },
];

export default PROJECTS_DATA;
