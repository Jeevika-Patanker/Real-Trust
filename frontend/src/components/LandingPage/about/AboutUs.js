import React, { useState } from 'react';
import './style.css';

function AboutUs() {
  const [showTeam, setShowTeam] = useState(false);

  const handleToggle = () => {
    setShowTeam(!showTeam);
  };

  return (
    <>

      <section className="about-section" id="about">
        <div className="about-container">
          <h2>About Us</h2>
          <p>
            We are a passionate team of real estate consultants, designers, and marketers dedicated to helping our clients succeed. Our goal is to simplify your property journey and help you close better, faster, and smarter deals.
          </p>
          <button className="about-button" onClick={handleToggle}>
            {showTeam ? 'Hide Team' : 'Learn More'}
          </button>

          {showTeam && (
            <div className="about-highlight-box">
              <h3>Meet Our Core Team</h3>
              <p>
                United by vision, driven by passion. Our leadership brings experience and innovation to every deal.
              </p>

              <div className="about-team">
                <div className="team-member">
                  <img src="/images/about1.jpg" alt="Team Member 1" />
                  <h4>Priya Kapoor</h4>
                  <p>Lead Consultant</p>
                </div>
                <div className="team-member">
                  <img src="/images/about2.jpg" alt="Team Member 2" />
                  <h4>Arjun Mehta</h4>
                  <p>Creative Director</p>
                </div>
                <div className="team-member">
                  <img src="/images/about3.jpg" alt="Team Member 3" />
                  <h4>Sana Roy</h4>
                  <p>Marketing Strategist</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default AboutUs;
