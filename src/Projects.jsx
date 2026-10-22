import React, { useState, useEffect } from "react";
import {
  FaStore,
  FaBoxes,
  FaMoneyCheckAlt,
  FaUserShield,
  FaFileInvoiceDollar,
  FaCheckCircle,
  FaGithub,
  FaExternalLinkAlt,
  FaLayerGroup,
  FaUtensils,
  FaUserGraduate,
  FaCloudSun,
  FaStickyNote,
  FaExchangeAlt,
  FaDesktop,
  FaShippingFast,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiNuxtdotjs,
  SiVuedotjs,
  SiVuetify,
  SiElectron,
  SiLaravel,
  SiMysql,
  SiOpenai,
  SiGoogle,
} from "react-icons/si";

const flagshipProject = {
  title: "Shop Management System",
  subtitle: "Full-Lifecycle Retail, Inventory & Financial Ledger Application",
  category: "Full-Stack Web (MERN)",
  type: "Flagship Personal Project",
  status: "In Active Development",
  techStack: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "React.js", icon: <SiReact /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
  ],
  description:
    "A comprehensive, enterprise-ready shop management platform designed to automate retail operations including inventory, billing, purchase cycles, supplier management, and customer accounts.",
  features: [
    {
      icon: <FaUserShield />,
      title: "RBAC Security",
      desc: "Granular role-based authentication and authorization with secure JWT handling.",
    },
    {
      icon: <FaBoxes />,
      title: "Inventory Stock Tracking",
      desc: "Real-time product & category management with automated low-stock notifications.",
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Sales & Invoicing",
      desc: "Instant POS billing, invoice generation, purchase workflows, and live stock deductions.",
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Ledger Integrity & Returns",
      desc: "Sales returns, customer refunds, and supplier ledger with ACID transaction guarantees.",
    },
  ],
  bulletPoints: [
    "Developing a shop management application for inventory, billing, purchases, suppliers, and customer management.",
    "Implemented role-based authentication and authorization, product and category management, and inventory stock tracking.",
    "Built purchase and sales workflows with stock updates, payment tracking, and invoice management.",
    "Implemented sales returns, refunds, and supplier ledger features with transaction integrity and financial consistency checks.",
  ],
  github: "https://github.com/Yashvi-s17734",
};

