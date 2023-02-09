import React from "react";
import Contact from "../contact/Contact";

import Project from "../../components/project/Project";
import "./projects.css";

const Projects = () => {
  const projectLists = [
    {
      id: 1,
      name: "Adda",
      picture: "https://www.linkpicture.com/q/adacasca.png",
      desct: "A realtime chat app",
      descd: [
        `Adda, which is the Bengali word for "chat,"  is a chatting app. Register, login, and find your friends.`,
        `Search for "tanvir" and start by sending me hi`,
      ],
      weblink: "https://adda-6df21.web.app/",
      githublink: "https://github.com/5takarcoin/adda",
      builtwith: ["React", "Sass", "Firebase"],
      features: ["Authenticate", "Search friends", "Send images"],
    },
    {
      id: 2,
      name: "Blog",
      picture: "https://www.linkpicture.com/q/asasasasa.png",
      desct: "MERN stack Blog Application",
      descd: [
        `Register, Login and start writing. It can take some time to load, so please be patient.`,
      ],
      weblink: "https://blog-anv.netlify.app/",
      githublink: "https://github.com/5takarcoin/blog-api",
      builtwith: ["React", "Node", "Express", "MongoDB", "Firebase"],
      features: ["Authenticate", "Write and Edit Blog", "Update Profile"],
    },
    {
      id: 3,
      name: "SeeSort",
      picture: "https://www.linkpicture.com/q/awdafa.png",
      desct: "Sorting Algorithm Visualizer",
      descd: [
        `See how different sorting methods work. Compare and learn from them.`,
      ],
      weblink: "#",
      githublink: "5takarcoin\visualizer",
      builtwith: ["React", "Sass"],
      features: [
        "Input or Generate Array",
        "Control Speed",
        "Compare Sorting Algorithms",
      ],
    },
  ];
  return (
    <div className="projects">
      {projectLists.map((project) => {
        return <Project key={project.id} project={project} />;
      })}
    </div>
  );
};

export default Projects;
