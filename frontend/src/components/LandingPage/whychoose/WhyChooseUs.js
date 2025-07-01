import React from 'react';
import './style.css';

import home from '../../../asset/icons/home.svg';
import paintbrush from '../../../asset/icons/paintbrush-2.svg';
import dollar from '../../../asset/icons/dollar.svg';
import w1 from '../../../asset/Images/w1.svg';
import w2 from '../../../asset/Images/w2.svg';
import w3 from '../../../asset/Images/w3.svg';


function WhyChooseUs() {
  return (
    <section className="choose-section" id="why-choose-us">
      <div className="choose-container">
        <h2 className="choose-title">Why Choose Us?</h2>
        <div className="choose-grid">
          <div className="choose-card">
            <img src={home} alt="Expert Guidance Icon" />
            <h4>Potential ROI</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur elementum, nisl nunc fermentum ipsum, a posuere eros nunc a sapien. Sed nec justo eget felis facilisis fermentum. Donec volutpat at augue a tincidunt.
            </p>
          </div>

          <div className="choose-card">
            <img src={paintbrush} alt="Dedicated Support Icon" />
            <h4>Dedsign</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur elementum, nisl nunc fermentum ipsum, a posuere eros nunc a sapien. Sed nec justo eget felis facilisis fermentum. Donec volutpat at augue a tincidunt.
            </p>
          </div>

          <div className="choose-card">
            <img src={dollar} alt="Proven Results Icon" />
            <h4>Marketing</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur elementum, nisl nunc fermentum ipsum, a posuere eros nunc a sapien. Sed nec justo eget felis facilisis fermentum. Donec volutpat at augue a tincidunt.
            </p>
          </div>
          <div className="choose-bottom-images">
            <img src={w1} alt="Visual 1" className="ladder-img img-1" />
            <img src={w2} alt="Visual 2" className="ladder-img img-2" />
            <img src={w3} alt="Visual 3" className="ladder-img img-3" />
          </div>


        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
