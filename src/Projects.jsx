import React, { useEffect } from "react";
import {
  WiDaySunny, // Weather
} from "react-icons/wi";
import { FaStickyNote, FaMoneyBillWave, FaBookOpen, FaUserGraduate } from "react-icons/fa";

const projects = [
  {
    title: "Weather App",
    description: "A weather forecasting app using OpenWeatherMap API.",
    icon: <WiDaySunny className="project-icon" />,
    link: "https://your-weather-app-link.com",
  },
  {
    title: "Notes App",
    description: "Create, update, and manage notes in real-time.",
    icon: <FaStickyNote className="project-icon" />,
    link: "https://your-notes-app-link.com",
  },
  {
    title: "Currency Converter",
    description: "Real-time currency conversion with API integration.",
    icon: <FaMoneyBillWave className="project-icon" />,
    link: "https://your-currency-converter.com",
  },
  {
    title: "Recipe Sharing",
    description: "Recipe Sharing Platform with MERN stack.",
    icon: <FaBookOpen className="project-icon" />,
    link: "https://github.com/Yashvi-s17734/AI-Powered-Smart-Kitchen-Waste-Minimizer-for-Restaurants",
  },
  {
    title: "Student Tracker",
    description: "Tracks Student Activity and Performance.",
    icon: <FaUserGraduate className="project-icon" />,
    link: "https://github.com/Yashvi-s17734/student_2",
  },
];

const Project = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section className="projects-section fade-in-section">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card animate" key={index}>
            <div className="project-icon-wrapper">{project.icon}</div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "0.8rem",
                  color: "#00ff88",
                  textDecoration: "underline",
                }}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
