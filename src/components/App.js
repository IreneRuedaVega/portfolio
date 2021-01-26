import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Cover from "./cover/Cover";
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Footer from "./footer/Footer";
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
    <div className="App">
      <BrowserRouter>
        <Navbar isScrolling={scrollHeight} />
        <Cover />
        <About />
        <Projects data={PROJECTS_DATA} />
        <Skills />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
