import React from "react";
import { Link } from "react-router-dom";
import profileImg from "./assets/profile.png";
import {
  FaPaperPlane,
  FaBriefcase,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaDownload,
  FaLayerGroup,
  FaRobot,
  FaCheckCircle,
  FaArrowRight,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiVuedotjs,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

function Home() {
  return (
    <>
      <main className="hero">
        <div className="hero-text">
          <div className="hero-status-badges">
            <span className="status-badge available-badge">
              <span className="pulse-dot"></span> MERN Stack Developer @ Tretanz Infotech
            </span>
            <span className="status-badge location-badge">
              <FaMapMarkerAlt /> Sihor, Bhavnagar, Gujarat
            </span>
          </div>

          <h2 className="hero-greeting">
            Hi <span className="wave">👋</span> I'm Yashvi Shah
          </h2>

          <h1 className="hero-title">
            Full-Stack <span className="highlight">JavaScript</span> Developer
          </h1>

          <p className="subtext">
            Specializing in building robust enterprise inventory/ERP systems, shipping & logistics platforms,
            and scalable web apps across <strong>React / Next.js</strong>, <strong>Node.js / Express</strong>,
            <strong>Vue / Nuxt</strong>, and <strong>Laravel / PHP</strong> with dual-provider AI integration.
          </p>

          <div className="hero-cta-group">
            <Link to="/experience" className="green-btn hero-primary-btn">
              View Experience <FaArrowRight />
            </Link>
            <Link to="/projects" className="outline-btn hero-secondary-btn">
              Explore Projects
            </Link>
            <Link to="/resume" className="text-btn">
              <FaDownload /> Resume
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div className="hero-metrics-bar">
            <div className="metric-item">
              <span className="metric-number">9.41</span>
              <span className="metric-label">B.Tech CGPA</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-number">3+</span>
              <span className="metric-label">Enterprise Platforms</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-number">AI</span>
              <span className="metric-label">ChatGPT & Gemini</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="image-backdrop-glow"></div>
          <div className="hero-image">
            <img src={profileImg} alt="Yashvi Shah - Full-Stack JavaScript Developer" />
          </div>
          <div className="floating-tech-card left-card">
            <SiNextdotjs className="floating-icon" />
            <div>
              <strong>Next.js & React</strong>
              <span>Full-Stack Enterprise</span>
            </div>
          </div>
          <div className="floating-tech-card right-card">
            <SiNodedotjs className="floating-icon" />
            <div>
              <strong>Node.js & Express</strong>
              <span>PostgreSQL & Mongo</span>
            </div>
          </div>
        </div>
      </main>

      {/* Introduction Section */}
      <section className="introduction-section">
        <div className="intro-container">
          <h2 className="intro-heading">
            <span className="white-text">ABOUT </span>
            <span className="theme-green">MY BACKGROUND</span>
          </h2>

          <p className="intro-lead">
            Full-Stack JavaScript Developer with professional experience contributing to inventory/ERP
            and shipping/logistics applications. Works across React/Next.js, Node.js/Express, Vue/Nuxt,
            and Laravel/PHP codebases. Experience includes date-effective product pricing workflows,
            frontend integration with existing APIs, and configurable AI-provider integration.
          </p>

          {/* Core Pillars */}
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <FaBriefcase />
              </div>
              <h3>Production Experience</h3>
              <p>
                Currently contributing as a <strong>MERN Stack Developer</strong> at{" "}
                <strong>Tretanz Infotech</strong>, delivering multi-tenant inventory & ERP features,
                date-effective pricing approval engines, and logistics solutions.
              </p>
              <Link to="/experience" className="pillar-link">
                Explore Tretanz Work →
              </Link>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <FaLayerGroup />
              </div>
              <h3>Full-Stack Mastery</h3>
              <p>
                Building end-to-end applications with <strong>React</strong>, <strong>Next.js</strong>,
                <strong>Node.js</strong>, <strong>TypeScript</strong>, <strong>PostgreSQL</strong>, and{" "}
                <strong>MongoDB</strong>, with rock-solid transaction integrity and ledger accuracy.
              </p>
              <Link to="/skills" className="pillar-link">
                View Tech Stack →
              </Link>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <FaRobot />
              </div>
              <h3>AI & Advanced Tooling</h3>
              <p>
                Hands-on integration with <strong>ChatGPT & Google Gemini APIs</strong> for automated
                package scanning, provider selection, and desktop apps with <strong>Electron & Vuetify</strong>.
              </p>
              <Link to="/projects" className="pillar-link">
                Check AI Projects →
              </Link>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <FaGraduationCap />
              </div>
              <h3>Academic Excellence</h3>
              <p>
                Pursuing B.Tech in Computer Engineering at <strong>Marwadi University</strong> with an
                exceptional <strong>9.41 CGPA</strong>, backed by top certifications from IBM & freeCodeCamp.
              </p>
              <Link to="/education" className="pillar-link">
                View Credentials →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
