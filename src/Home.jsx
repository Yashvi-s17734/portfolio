// Home.js
import React from "react";
import profileImg from "./assets/profile.png";
import { FaPaperPlane } from "react-icons/fa";

function Home() {
  return (
    <>
      <main className="hero">
        <div className="hero-text">
          <p className="available">
            Currently Available For Freelance
            <br />
            <span>
              <FaPaperPlane /> Worldwide
            </span>
          </p>
          <h2>
            Hi <span className="wave">👋</span> I'm Yashvi Shah
          </h2>

          <h1>
            A <span className="highlight">Creative</span> App and Web Developer
          </h1>
          <p className="subtext">
            "As a Flutter and MERN Stack developer, I use a range of tools and
            techniques to craft seamless mobile and web experiences."
          </p>
          <button className="green-btn">Get in touch →</button>
        </div>
        <div className="hero-image">
          <img src={profileImg} alt="Nataliya" />
        </div>
      </main>

      <section className="introduction-section">
        <h1 className="intro-heading">
          <span className="white-text">LET ME </span>
          <span className="theme-green">INTRODUCE</span>
          <span className="white-text"> MYSELF</span>
        </h1>

        <div className="intro-content">
          <p className="intro-text">
            I'm <span className="theme-green">Yashvi Shah</span>, "I'm a
            passionate Flutter and MERN Stack Developer based in Rajkot,
            Gujarat, dedicated to building modern, scalable mobile and web
            applications. With a keen eye for design and a strong grasp of both
            frontend and backend technologies, I strive to create seamless
            digital experiences that combine performance with aesthetic appeal."
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
