//src/components/Contact.js
import React from 'react';
import '../styles/Contact.css';

// Import SVG icons from the assets folder
import emailIcon from '../assets/email.svg';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-info">
        <a href="mailto:kityan3002@gmail.com" className="contact-link">
          <img src={emailIcon} alt="Email" className="contact-icon" />
          kityan3002@gmail.com
        </a>
      </div>

      <div className="contact-info">
        <a href="https://www.linkedin.com/in/kit-yan-41791b235" target="_blank" rel="noopener noreferrer" className="contact-link">
          <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
          LinkedIn
        </a>
      </div>

      <div className="contact-info">
        <a href="https://github.com/KitYan20" target="_blank" rel="noopener noreferrer" className="contact-link">
          <img src={githubIcon} alt="GitHub" className="contact-icon" />
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Contact;
