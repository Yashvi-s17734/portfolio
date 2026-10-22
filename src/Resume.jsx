import React, { useEffect, useState } from "react";
import {
  FaDownload,
  FaFilePdf,
  FaLaptopCode,
  FaGraduationCap,
  FaBriefcase,
  FaTools,
  FaAward,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

const Resume = () => {
  const [viewMode, setViewMode] = useState("digital"); // 'digital' or 'pdf'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="resume-section fade-in-section">
      <div className="section-header">
        <span className="section-badge">
          <FaFilePdf /> Official Curriculum Vitae
        </span>
        <h1 className="section-title">
          Curriculum <span className="theme-green">Vitae</span>
        </h1>
        <p className="section-subtitle">
          Verified academic credentials, industry experience, and technical proficiencies.
        </p>
      </div>

      {/* Action Controls */}
      <div className="resume-control-bar">
        <div className="view-toggle-group">
          <button
            className={`view-toggle-btn ${viewMode === "digital" ? "active" : ""}`}
            onClick={() => setViewMode("digital")}
          >
            <FaLaptopCode /> Interactive Digital CV
          </button>
          <button
            className={`view-toggle-btn ${viewMode === "pdf" ? "active" : ""}`}
            onClick={() => setViewMode("pdf")}
          >
            <FaFilePdf /> PDF Document Viewer
          </button>
        </div>

        <div className="resume-download-actions">
          <a
            href="/download-resume"
            download="Yashvi_Shah_Resume.pdf"
            className="resume-action-btn primary"
          >
            <FaDownload /> Download PDF
          </a>
        </div>
      </div>

      {/* Digital Resume View */}
      {viewMode === "digital" && (
        <div className="digital-cv-paper" id="printable-cv">
          {/* Header */}
          <div className="cv-header">
            <h1 className="cv-name">YASHVI SHAH</h1>
            <p className="cv-role">Full-Stack JavaScript Developer</p>
            <div className="cv-contact-row">
              <span>
                <FaMapMarkerAlt className="cv-icon" /> Sihor, Bhavnagar, Gujarat
              </span>
              <span className="dot-sep">•</span>
              <a href="tel:+919328337767">
                <FaPhoneAlt className="cv-icon" /> +91 9328337767
              </a>
              <span className="dot-sep">•</span>
              <a href="mailto:yashvipshah80@gmail.com">
                <FaEnvelope className="cv-icon" /> yashvipshah80@gmail.com
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="cv-section">
            <div className="cv-section-title-wrap">
              <h2 className="cv-section-heading">PROFESSIONAL SUMMARY</h2>
            </div>
            <p className="cv-summary-text">
              Full-Stack JavaScript Developer with professional experience contributing to inventory/ERP
              and shipping/logistics applications. Works across React/Next.js, Node.js/Express, Vue/Nuxt,
              and Laravel/PHP codebases. Experience includes date-effective product pricing workflows,
              frontend integration with existing APIs, and configurable AI-provider integration.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="cv-section">
            <div className="cv-section-title-wrap">
              <h2 className="cv-section-heading">TECHNICAL SKILLS</h2>
            </div>
            <div className="cv-skills-table">
              <div className="cv-skill-row">
                <span className="cv-skill-label">Programming Languages:</span>
                <span className="cv-skill-vals">JavaScript, TypeScript</span>
              </div>
              <div className="cv-skill-row">
                <span className="cv-skill-label">Frontend:</span>
                <span className="cv-skill-vals">
                  React.js, Next.js, Vue.js, Nuxt.js, Vuetify, HTML, CSS, Tailwind CSS
                </span>
              </div>
              <div className="cv-skill-row">
                <span className="cv-skill-label">Backend:</span>
                <span className="cv-skill-vals">Node.js, Express.js</span>
              </div>
              <div className="cv-skill-row">
                <span className="cv-skill-label">Databases:</span>
                <span className="cv-skill-vals">MongoDB, PostgreSQL, MySQL</span>
              </div>
              <div className="cv-skill-row">
                <span className="cv-skill-label">Tools & Integrations:</span>
                <span className="cv-skill-vals">
                  Git, Electron, REST APIs, AI API Integration
                </span>
              </div>
              <div className="cv-skill-row">
                <span className="cv-skill-label">Additional Exposure:</span>
                <span className="cv-skill-vals">PHP, Laravel</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="cv-section">
            <div className="cv-section-title-wrap">
              <h2 className="cv-section-heading">PROFESSIONAL EXPERIENCE</h2>
            </div>

            <div className="cv-job-block">
              <div className="cv-job-header">
                <div>
                  <h3 className="cv-job-title">MERN Stack Developer</h3>
                  <span className="cv-company">Tretanz Infotech</span>
                </div>
                <span className="cv-date">February 2026 – Present</span>
              </div>

              <p className="cv-job-desc">
                Contribute to existing business applications across inventory management, ERP, shipping
                and logistics, implementing feature changes and maintenance work across multiple stacks.
              </p>

              {/* Inventrex */}
              <div className="cv-sub-project">
                <h4 className="cv-subproject-title">
                  Inventrex — Multi-Tenant Inventory & ERP Platform
                </h4>
                <ul className="cv-bullets">
                  <li>
                    Implemented frontend and backend changes for a multi-tenant inventory and ERP platform
                    using Next.js, React, TypeScript and Node.js/Express with PostgreSQL-based services.
                  </li>
                  <li>
                    Implemented a date-effective product pricing approval workflow for selling-price and
                    cost-price changes, so approved prices apply from configured effective dates while
                    earlier billing dates retain historical prices.
                  </li>
                  <li>
                    Added validation to prevent conflicting price changes for the same product on the same
                    effective date.
                  </li>
                </ul>
              </div>

              {/* RTA Biz Desktop */}
              <div className="cv-sub-project">
                <h4 className="cv-subproject-title">
                  RTA Biz Desktop — Shipping & Logistics Desktop Application
                </h4>
                <ul className="cv-bullets">
                  <li>
                    Developed frontend functionality and fixed UI bugs in an Electron desktop application
                    built with Nuxt.js, Vue.js and Vuetify.
                  </li>
                  <li>
                    Connected desktop screens to the existing RTA Biz backend APIs while keeping the
                    established API contracts unchanged.
                  </li>
                </ul>
              </div>

              {/* RTA Biz / ShipItJa */}
              <div className="cv-sub-project">
                <h4 className="cv-subproject-title">
                  RTA Biz / ShipItJa — Freight & Courier Logistics Platform
                </h4>
                <ul className="cv-bullets">
                  <li>
                    Implemented frontend and backend changes in an existing freight-forwarding and courier
                    logistics platform using Laravel/PHP, Vue.js and MySQL.
                  </li>
                  <li>
                    Extended AI-powered package scanning to support ChatGPT alongside Gemini by implementing
                    backend provider selection and integration, with provider/API credentials configured
                    through environment settings.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Personal Project */}
          <div className="cv-section">
            <div className="cv-section-title-wrap">
              <h2 className="cv-section-heading">PERSONAL PROJECT</h2>
            </div>

            <div className="cv-job-block">
              <div className="cv-job-header">
                <div>
                  <h3 className="cv-job-title">Shop Management System</h3>
                  <span className="cv-company">Personal Project</span>
                </div>
                <span className="cv-date">Tech Stack: MongoDB, Express.js, React, Node.js</span>
              </div>

              <ul className="cv-bullets">
                <li>
                  Developing a shop management application for inventory, billing, purchases, suppliers, and
                  customer management.
                </li>
                <li>
                  Implemented role-based authentication and authorization, product and category management,
                  and inventory stock tracking.
                </li>
                <li>
                  Built purchase and sales workflows with stock updates, payment tracking, and invoice
                  management.
                </li>
                <li>
                  Implemented sales returns, refunds, and supplier ledger features with transaction
                  integrity and financial consistency checks.
                </li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="cv-section">
            <div className="cv-section-title-wrap">
              <h2 className="cv-section-heading">EDUCATION</h2>
            </div>

            <div className="cv-edu-item">
              <div className="cv-edu-header">
                <strong>B.Tech, Computer Engineering</strong> — Marwadi University
                <span className="cv-date">2022–2026 | CGPA: 9.41</span>
              </div>
            </div>

            <div className="cv-edu-item">
              <div className="cv-edu-header">
                <strong>Higher Secondary</strong> — Vidyadhish Vidyasankul
                <span className="cv-date">2020–2022 | 79%</span>
              </div>
            </div>

            <div className="cv-edu-item">
              <div className="cv-edu-header">
                <strong>Matriculation</strong> — Podar International School
                <span className="cv-date">2020 | 76%</span>
              </div>
            </div>
          </div>

          {/* Internships & Certifications */}
          <div className="cv-section">
            <div className="cv-section-title-wrap">
              <h2 className="cv-section-heading">INTERNSHIPS & CERTIFICATIONS</h2>
            </div>

            <div className="cv-cert-line">
              <strong>Internships:</strong> Node.js Internship Preparation — Hackveda Limited &nbsp;|&nbsp;
              NestJS and Next.js Internship — Rock4Technologies
            </div>

            <div className="cv-cert-line">
              <strong>Certifications:</strong> Android Developer Course &nbsp;|&nbsp; Getting Started with
              Enterprise-grade AI — IBM &nbsp;|&nbsp; Flutter for Complete Beginners — freeCodeCamp
            </div>
          </div>
        </div>
      )}

      {/* PDF View */}
      {viewMode === "pdf" && (
        <div className="resume-container">
          <iframe
            src="/Yashvi_Shah_Resume.pdf"
            title="Yashvi Shah Resume"
            width="100%"
            height="850px"
            className="resume-iframe"
          />
        </div>
      )}
    </section>
  );
};

export default Resume;
