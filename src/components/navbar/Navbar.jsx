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

  const handleFlowShow = (el, i) => {
    //onEnter
    if (i === 0) {
      gsap.set(el, { backgroundPosition: "0% 100%" });
      gsap.to(el, { backgroundPosition: "0 0%", duration: 0.2 });

      gsap.to(el, { color: "black", duration: 0.2 });
    }
    //onEnterBack
    if (i === 1) {
      gsap.set(el, { backgroundPosition: "0% -100%" });
      gsap.to(el, { backgroundPosition: "0 0%", duration: 0.2 });

      gsap.to(el, { color: "black", duration: 0.2 });
    }
    //onLeave
    if (i === 2) {
      gsap.set(el, { backgroundPosition: "0% 0%" });
      gsap.to(el, { backgroundPosition: "0 -100%", duration: 0.2 });

      gsap.to(el, { color: "white", duration: 0.2 });
    }
    //onLeaveBack
    if (i === 3) {
      gsap.set(el, { backgroundPosition: "0% 0%" });
      gsap.to(el, { backgroundPosition: "0 100%", duration: 0.2 });

      gsap.to(el, { color: "white", duration: 0.2 });
    }
  };

  const animScroll = () => {
    ScrollTrigger.create({
      trigger: ".hero",
      start: "-1 top",
      end: () => `+=${innerHeight / 2}`,

      onEnter: () => {
        handleFlowShow(topLink.current, 0);
      },
      onEnterBack: () => {
        handleFlowShow(topLink.current, 1);
      },
      onLeave: () => {
        handleFlowShow(topLink.current, 2);
      },
      onLeaveBack: () => {
        handleFlowShow(topLink.current, 3);
      },
      duration: 0.1,
    });
    ScrollTrigger.create({
      trigger: ".aboutContainer",
      start: "-1 top",
      end: () => `+=${innerHeight / 2}`,

      onEnter: () => {
        handleFlowShow(aboutLink.current, 0);
      },
      onEnterBack: () => {
        handleFlowShow(aboutLink.current, 1);
      },
      onLeave: () => {
        handleFlowShow(aboutLink.current, 2);
      },
      onLeaveBack: () => {
        handleFlowShow(aboutLink.current, 3);
      },
      duration: 0.1,
    });
    ScrollTrigger.create({
      trigger: ".projects",
      start: "-1 top",
      end: () => `+=${innerHeight / 2}`,

      onEnter: () => {
        handleFlowShow(projectsLink.current, 0);
      },
      onEnterBack: () => {
        handleFlowShow(projectsLink.current, 1);
      },
      onLeave: () => {
        handleFlowShow(projectsLink.current, 2);
      },
      onLeaveBack: () => {
        handleFlowShow(projectsLink.current, 3);
      },
      duration: 0.1,
    });
    ScrollTrigger.create({
      trigger: ".contact",
      start: "-1 top",
      end: () => `+=${innerHeight / 2}`,
      onEnter: () => {
        handleFlowShow(contactLink.current, 0);
      },
      onEnterBack: () => {
        handleFlowShow(contactLink.current, 1);
      },
      onLeave: () => {
        handleFlowShow(contactLink.current, 2);
      },
      onLeaveBack: () => {
        handleFlowShow(contactLink.current, 3);
      },
      duration: 0.1,
    });
  };

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
        duration: 0.5,
        ease: "power3.easeIn",
      },
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
      // showTop();

      animScroll();
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
