import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function HeroSection() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contacts', form);
      alert('✅ Message sent successfully!');
      setForm({ fullName: '', email: '', mobile: '', city: '' });
    } catch (error) {
      alert('❌ Failed to send message');
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-left">
          <h1>Consultation, <br /> Design & Marketing</h1>
          <p>Your trusted partner for turning ideas into action.</p>
        </div>

        <div className="hero-right">
          <div className="consult-box">
            <h3>Get a Free Consultation</h3>
            <form className="consult-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={form.mobile}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="city"
                placeholder="Your City"
                value={form.city}
                onChange={handleChange}
                required
              />
              <button type="submit">Get Quote</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
