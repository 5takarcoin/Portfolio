import React from "react";
import Contact from "../contact/Contact";
import "./project.css";

const Project = ({ project }) => {
  const dir =
    project.id % 2 === 0 ? "projectContent reversed" : " projectContent";

  return (
    <div className="project my__flex">
      <div className="projectContainer">
        <div className={dir}>
          <div className="pictures">
            <h1>{project.name}</h1>
            <div className="picture">
              <img src={project.picture} alt="" />
            </div>
            <div className="buttons">
              <a href={project.weblink} target="_blank">
                <button className="visit">Visit</button>
              </a>
              <a href={project.githublink} target="_blank">
                <button className="github">GitHub</button>
              </a>
            </div>
          </div>
          <div className="proDesc">
            <div className="writings">
              <div className="shortDesc">{project.desct}</div>
              <div className="detailsDesc">
                {project.descd.map((line, i) => {
                  return <p key={Date.now() * i * 5}>{line}</p>;
                })}
              </div>
            </div>
            <div className="listslists">
              <div className="features">
                <p className="ultitle">Features</p>
                {project.features.map((line, i) => {
                  return <li key={Date.now() * i * 5 + 4}>{line}</li>;
                })}
              </div>
              <div className="techUsed">
                <p className="ultitle">Built with</p>
                {project.builtwith.map((line, i) => {
                  return <li key={Date.now() * i * 5 + 3}>{line}</li>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
