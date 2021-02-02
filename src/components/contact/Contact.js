import React from "react";
import "../../stylesheets/layout/contact.scss";
import imageFooter from "../../media/ireneFooter.svg";
import cv from "../../documents/CV-Irene-Rueda-Vega.pdf";

const Contact = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <img
          className="footer__info--img"
          src={imageFooter}
          alt="Dibujo de Irene"
        />
        <h1 className="footer__info--title">trabajemos juntos</h1>
        <hr className="footer__info--separation" />
        <p className="footer__info--text">
          Quiero seguir aprendiendo y creciendo profesionalmente. Si estás
          interesado/a en un perfil de desarrolladora front-end junior creativa
          y con muchas ganas de aprender, contacta conmigo.
        </p>
        <span className="footer__info--cv cv">
          <a
            href={cv}
            className="cv__link"
            target="_blank"
            rel="noreferrer noopener"
            download
          >
            Descargar CV
          </a>
        </span>
      </div>
      <div className="footer__contact">
        <div className="footer__contact--design-by">
          Design &#64; Javier Santos &#124; Irene Rueda
        </div>
        <div className="footer__contact--links social">
          <a
            className="social__links"
            href="https://twitter.com/Irenelandia_"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter social__links--twitter"></i>
            <div className="social__links--liquid"></div>
          </a>
          <a
            className="social__links"
            href="https://github.com/IreneRuedaVega"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github social__links--github"></i>
            <div className="social__links--liquid"></div>
          </a>
          <a
            className="social__links"
            href="//linkedin.com/in/ireneruedavega"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin social__links--linkedin"></i>
            <div className="social__links--liquid"></div>
          </a>
          <a
            className="social__links"
            href="mailto:ruedavegairene@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fab2 fa-envelope social__links--mail"></i>
            <div className="social__links--liquid"></div>
          </a>
          <a
            className="social__links"
            href="https://codepen.io/ruedavegairene"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-codepen social__links--codepen"></i>
            <div className="social__links--liquid"></div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
