import React from "react";
import "./Navbar.scss";

const Navbar = ({ isScrolling }) => {
  const tothetop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar__logo" onClick={tothetop}>
        &#60;Irene
        <span className="navbar__logo--span ">Rueda</span>
        &#47;&#62;
      </div>
    </nav>
  );
};

export default Navbar;
