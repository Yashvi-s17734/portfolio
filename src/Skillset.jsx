import React, { useEffect } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaNpm,
  FaDatabase
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiFlutter, SiFirebase } from "react-icons/si";
import "./App.css"; // reuse styles

const Skillset = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaNpm />, name: "npm" },
    { icon: <FaDatabase />, name: "SQL" }
  ];

  return (
    <section className="skills-section fade-in-section">
      <h1 className="skills-title">My Skillset</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skillset;
