import React from "react";

const slidesInfo = [
  {
    src:
      "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
    alt: "Project 1",
    /* title: "Pokédex", */
    desc: "Página web con un listado de Pokémons",
    /* github:
      "https://github.com/IreneRuedaVega/modulo-3-evaluacion-intermedia-IreneRuedaVega",
    web:
      "https://ireneruedavega.github.io/modulo-3-evaluacion-intermedia-IreneRuedaVega/", */
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
    alt: "Project 2",
    /* title: "Rick and Morty Character finder", */
    desc: "Buscador de personajes de Rick y Morty",
    /* github:
      "https://github.com/IreneRuedaVega/modulo-3-evaluacion-final-IreneRuedaVega",
    web:
      "https://ireneruedavega.github.io/modulo-3-evaluacion-final-IreneRuedaVega/#/", */
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "Project 3",
    /*   title: "Like.watch", */
    desc: "Buscador de series favoritas",
    /*  github:
      "https://github.com/IreneRuedaVega/modulo-2-evaluacion-final-IreneRuedaVega",
    web:
      "https://ireneruedavega.github.io/modulo-2-evaluacion-final-IreneRuedaVega/", */
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      {/*   <span>{slide.title}</span> */}
      <span>{slide.desc}</span>
    </div>
    {/* <div>
      <a href={slide.github}>github</a>
      <a href={slide.web}>web</a>
    </div> */}
  </div>
));

export default slides;
