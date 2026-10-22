import React, { useEffect, useState } from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaLayerGroup,
  FaRobot,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiVuetify,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiElectron,
  SiPhp,
  SiLaravel,
  SiOpenai,
  SiGoogle,
  SiGit,
  SiHtml5,
  SiCss3,
  SiNestjs,
} from "react-icons/si";

const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: <FaCode />,
    description: "Core languages used for robust web and systems engineering",
    skills: [
      { name: "JavaScript (ES6+)", icon: <SiJavascript color="#f7df1e" />, level: "Advanced" },
      { name: "TypeScript", icon: <SiTypescript color="#3178c6" />, level: "Advanced" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: <FaLayerGroup />,
    description: "Component-driven, responsive UI architectures & frameworks",
    skills: [
      { name: "React.js", icon: <SiReact color="#61dafb" />, level: "Advanced" },
      { name: "Next.js", icon: <SiNextdotjs color="#ffffff" />, level: "Proficient" },
      { name: "Vue.js", icon: <SiVuedotjs color="#42b883" />, level: "Proficient" },
      { name: "Nuxt.js", icon: <SiNuxtdotjs color="#00dc82" />, level: "Proficient" },
      { name: "Vuetify", icon: <SiVuetify color="#1867c0" />, level: "Proficient" },
      { name: "HTML5", icon: <SiHtml5 color="#e34f26" />, level: "Mastery" },
      { name: "CSS3", icon: <SiCss3 color="#1572b6" />, level: "Mastery" },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" />, level: "Advanced" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: <FaServer />,
    description: "Scalable server architectures, microservices & REST endpoints",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs color="#339933" />, level: "Advanced" },
      { name: "Express.js", icon: <SiExpress color="#ffffff" />, level: "Advanced" },
      { name: "NestJS", icon: <SiNestjs color="#e0234e" />, level: "Skilled" },
      { name: "RESTful APIs", icon: <FaServer color="#00ff88" />, level: "Advanced" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    icon: <FaDatabase />,
    description: "Relational and NoSQL persistent storage engines",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql color="#4169e1" />, level: "Advanced" },
      { name: "MongoDB", icon: <SiMongodb color="#47a248" />, level: "Advanced" },
      { name: "MySQL", icon: <SiMysql color="#00758f" />, level: "Proficient" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Integrations",
    icon: <FaTools />,
    description: "Cross-platform runtime, version control & AI integrations",
    skills: [
      { name: "Git & GitHub", icon: <SiGit color="#f05032" />, level: "Advanced" },
      { name: "Electron", icon: <SiElectron color="#47848f" />, level: "Proficient" },
      { name: "ChatGPT AI API", icon: <SiOpenai color="#10a37f" />, level: "Proficient" },
      { name: "Google Gemini AI API", icon: <SiGoogle color="#4285f4" />, level: "Proficient" },
    ],
  },
  {
    id: "additional",
    title: "Additional Exposure",
    icon: <FaRobot />,
    description: "Multi-stack server platforms and server-side script environments",
    skills: [
      { name: "PHP", icon: <SiPhp color="#777bb4" />, level: "Intermediate" },
      { name: "Laravel", icon: <SiLaravel color="#ff2d20" />, level: "Intermediate" },
    ],
  },
];

const Skillset = () => {
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeTab);

  return (
    <section className="skills-section fade-in-section">
      <div className="section-header">
        <span className="section-badge">
          <FaTools /> Technical Competencies
        </span>
        <h1 className="section-title">
          Technical <span className="theme-green">Skills & Stacks</span>
        </h1>
        <p className="section-subtitle">
          Specialized in Full-Stack JavaScript ecosystems, modern frontends, enterprise backends, and multi-model AI integrations.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="filter-pill-container">
        <button
          className={`filter-pill ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All Domains
        </button>
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-pill ${activeTab === cat.id ? "active" : ""}`}
            onClick={() => setActiveTab(cat.id)}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Categories Grid */}
      <div className="skills-categories-wrapper">
        {filteredCategories.map((cat) => (
          <div className="skill-category-card" key={cat.id}>
            <div className="category-header">
              <div className="cat-icon-wrap">{cat.icon}</div>
              <div>
                <h3 className="category-title">{cat.title}</h3>
                <p className="category-desc">{cat.description}</p>
              </div>
            </div>

            <div className="skill-chips-grid">
              {cat.skills.map((skill, sIdx) => (
                <div className="skill-chip-card" key={sIdx}>
                  <div className="skill-chip-icon">{skill.icon}</div>
                  <div className="skill-chip-text">
                    <span className="skill-chip-name">{skill.name}</span>
                    <span className="skill-chip-level">
                      <FaCheckCircle className="check-mini" /> {skill.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skillset;
