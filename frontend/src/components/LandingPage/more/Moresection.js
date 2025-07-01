import React from 'react';
import './style.css';
import bgImage from '../../../asset/Images/footer.svg'; // Correct SVG path

function MoreSection() {
  return (
    <section
      className="more-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="more-content">
        <h1>
          Learn more about our listing process,<br />
          as well as our additional staging and design work.
        </h1>
        <button className="more-btn">LEARN MORE</button>
      </div>
    </section>
  );
}

export default MoreSection;
