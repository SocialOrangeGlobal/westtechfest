import React from 'react';

const SatelliteHero = () => {
  return (
    <section className="satellite-page-hero">
      <div className="container">
        <div className="section-label">
          <span className="dot bg-accent-solid"></span>
          <span>/ SATELLITE EVENTS</span>
        </div>

        <h1>Satellite events.</h1>

        <div className="hero-details">
          <p className="hero-description">
            Community-run events across festival week — meetups, hackathons, demo nights
            and dinners hosted by the people who make WA's ecosystem move. Most are low
            cost or free.
          </p>
          <span className="hero-updated">UPDATED WEEKLY</span>
        </div>
      </div>
    </section>
  );
};

export default SatelliteHero;
