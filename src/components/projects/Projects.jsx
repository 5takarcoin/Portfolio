import React, { useEffect } from "react";
import "./projects.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  let sad = true;

  useEffect(() => {
    //if (sad) projectScroll();
    sad = false;
  });
  return (
    <div className="projects my__flex">
      <div className="title">Projects</div>
      <div className="projContainer">
        <div className="ddd">No</div>
        <div className="ddd">aa</div>
      </div>
    </div>
  );
};

export default Projects;
