import React, { useState } from 'react';
import axios from 'axios';
import './Foot.css';
import logo from '../../../asset/Images/logo.svg';
import FacebookIcon from '../../../asset/icons/facebook.svg';
import InstagramIcon from '../../../asset/icons/instagram.svg';
import LinkedinIcon from '../../../asset/icons/Linkedin.svg';
import TwitterIcon from '../../../asset/icons/twitter.svg';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/newsletter', { email });
      alert('Subscribed successfully!');
      setEmail('');
    } catch (err) {
      alert('Already subscribed or something went wrong.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <ul className="footer-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <form onSubmit={handleSubscribe} className="newsletter-form">
          <label>Subscribe to:</label>
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="footer-bottom">
        <p>All Rights Reserved © {new Date().getFullYear()}</p>

        <div className="footer-brand">
          <img src={logo} alt="Logo" />
        </div>

        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinIcon} alt="LinkedIn" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={TwitterIcon} alt="Twitter" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
