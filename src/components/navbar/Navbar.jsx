import React, { useEffect, useRef } from "react";
import "./navbar.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  let about = null;
  let projects = null;
  let contact = null;
  let top = null;

  let sad = true;

  const scroll = () => {
    const para = gsap
      .timeline({ defaults: { duration: 1 } })
      .to(".heroImg", { yPercent: -50 })
      .to(".anotherImg", { xPercent: -10, delay: -1 });
    ScrollTrigger.create({
      trigger: ".App",
      animation: para,
      scrub: true,
      start: "top top",
      snap: {
        snapTo: 1 / 4,
        duration: 0.3,
        ease: "power3.easeIn",
      },
    });
    ScrollTrigger.create({
      trigger: ".hero",
      start: "49% center",
      end: () => `+=${innerHeight / 2}`,

      onEnter: showTop,
      onEnterBack: showTop,
      duration: 0.1,
    });
    ScrollTrigger.create({
      trigger: ".aboutContainer",
      start: "49% center",
      end: () => `+=${innerHeight / 2}`,

      onEnter: showAbout,
      onEnterBack: showAbout,
      duration: 0.1,
    });
    ScrollTrigger.create({
      trigger: ".projects",
      start: "49% center",
      end: () => `+=${innerHeight / 2}`,

      onEnter: showProjects,
      onEnterBack: showProjects,
      duration: 0.1,
    });
    ScrollTrigger.create({
      trigger: ".contact",
      start: "49% center",
      end: () => `+=${innerHeight / 2}`,
      onEnter: showContact,
      onEnterBack: showContact,
      duration: 0.1,
    });
  };

  const aboutLink = useRef(null);
  const projectsLink = useRef(null);
  const contactLink = useRef(null);
  const topLink = useRef(null);

  const goTop = () => {
    top.scrollIntoView({ behavior: "smooth" });
    // showTop();
  };
  const goAbout = () => {
    about.scrollIntoView({ behavior: "smooth" });
    // showAbout();
  };
  const goProjects = () => {
    projects.scrollIntoView({ behavior: "smooth" });
    // showProjects();
  };
  const goContact = () => {
    contact.scrollIntoView({ behavior: "smooth" });
    // showContact();
  };

  const showTop = () => {
    projectsLink.current.classList.remove("current");
    topLink.current.classList.add("current");
    contactLink.current.classList.remove("current");
    aboutLink.current.classList.remove("current");
  };
  const showAbout = () => {
    projectsLink.current.classList.remove("current");
    aboutLink.current.classList.add("current");
    contactLink.current.classList.remove("current");
    topLink.current.classList.remove("current");
  };
  const showProjects = () => {
    projectsLink.current.classList.add("current");
    aboutLink.current.classList.remove("current");
    contactLink.current.classList.remove("current");
    topLink.current.classList.remove("current");
  };
  const showContact = () => {
    projectsLink.current.classList.remove("current");
    aboutLink.current.classList.remove("current");
    contactLink.current.classList.add("current");
    topLink.current.classList.remove("current");
  };

  useEffect(() => {
    about = document.getElementsByClassName("aboutContainer")[0];
    projects = document.getElementsByClassName("projects")[0];
    contact = document.getElementsByClassName("contact")[0];
    top = document.getElementsByClassName("hero")[0];

    if (sad) {
      showTop();
      scroll();
      sad = false;
    }
  }, []);
  return (
    <div className="navbar">
      <div className="socials">
        <ul className="links">
          <li>GitHub</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Itch</li>
        </ul>
      </div>
      <div className="navi">
        <ul className="links">
          <li ref={topLink} onClick={goTop}>
            Top<span></span>
          </li>
          <li ref={aboutLink} onClick={goAbout}>
            About<span></span>
          </li>
          <li ref={projectsLink} onClick={goProjects}>
            Projects<span></span>
          </li>
          <li ref={contactLink} onClick={goContact}>
            Contact<span></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
