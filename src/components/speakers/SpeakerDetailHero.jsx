import React from 'react';

const SpeakerDetailHero = ({ speaker }) => {
  return (
    <section className="speaker-detail-hero">
      <div className="container">
        <div className="speaker-detail-hero-content">
          <div className="speaker-detail-hero-image-wrapper">
            <img src={speaker.image} alt={speaker.name} className="speaker-detail-hero-image" />
          </div>
          
          <div className="speaker-detail-hero-info">
            <div className="speaker-detail-hero-label">
              <span className="hero-orange-square"></span>
              / SPEAKERS / {speaker.name.toUpperCase()}
            </div>
            
            <h1 className="speaker-detail-hero-name">
              {speaker.name}
            </h1>
            
            <p className="speaker-detail-hero-role">
              {speaker.role}
            </p>
          </div>
        </div>
      </div>
      <div className="speaker-detail-hero-bottom-border"></div>
    </section>
  );
};

export default SpeakerDetailHero;