const allProjects = [
  {
    title: "Inventrex — Multi-Tenant Inventory & ERP Platform",
    category: "enterprise",
    categoryLabel: "Enterprise Platform",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    description:
      "Enterprise multi-tenant platform with date-effective pricing approval engines, strict audit trails, and multi-tenant PostgreSQL isolation.",
    highlights:
      "Engineered date-effective pricing approval workflows and conflict prevention algorithms across historical billing tables.",
    icon: <FaLayerGroup />,
    isEnterprise: true,
  },
  {
    title: "RTA Biz / ShipItJa — Freight Logistics & AI Scanner",
    category: "enterprise",
    categoryLabel: "Logistics & AI",
    tech: ["Laravel/PHP", "Vue.js", "MySQL", "ChatGPT AI", "Gemini AI"],
    description:
      "High-throughput courier and freight-forwarding logistics platform with multi-provider AI package scanning.",
    highlights:
      "Integrated dual-provider AI scanning supporting dynamic switching between OpenAI ChatGPT and Google Gemini models.",
    icon: <FaShippingFast />,
    isEnterprise: true,
  },
  {
    title: "RTA Biz Desktop — Logistics Desktop Application",
    category: "enterprise",
    categoryLabel: "Desktop Application",
    tech: ["Electron", "Nuxt.js", "Vue.js", "Vuetify", "REST APIs"],
    description:
      "Cross-platform desktop application built for high-speed counter operations, package processing, and shipping desk clerks.",
    highlights:
      "Connected desktop screens to production backend APIs with rock-solid reliability and responsive UI states.",
    icon: <FaDesktop />,
    isEnterprise: true,
  },
  {
    title: "Smart Kitchen Waste Minimizer & Recipe Sharing",
    category: "fullstack",
    categoryLabel: "MERN Stack Application",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    description:
      "MERN stack web application empowering restaurants to reduce kitchen waste by suggesting dynamic recipes based on available inventory.",
    highlights:
      "Inventory tracking, recipe recommendation algorithm, and social recipe sharing community feed.",
    icon: <FaUtensils />,
    link: "https://github.com/Yashvi-s17734/AI-Powered-Smart-Kitchen-Waste-Minimizer-for-Restaurants",
  },
  {
    title: "Student Activity & Performance Tracker",
    category: "fullstack",
    categoryLabel: "Academic Management",
    tech: ["Node.js", "Express", "React", "MongoDB"],
    description:
      "Comprehensive academic tracker monitoring student test metrics, attendance, subject progression, and performance analytics.",
    highlights:
      "Data visualization dashboards, student grade analysis, and automated progress report generation.",
    icon: <FaUserGraduate />,
    link: "https://github.com/Yashvi-s17734/student_2",
  },
  {
    title: "Real-Time Currency Exchange Platform",
    category: "tools",
    categoryLabel: "Financial Utility",
    tech: ["React.js", "Exchange Rates API", "CSS3"],
    description:
      "Interactive financial tool providing real-time global currency conversions, historical trend charts, and multiple fiat currency pairs.",
    highlights:
      "Zero-latency exchange calculation, cached rate tables, and modern responsive UI.",
    icon: <FaExchangeAlt />,
    link: "https://github.com/Yashvi-s17734",
  },
  {
    title: "Live Weather Forecast Application",
    category: "tools",
    categoryLabel: "Weather Utility",
    tech: ["React.js", "OpenWeather API", "Geolocation"],
    description:
      "Modern weather forecasting application providing hourly and 7-day climatic predictions, air quality indexing, and radar maps.",
    highlights:
      "Automatic geolocation detection, dynamic weather illustrations, and responsive layout.",
    icon: <FaCloudSun />,
    link: "https://github.com/Yashvi-s17734",
  },
  {
    title: "Cloud Notes & Workspace",
    category: "tools",
    categoryLabel: "Productivity Tool",
    tech: ["React.js", "LocalStorage / Node", "CSS3"],
    description:
      "Fast, minimalist markdown note-taking app with tag filtering, search indexing, and real-time state persistence.",
    highlights:
      "Instant debounced search, rich text formatting, and offline-first storage fallback.",
    icon: <FaStickyNote />,
    link: "https://github.com/Yashvi-s17734",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredList =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <section className="projects-page fade-in-section">
      <div className="section-header">
        <span className="section-badge">
          <FaLayerGroup /> Portfolio of Work
        </span>
        <h1 className="section-title">
          Featured <span className="theme-green">Projects & Systems</span>
        </h1>
        <p className="section-subtitle">
          Showcasing production-level ERP systems, retail management platforms, and web engineering achievements.
        </p>
      </div>

      {/* Flagship Project Spotlight Card */}
      <div className="flagship-spotlight-card">
        <div className="flagship-badge-header">
          <span className="flagship-pill">
            <FaStore /> {flagshipProject.type}
          </span>
          <span className="flagship-status">
            <span className="status-dot"></span> {flagshipProject.status}
          </span>
        </div>

        <div className="flagship-content-grid">
          <div className="flagship-info">
            <h2 className="flagship-title">{flagshipProject.title}</h2>
            <p className="flagship-sub">{flagshipProject.subtitle}</p>
            <p className="flagship-desc">{flagshipProject.description}</p>

            <div className="flagship-features-grid">
              {flagshipProject.features.map((feat, i) => (
                <div className="flagship-feature-item" key={i}>
                  <div className="feat-icon">{feat.icon}</div>
                  <div>
                    <h4>{feat.title}</h4>
                    <p>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flagship-bullets">
              <h4 className="bullets-title">Key Implementation Highlights:</h4>
              <ul>
                {flagshipProject.bulletPoints.map((b, i) => (
                  <li key={i}>
                    <FaCheckCircle className="bullet-check" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flagship-action-bar">
              <div className="tech-badge-row">
                {flagshipProject.techStack.map((t, i) => (
                  <span className="tech-chip" key={i}>
                    {t.icon}
                    <span>{t.name}</span>
                  </span>
                ))}
              </div>

              <a
                href={flagshipProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="green-btn inline-btn"
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Filter Buttons */}
      <div className="filter-pill-container">
        <button
          className={`filter-pill ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All Projects ({allProjects.length})
        </button>
        <button
          className={`filter-pill ${filter === "enterprise" ? "active" : ""}`}
          onClick={() => setFilter("enterprise")}
        >
          Enterprise Platforms (3)
        </button>
        <button
          className={`filter-pill ${filter === "fullstack" ? "active" : ""}`}
          onClick={() => setFilter("fullstack")}
        >
          Full-Stack Web (2)
        </button>
        <button
          className={`filter-pill ${filter === "tools" ? "active" : ""}`}
          onClick={() => setFilter("tools")}
        >
          Utilities & Web Tools (3)
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-unified-grid">
        {filteredList.map((project, index) => (
          <div className="project-glass-card" key={index}>
            <div className="project-card-header">
              <div className="project-icon-avatar">{project.icon}</div>
              <div className="project-card-badges">
                <span className="category-tag">{project.categoryLabel}</span>
                {project.isEnterprise && (
                  <span className="enterprise-badge">Industry Work</span>
                )}
              </div>
            </div>

            <div className="project-body">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.description}</p>

              <div className="project-highlight-box">
                <strong>Highlight:</strong> {project.highlights}
              </div>

              <div className="project-tech-pills">
                {project.tech.map((t, tIdx) => (
                  <span className="tech-mini-pill" key={tIdx}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-footer">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  <FaGithub /> Source Repository <FaExternalLinkAlt className="ext-icon" />
                </a>
              ) : (
                <span className="proprietary-note">
                  <FaCheckCircle className="bullet-check" /> Contributed at Tretanz Infotech
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
