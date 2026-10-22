import React, { useEffect } from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaBuilding,
  FaCheckCircle,
  FaLayerGroup,
  FaDesktop,
  FaShippingFast,
  FaRobot,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiNuxtdotjs,
  SiVuedotjs,
  SiVuetify,
  SiElectron,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiOpenai,
  SiGoogle,
} from "react-icons/si";

const experiences = [
  {
    company: "Tretanz Infotech",
    role: "MERN Stack Developer",
    period: "February 2026 – Present",
    type: "Full-Time Industry Role",
    summary:
      "Contribute to existing business applications across inventory management, ERP, shipping and logistics, implementing feature changes and maintenance work across multiple stacks.",
    projects: [
      {
        title: "Inventrex — Multi-Tenant Inventory & ERP Platform",
        category: "Enterprise ERP & Inventory",
        icon: <FaLayerGroup className="project-icon-badge" />,
        stack: [
          { name: "Next.js", icon: <SiNextdotjs /> },
          { name: "React", icon: <SiReact /> },
          { name: "TypeScript", icon: <SiTypescript /> },
          { name: "Node.js", icon: <SiNodedotjs /> },
          { name: "Express", icon: <SiExpress /> },
          { name: "PostgreSQL", icon: <SiPostgresql /> },
        ],
        bulletPoints: [
          "Implemented frontend and backend changes for a multi-tenant inventory and ERP platform using Next.js, React, TypeScript, and Node.js/Express with PostgreSQL-based services.",
          "Implemented a date-effective product pricing approval workflow for selling-price and cost-price changes, so approved prices apply from configured effective dates while earlier billing dates retain historical prices.",
          "Added validation to prevent conflicting price changes for the same product on the same effective date, maintaining absolute ledger integrity.",
        ],
      },
      {
        title: "RTA Biz Desktop — Shipping & Logistics Desktop Application",
        category: "Desktop Application & Logistics",
        icon: <FaDesktop className="project-icon-badge" />,
        stack: [
          { name: "Nuxt.js", icon: <SiNuxtdotjs /> },
          { name: "Vue.js", icon: <SiVuedotjs /> },
          { name: "Vuetify", icon: <SiVuetify /> },
          { name: "Electron", icon: <SiElectron /> },
          { name: "REST APIs", icon: <FaShippingFast /> },
        ],
        bulletPoints: [
          "Developed frontend functionality and fixed UI bugs in an Electron desktop application built with Nuxt.js, Vue.js, and Vuetify.",
          "Connected desktop screens to the existing RTA Biz backend APIs while keeping established API contracts unchanged.",
          "Optimized UI render cycles and state management to guarantee fluid desktop operation for high-volume shipping logistics.",
        ],
      },
      {
        title: "RTA Biz / ShipItJa — Freight & Courier Logistics Platform",
        category: "Freight Logistics & AI Scanning",
        icon: <FaShippingFast className="project-icon-badge" />,
        stack: [
          { name: "Laravel/PHP", icon: <SiLaravel /> },
          { name: "Vue.js", icon: <SiVuedotjs /> },
          { name: "MySQL", icon: <SiMysql /> },
          { name: "ChatGPT AI", icon: <SiOpenai /> },
          { name: "Gemini AI", icon: <SiGoogle /> },
        ],
        bulletPoints: [
          "Implemented frontend and backend changes in an existing freight-forwarding and courier logistics platform using Laravel/PHP, Vue.js, and MySQL.",
          "Extended AI-powered package scanning to support ChatGPT alongside Gemini by implementing backend provider selection and integration.",
          "Configured provider/API credentials dynamically through environment settings, allowing seamless switching and multi-model failover.",
        ],
      },
    ],
  },
];

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="experience-page fade-in-section">
      <div className="section-header">
        <span className="section-badge">
          <FaBriefcase /> Career Journey
        </span>
        <h1 className="section-title">
          Professional <span className="theme-green">Experience</span>
        </h1>
        <p className="section-subtitle">
          Real-world enterprise experience building scalable ERP, inventory, desktop, and logistics software with production-grade architectures.
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp, idx) => (
          <div className="experience-card" key={idx}>
            <div className="experience-card-top">
              <div className="role-and-company">
                <div className="company-logo-badge">
                  <FaBuilding />
                </div>
                <div>
                  <h2 className="role-title">{exp.role}</h2>
                  <div className="company-info">
                    <span className="company-name">{exp.company}</span>
                    <span className="company-tag">{exp.type}</span>
                  </div>
                </div>
              </div>

              <div className="experience-dates">
                <span className="date-badge">
                  <FaCalendarAlt /> {exp.period}
                </span>
                <span className="status-indicator">
                  <span className="status-dot"></span> Active Role
                </span>
              </div>
            </div>

            <p className="experience-overview">{exp.summary}</p>

            <div className="sub-projects-wrapper">
              <h3 className="sub-projects-title">
                <FaLayerGroup /> Key Enterprise Systems Contributed To:
              </h3>

              <div className="sub-projects-grid">
                {exp.projects.map((proj, pIdx) => (
                  <div className="sub-project-card" key={pIdx}>
                    <div className="sub-project-header">
                      <div className="sub-proj-icon-box">{proj.icon}</div>
                      <div>
                        <span className="sub-proj-category">{proj.category}</span>
                        <h4 className="sub-proj-title">{proj.title}</h4>
                      </div>
                    </div>

                    <div className="tech-badge-row">
                      {proj.stack.map((t, tIdx) => (
                        <span className="tech-chip" key={tIdx}>
                          {t.icon}
                          <span>{t.name}</span>
                        </span>
                      ))}
                    </div>

                    <ul className="project-bullet-list">
                      {proj.bulletPoints.map((point, bIdx) => (
                        <li key={bIdx}>
                          <FaCheckCircle className="bullet-check" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
