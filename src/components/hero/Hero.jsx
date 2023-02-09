import React, { useEffect } from "react";
import Image from "../image/Image";
import "./hero.css";

import gsap from "gsap";

const Hero = () => {
  let sad = true;
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  // const boxShadow = `rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
  // rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px,
  // rgba(240, 46, 170, 0.05) 25px 25px`;
  const boxShadow = "none";

  let yet = true;

  const handleNoClick = () => {
    const timeline = gsap
      .timeline({
        defaults: { duration: 0.5 },
      })
      .timeScale(0.8);

    timeline
      .set("body", { overflowY: "hidden" })
      .set(".slider", { xPercent: 0 })
      // .set(".anotherImg", { scale: 1.3 })
      .set(".socials li", { opacity: 0, xPercent: -250 })
      .set(".navi li", { opacity: 0, xPercent: 250 })
      .set(".image", {
        visibility: "hidden",
        width: "0vw",
        mixBlendMode: "normal",
        objectPosition: "bottom",
      })
      .set(".name", { fontSize: "9.8vw", height: 0, ease: "easeIn" })
      .to(".slider", { yPercent: -100, delay: 0.5, duration: 0.5 })
      .to(".name", { height: "auto", ease: "easeIn" })
      .to(".nameAnv", {
        color: "black",
        ease: "bounce",
      })
      .to(".nameAnv", {
        color: "white",
        ease: "bounce",
      })
      .to(".name", {
        fontSize: "6vw",
        delay: -0.5,
        ease: "expo",
      })
      // .to(".anotherImg", { scale: 1, delay: -0.5 })
      .to(".image", {
        x: 0,
        width: "20vw",
        ease: "linear",
        delay: -0.5,
        visibility: "visible",
      })
      .to(".job", { x: 0, opacity: 1, stagger: 0.1 })
      .to(".socials li", {
        opacity: 1,
        xPercent: 0,
        stagger: 0.1,
      })
      .to(".navi li", {
        xPercent: 0,
        opacity: 1,
        stagger: 0.1,
        delay: -0.5,
      })
      .set("body", { overflowY: "scroll" });
  };
  useEffect(() => {
    gsap.set(".App", { visibility: "visible" });
    if (sad) {
      handleNoClick();
    }
    sad = false;
  }, []);

  return (
    <div className="hero">
      <div className="heroImg"></div>
      <div className="anotherImg"></div>
      <div className="heroCenter">
        <div className="text">
          <div className="nameContainer">
            <h1 className="name">
              T<span className="nameAnv">ANV</span>IR
            </h1>
            <div className="jobs">
              <div className="job">Web Developer</div>
              <div className="job">Problem Solver</div>
            </div>
          </div>
        </div>
        <div className="image">
          <Image />
        </div>
      </div>
    </div>
  );
};

export default Hero;
