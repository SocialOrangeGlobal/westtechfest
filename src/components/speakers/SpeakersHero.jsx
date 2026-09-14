import React from 'react';

const SpeakersHero = () => {
  return (
    <section className="speakers-hero">
      <div className="container speakers-hero-inner">
        <div className="speakers-hero-header">
          <span className="section-label speakers-hero-label">
            <span className="hero-orange-square" aria-hidden="true"></span>
            / SPEAKERS
          </span>
        </div>
        
        <div className="speakers-hero-content">
          <div className="speakers-hero-text">
            <h1>
              The people on stage.
            </h1>
            <p>
              Founders, investors, visionaries and innovators from Western Australia and around the world — speaking across every headline event of West Tech Fest 2026.
            </p>
          </div>
          <div className="speakers-hero-meta">
            <span className="hero-update-label">UPDATED WEEKLY UNTIL 7 DEC</span>
          </div>
        </div>
      </div>
      <div className="speakers-hero-bottom-border"></div>
    </section>
  );
};

export default SpeakersHero;
