import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <h1 className="footer__info--name">trabajemos juntos</h1>
        <hr />
        <p className="footer__info--location">Madrid, España</p>
      </div>
      <div className="footer__contact">
        <div className="footer__contact--design-by">
          Design &#64; Javier Santos &#124; Irene Rueda
        </div>
        <div className="footer__contact--links">
          <a
            className="links"
            href="https://twitter.com/Irenelandia_"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter twitter"></i>
            <div className="liquid"></div>
          </a>
          <a
            className="links"
            href="https://github.com/IreneRuedaVega"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github github"></i>
            <div className="liquid"></div>
          </a>
          <a
            className="links"
            href="//linkedin.com/in/ireneruedavega"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
            <div className="liquid"></div>
          </a>
          <a
            className="links"
            href="mailto:ruedavegairene@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fab2 fa-envelope mail"></i>
            <div className="liquid"></div>
          </a>
          <a
            className="links"
            href="https://codepen.io/ruedavegairene"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-codepen codepen"></i>
            <div className="liquid"></div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
