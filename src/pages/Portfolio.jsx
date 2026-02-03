import React from "react";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import Certifications from "../components/home/Certifications";
// import Skills from "../components/home/Skills";

const Portfolio = () => {
  return (
    <>
      <Hero />
      <Projects />
      {/* <Skills /> */}
      <Certifications />
    </>
  );
};

export default Portfolio;
