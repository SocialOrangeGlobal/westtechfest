import React from 'react';

const SpeakersBottomBanner = () => {
  return (
    <section className="speakers-bottom-banner">
      <div className="container">
        <div className="banner-content">
          <div className="banner-text-wrapper">
            <span className="hero-orange-square banner-square" aria-hidden="true"></span>
            <h3>
              More speakers to be announced — watch this space as the full line-up takes shape.
            </h3>
          </div>
          <a href="#" className="banner-btn">
            GET LINE-UP UPDATES &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpeakersBottomBanner;
