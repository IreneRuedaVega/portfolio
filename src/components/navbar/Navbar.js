import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "../../stylesheets/layout/navbar.scss";

const Navbar = ({ isScrolling }) => {
  //scroll to the top
  const tothetop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  //scroll to the bottom
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar__logo" onClick={tothetop}>
        &#60;Irene
        <span className="navbar__logo--span ">RuedaVega</span>
        &#47;&#62;
      </div>
      <ul className={clicked ? "navbar__items active" : "navbar__items"}>
        <li
          className="navbar__items--section connections"
          onClick={handleClick}
        >
          <HashLink to="#aboutMe" className="connections__link">
            Sobre <span className="connections__link--span">mí</span>
          </HashLink>
        </li>
        <li
          className="navbar__items--section connections"
          onClick={handleClick}
        >
          <HashLink to="#projects" className="connections__link">
            Proyectos
          </HashLink>
        </li>
        <li
          className="navbar__items--section connections"
          onClick={handleClick}
        >
          <HashLink to="#skills" className="connections__link">
            Habilidades
          </HashLink>
        </li>
        <li
          className="navbar__items--section connections "
          onClick={handleClick}
        >
          <HashLink
            to="#contact"
            className="connections__link"
            onClick={scrollToBottom}
          >
            Contacto
          </HashLink>
        </li>
      </ul>
      <i
        alt="Menú"
        className={
          clicked
            ? "fas fa-times navbar__items--burger-nav"
            : "fas fa-bars navbar__items--burger-nav"
        }
        onClick={handleClick}
      ></i>
    </nav>
  );
};

export default Navbar;
