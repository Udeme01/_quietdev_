import React from "react";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import Certifications from "../components/home/Certifications";
import Skills from "../components/home/Skills";
import { WhatIDo } from "../components/home/Services";
import { FAQ } from "../components/home/FAQs";
import { WhatClientsSay } from "../components/home/WhatClientsSay";

const Portfolio = () => {
  return (
    <>
      <Hero />
      <Projects />
      {/* <Skills /> */}
      <WhatIDo />
      <WhatClientsSay />
      <FAQ />
      <Certifications />
    </>
  );
};

export default Portfolio;
