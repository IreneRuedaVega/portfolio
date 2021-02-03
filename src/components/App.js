import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "../stylesheets/layout/App.scss";
import Cover from "./cover/Cover";
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";
import PROJECTS_DATA from "../data/projects";
import SkeletonCover from "./cover/SkeletonCover";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timing);
  }, []);

  return (
    <div>
      {loading && <SkeletonCover />}
      {!loading && (
        <BrowserRouter>
          <Navbar isScrolling={scrollHeight} />
          <Cover />
          <About />
          <Projects data={PROJECTS_DATA} />
          <Skills />
          <Contact />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
