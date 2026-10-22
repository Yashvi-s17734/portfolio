import React, { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaCode,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-page fade-in-section">
      <div className="section-header">
        <span className="section-badge">
          <FaPaperPlane /> Direct Communication
        </span>
        <h1 className="section-title">
          Get In <span className="theme-green">Touch</span>
        </h1>
        <p className="section-subtitle">
          Interested in full-stack engineering collaborations, developer opportunities, or technical inquiries? Reach out directly.
        </p>
      </div>

      <div className="contact-wrapper">
        {/* Contact Info Cards */}
        <div className="contact-cards-column">
          <div className="contact-info-card">
            <div className="contact-icon-box">
              <FaEnvelope />
            </div>
            <div className="contact-card-text">
              <span className="contact-card-label">Email Address</span>
              <a href="mailto:yashvipshah80@gmail.com" className="contact-card-link">
                yashvipshah80@gmail.com
              </a>
              <span className="contact-card-hint">Click to send an email directly</span>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon-box">
              <FaPhoneAlt />
            </div>
            <div className="contact-card-text">
              <span className="contact-card-label">Phone & WhatsApp</span>
              <a href="tel:+919328337767" className="contact-card-link">
                +91 9328337767
              </a>
              <span className="contact-card-hint">Available for calls and messages</span>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon-box">
              <FaMapMarkerAlt />
            </div>
            <div className="contact-card-text">
              <span className="contact-card-label">Current Location</span>
              <p className="contact-location-text">Sihor, Bhavnagar, Gujarat, India</p>
              <span className="contact-card-hint">Available for remote & hybrid roles</span>
            </div>
          </div>

          {/* Social Links Box */}
          <div className="contact-social-box">
            <h4 className="social-box-title">Connect on Professional Profiles</h4>
            <div className="social-chips">
              <a
                href="https://github.com/Yashvi-s17734"
                target="_blank"
                rel="noopener noreferrer"
                className="social-chip-link"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/yashvi-shah-11963226a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="social-chip-link"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/yashvi17_10/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-chip-link"
              >
                <FaCode /> LeetCode
              </a>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-column">
          <div className="form-glass-card">
            <h3 className="form-card-title">Send a Direct Message</h3>
            <p className="form-card-sub">
              Leave your details below and I'll get back to you promptly.
            </p>

            {submitted ? (
              <div className="submission-success-card">
                <FaCheckCircle className="success-icon" />
                <h4>Message Received!</h4>
                <p>
                  Thank you for reaching out, <strong>{formData.name}</strong>. I will reply to{" "}
                  <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="outline-btn"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="modern-contact-form">
                <div className="input-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email">Your Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. name@company.com"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="subject">Subject / Inquiry</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Job Opportunity / Project Discussion"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share the details of your inquiry..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="green-btn submit-btn">
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
