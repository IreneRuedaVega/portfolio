import React from "react";
import "./Learning.scss";

const Learning = () => {
  return (
    <div className="section-learning">
      <div className="section-learning__backend">
        <div className="section-learning__backend--learning-title title">
          <h3>Aprendiendo...</h3>
          <hr className="title__line" />
        </div>
        <ul className="section-learning__backend--learning-list backend-list">
          <li className="backend-list__item">NodeJs + ExpressJs</li>
          <li className="backend-list__item">SQL + MySQL + SQLite</li>
        </ul>
      </div>
      <div className="section-learning__new-knowledge">
        <div className="section-learning__new-knowledge--knowledge-title title">
          <h3>Quiero aprender</h3>
          <hr className="title__line" />
        </div>
        <ul className="section-learning__new-knowledge--knowledge-list knowledge-list">
          <li className="knowledge-list__item">Angular + React Native</li>
          <li className="knowledge-list__item">PHP + Wordpress</li>
        </ul>
      </div>
    </div>
  );
};

export default Learning;
