import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "../../stylesheets/layout/Navbar.scss";

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

  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar__logo" onClick={tothetop}>
        &#60;Irene
        <span className="navbar__logo--span ">RuedaVega</span>
        &#47;&#62;
      </div>
      <ul
        className="navbar__items"
        style={{
          transform: open ? "translateX(0px)" : "",
        }}
      >
        <li className="navbar__items--section connections">
          <HashLink to="#aboutMe" className="connections__link">
            Sobre mí
          </HashLink>
        </li>
        <li className="navbar__items--section connections">
          <HashLink to="#projects" className="connections__link">
            Mis proyectos
          </HashLink>
        </li>
        <li className="navbar__items--section connections">
          <HashLink to="#skills" className="connections__link">
            Habilidades
          </HashLink>
        </li>
        <li className="navbar__items--section connections">
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
        className="fas fa-bars navbar__items--burger-nav"
        onClick={() => setOpen(!open)}
      ></i>
    </nav>
  );
};

export default Navbar;
