import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import "../stylesheets/layout/App.scss";
import Cover from "./cover/Cover";
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";
import PROJECTS_DATA from "../data/projects";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      {loading ? (
        <div className="loading">
          <BeatLoader color={"#8787ff"} loading={loading} size={30} />
        </div>
      ) : (
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
