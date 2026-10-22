import React, { useEffect } from "react";
import {
  FaGraduationCap,
  FaCertificate,
  FaAward,
  FaCalendarAlt,
  FaUniversity,
  FaSchool,
  FaCheckCircle,
  FaLaptopCode,
} from "react-icons/fa";
import { SiNestjs, SiNextdotjs, SiNodedotjs, SiAndroid, SiFreecodecamp, SiGoogle } from "react-icons/si";

const educationList = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "Marwadi University",
    period: "2022 – 2026",
    score: "CGPA: 9.41 / 10.0",
    badge: "Top Academic Performer",
    icon: <FaUniversity />,
    details:
      "Core coursework in Data Structures, Algorithms, Database Management Systems, Object-Oriented Software Design, Operating Systems, and Cloud Architectures.",
  },
  {
    degree: "Higher Secondary Certificate (HSC - 12th)",
    institution: "Vidyadhish Vidyasankul",
    period: "2020 – 2022",
    score: "79%",
    badge: "Science & Mathematics",
    icon: <FaSchool />,
    details: "Specialized in Pure Sciences, Mathematics, and Computer Science fundamentals.",
  },
  {
    degree: "Secondary School Certificate (SSC - 10th)",
    institution: "Podar International School",
    period: "2020",
    score: "76%",
    badge: "CBSE Curriculum",
    icon: <FaSchool />,
    details: "Foundational academic curriculum with focus on analytical problem solving.",
  },
];

const internships = [
  {
    role: "NestJS and Next.js Internship",
    organization: "Rock4Technologies",
    tags: ["NestJS", "Next.js", "TypeScript", "Modern Web Architecture"],
    description:
      "Engineered backend microservices and modern SSR/SSG web interfaces utilizing NestJS dependency injection, TypeScript decorators, and Next.js routing patterns.",
    icon: <SiNestjs />,
  },
  {
    role: "Node.js Internship Preparation",
    organization: "Hackveda Limited",
    tags: ["Node.js", "Express.js", "REST APIs", "Async Architecture"],
    description:
      "Comprehensive training in server-side JavaScript, event loops, RESTful endpoint development, middleware composition, and asynchronous stream handling.",
    icon: <SiNodedotjs />,
  },
];

const certifications = [
  {
    title: "Getting Started with Enterprise-grade AI",
    issuer: "IBM",
    category: "Artificial Intelligence & Cloud",
    icon: <FaAward />,
    badgeColor: "#00ff88",
  },
  {
    title: "Flutter for Complete Beginners",
    issuer: "freeCodeCamp",
    category: "Mobile Application Development",
    icon: <SiFreecodecamp />,
    badgeColor: "#00d2ff",
  },
  {
    title: "Android Developer Course",
    issuer: "Certified Development Program",
    category: "Mobile Native Development",
    icon: <SiAndroid />,
    badgeColor: "#3ddc84",
  },
];

const Education = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="education-page fade-in-section">
      <div className="section-header">
        <span className="section-badge">
          <FaGraduationCap /> Qualifications & Training
        </span>
        <h1 className="section-title">
          Education & <span className="theme-green">Credentials</span>
        </h1>
        <p className="section-subtitle">
          Academic excellence, specialized engineering internships, and verified industry certifications.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="credential-block">
        <div className="block-title-row">
          <div className="block-title-icon">
            <FaGraduationCap />
          </div>
          <h2>Academic Background</h2>
        </div>

        <div className="education-timeline-grid">
          {educationList.map((edu, idx) => (
            <div className="edu-card" key={idx}>
              <div className="edu-card-header">
                <div className="edu-icon-wrap">{edu.icon}</div>
                <div className="edu-card-meta">
                  <span className="edu-badge">{edu.badge}</span>
                  <span className="edu-period">
                    <FaCalendarAlt /> {edu.period}
                  </span>
                </div>
              </div>

              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>

              <div className="edu-score-pill">
                <span>Result:</span>
                <strong>{edu.score}</strong>
              </div>

              <p className="edu-desc">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Internships Section */}
      <div className="credential-block">
        <div className="block-title-row">
          <div className="block-title-icon">
            <FaLaptopCode />
          </div>
          <h2>Engineering Internships</h2>
        </div>

        <div className="internship-grid">
          {internships.map((intern, idx) => (
            <div className="intern-card" key={idx}>
              <div className="intern-card-top">
                <div className="intern-icon-box">{intern.icon}</div>
                <div>
                  <h3 className="intern-role">{intern.role}</h3>
                  <h4 className="intern-org">{intern.organization}</h4>
                </div>
              </div>

              <p className="intern-desc">{intern.description}</p>

              <div className="intern-tags">
                {intern.tags.map((t, tIdx) => (
                  <span className="tag-chip" key={tIdx}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="credential-block">
        <div className="block-title-row">
          <div className="block-title-icon">
            <FaCertificate />
          </div>
          <h2>Professional Certifications</h2>
        </div>

        <div className="cert-grid">
          {certifications.map((cert, idx) => (
            <div className="cert-card" key={idx}>
              <div className="cert-badge-icon">{cert.icon}</div>
              <div className="cert-info">
                <span className="cert-category">{cert.category}</span>
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer">
                  <FaCheckCircle className="verified-icon" /> Issued by <strong>{cert.issuer}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
