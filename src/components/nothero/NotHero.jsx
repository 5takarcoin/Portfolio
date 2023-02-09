import React, { useEffect } from "react";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Projects from "../../components/projects/Projects";
import Navbar from "../../components/navbar/Navbar";
import "./nothero.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const NotHero = () => {
  return (
    <div className="notHero">
      <About />
      <Projects />
      <Contact />
      <Navbar />
    </div>
  );
};

export default NotHero;
