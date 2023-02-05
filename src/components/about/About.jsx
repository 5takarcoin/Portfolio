import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="aboutContainer my__flex">
        {/* <div className="title">About</div> */}
        <div className="insideAbout fix__about">
          <div className="desc">
            <div className="description">
              I <br></br>Create<br></br> Websites <div className="fixLg">&</div>{" "}
              Games
            </div>
          </div>
          <div className="about my__flex">
            <div className="skills skillT">
              <div className="inSkillT">Skilled in</div>
            </div>
            <ul className="skills">
              <div className="side frontend">
                <div className="type">
                  <div className="typeType">Frontend</div>
                </div>
                <div className="inType">
                  <li>
                    HTML<span className="fontFix"> & </span>CSS
                  </li>
                  <li>JavaScript</li>
                  <li>GSAP</li>
                  <li>React</li>
                </div>
              </div>
              <div className="side backend">
                <div className="type">
                  <div className="typeType">Backend</div>
                </div>
                <div className="inType">
                  <li>
                    Node<span className="fontFix">.</span>js
                  </li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>Firebase</li>
                </div>
              </div>
              <div className="side version">
                <div className="type">
                  <div className="typeType">
                    Version <br></br>control
                  </div>
                </div>

                <div className="inType">
                  <li>
                    Git<span className="fontFix"> & </span>GitHub
                  </li>
                </div>
              </div>
              <div className="side games">
                <div className="type">
                  <div className="typeType">
                    Games
                    <span className="fontFix smtype">
                      {" "}
                      & <br></br>
                    </span>
                    others
                  </div>
                </div>

                <div className="inType">
                  <li>Unity</li>
                  <li>
                    C<span className="fontFix"> / </span>C
                    <span className="fontFix">++</span>
                    <span className="fontFix"> / </span>C
                    <span className="fontFix">#</span>
                  </li>
                  <li>Python</li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
