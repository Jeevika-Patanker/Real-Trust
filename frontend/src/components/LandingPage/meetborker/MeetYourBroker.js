import React from 'react';
import './style.css';

import broker1 from '../../../asset/Images/b1.svg';
import broker2 from '../../../asset/Images/b2.svg';
import broker3 from '../../../asset/Images/b3.svg';

function MeetYourBroker() {
  return (
    <section className="broker-section" id="services">
      <div className="broker-container">
        <div className="broker-text">
          <h2>Not Your Average Realtor</h2>
          <p>
            Real Trust aims to go beyond traditional brokerage by offering
            expert consultation, creative design, and marketing services
            to help you get the best results in today’s market.
          </p>
        </div>

        <div className="broker-images">
          <img src={broker1} alt="Broker 1" />
          <img src={broker2} alt="Broker 2" />
          <img src={broker3} alt="Broker 3" />
        </div>
      </div>
    </section>
  );
}

export default MeetYourBroker;
