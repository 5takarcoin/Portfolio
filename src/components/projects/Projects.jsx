import React from "react";
import Contact from "../contact/Contact";

import Project from "../../components/project/Project";
import "./projects.css";

const Projects = () => {
  const projectLists = [
    {
      id: 1,
      name: "Adda",
      picture:
        "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/405300279_1767565263763821_9081097629108066908_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGrqZRgUyCGXu4k2Bl0aYoLzphzuQoeTm3OmHO5Ch5ObX1NM2w8Q7weoLw-x6O3a-ibnWk1SBpvU4kSG8oDr122&_nc_ohc=cIACklagkCoAX8U4evC&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfAvYMnqg-NGGPW0yL1QhBlvBxdeE3nBpzaAZTU89DV5Uw&oe=656F5C8B",
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
      picture:
        "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/405381943_1767565253763822_6551002447490281167_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFyGQ3YjGfgqPH8bVfpuuJ2IPcBmfpFVk4g9wGZ-kVWTrCrUd1By1gjmel9NL3ajEshY-X3Y6lDWsxQzG33tfwE&_nc_ohc=e5C3b8kggo4AX-qy26x&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfApsgqIaEtq8O1rCCkojy2JmTvcRzhi_MfdkHNcgILfyg&oe=656E2561",
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
      picture:
        "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/406905638_1767564777097203_8341692214026824996_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHLjCqsidU7qEEmFa4QmCtJuJb8rUPuO9O4lvytQ-470-KgOYg7igHFnarYpB3xlngQIVjcOyFIlEppJ2p4hc-U&_nc_ohc=BEv4-M8PBfkAX93OVME&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfBp-tSrq_gGQIe5Dtg8kE3YUrUY9CMbfLxnGVFSG_a1qg&oe=656E4227",
      desct: "Sorting Algorithm Visualizer",
      descd: [`See how Bubble Sort works.`],
      weblink: "https://anv-see-sort.netlify.app/",
      githublink: "https://github.com/5takarcoin/visualizer",
      builtwith: ["React", "Sass", "Framer motion"],
      features: [
        // "Input or Generate Array",
        "Generate Array",
        "Watch Bubble Sort",
        // "Control Speed",
        // "Compare Sorting Algorithms",
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
