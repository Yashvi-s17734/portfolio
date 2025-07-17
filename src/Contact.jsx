// src/Contact.js
import React from "react";
import "./App.css"; // reuse same theme

function Contact() {
  return (
    <div className="app">
      <section className="contact-section">
        <h1>
          <span className="white-text">GET IN </span>
          <span className="theme-green">TOUCH</span>
          <span className="white-text"> WITH ME</span>
        </h1>
        <p className="contact-subtext">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="6" required></textarea>
          <button className="green-btn">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
