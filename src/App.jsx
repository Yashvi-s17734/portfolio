import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { NavLink } from "react-router-dom";

import { FaPaperPlane, FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";
import Skillset from "./Skillset";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">PORTF//O</div>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
              >
                SKILLS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
              >
                RESUME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
              >
                PROJECTS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="talk-btn">
          <FaPaperPlane /> Let's Talk
        </button>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skillset />} />
      </Routes>

      <footer className="bottom-footer">
        <div className="footer-icons">
          <a
            href="https://github.com/Yashvi-s17734"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yashvi-shah-11963226a?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/yashvi17_10/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode />
          </a>
        </div>
        <p className="footer-text">
          © {new Date().getFullYear()} Nataliya Rossi
        </p>
      </footer>
    </div>
  );
}

export default App;
