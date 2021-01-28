import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./Navbar.scss";

const Navbar = ({ isScrolling }) => {
  const tothetop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
        style={{ transform: open ? "translateX(0px)" : "" }}
      >
        <li className="navbar__items--section">
          <HashLink to="#aboutMe" className="link">
            Sobre mí
          </HashLink>
        </li>
        <li className="navbar__items--section">
          <HashLink to="#projects" className="link">
            Mis proyectos
          </HashLink>
        </li>
        <li className="navbar__items--section">
          <HashLink to="#skills" className="link">
            Habilidades
          </HashLink>
        </li>
        <li className="navbar__items--section">
          <HashLink to="#contact" className="link">
            Contacto
          </HashLink>
        </li>
      </ul>
      <i className="fas fa-bars burguer" onClick={() => setOpen(!open)}></i>
    </nav>
  );
};

export default Navbar;
