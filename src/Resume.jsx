import React, { useEffect } from "react";
import "./App.css"; // Assuming all styles are here

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="resume-section fade-in-section">
      <h1 className="resume-title">My Resume</h1>

      <div className="resume-container">
        <iframe
          src="/Yashvi_Resume.pdf"
          title="Yashvi Resume"
          width="100%"
          height="750px"
          style={{
            border: "2px solid #00ff88",
            borderRadius: "10px",
            backgroundColor: "#111",
          }}
        />

        <a href="/Yashvi_Resume.pdf" download className="download-resume-btn">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
