import React, { useState } from "react";
import { Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import "./App.css";

import {
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaCode,
  FaBars,
  FaTimes,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Home from "./Home";
import Experience from "./Experience";
import Projects from "./Projects";
import Skillset from "./Skillset";
import Education from "./Education";
import Resume from "./Resume";
import Contact from "./Contact";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="app-layout">
      {/* Top Navbar */}
      <header className="navbar">
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Yashvi.dev</span>
          <span className="logo-bracket">/&gt;</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links-list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Action Button & Mobile Hamburger */}
        <div className="header-actions">
          <Link to="/contact" className="talk-btn" onClick={closeMenu}>
            <FaPaperPlane /> <span>Let's Talk</span>
          </Link>

          <button
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <ul className="mobile-links-list">
              <li>
                <NavLink to="/" onClick={closeMenu} className="mobile-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/experience" onClick={closeMenu} className="mobile-link">
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" onClick={closeMenu} className="mobile-link">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/skills" onClick={closeMenu} className="mobile-link">
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink to="/education" onClick={closeMenu} className="mobile-link">
                  Education & Certifications
                </NavLink>
              </li>
              <li>
                <NavLink to="/resume" onClick={closeMenu} className="mobile-link">
                  Resume (CV)
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={closeMenu} className="mobile-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skillset />} />
          <Route path="/education" element={<Education />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Enhanced Footer */}
      <footer className="site-footer">
        <div className="footer-content-grid">
          <div className="footer-col brand-col">
            <div className="brand-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-name">Yashvi.dev</span>
              <span className="logo-bracket">/&gt;</span>
            </div>
            <p className="footer-bio">
              Full-Stack JavaScript Developer specializing in React, Next.js, Node.js,
              PostgreSQL, multi-tenant ERP platforms, and AI API integrations.
            </p>
            <div className="footer-location-tag">
              <FaMapMarkerAlt /> Sihor, Bhavnagar, Gujarat
            </div>
          </div>

          <div className="footer-col links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/education">Education</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Direct Contact</h4>
            <div className="footer-direct-item">
              <FaEnvelope />
              <a href="mailto:yashvipshah80@gmail.com">yashvipshah80@gmail.com</a>
            </div>
            <div className="footer-direct-item">
              <FaPhoneAlt />
              <a href="tel:+919328337767">+91 9328337767</a>
            </div>

            <div className="footer-social-row">
              <a
                href="https://github.com/Yashvi-s17734"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="social-circle"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/yashvi-shah-11963226a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="social-circle"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://leetcode.com/u/yashvi17_10/"
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode"
                className="social-circle"
              >
                <FaCode />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="footer-text">
            © {new Date().getFullYear()} Yashvi Shah. All rights reserved.
          </p>
          <p className="footer-subtext">
            Built with React & Vite • Sihor, Bhavnagar, Gujarat
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
