import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Slider from "./components/slider/Slider";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";

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
    <BrowserRouter>
      <div className="App">
        <Navbar isScrolling={scrollHeight} />
        <Cover />
        <About />
        <Slider />
        <Skills />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
