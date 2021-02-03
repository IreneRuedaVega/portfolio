import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div>
      <BrowserRouter>
        <Navbar isScrolling={scrollHeight} />
        <Cover />
        <About />
        <Projects data={PROJECTS_DATA} />
        <Skills />
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
