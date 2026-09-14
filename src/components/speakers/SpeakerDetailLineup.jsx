import React from 'react';
import { Link } from 'react-router-dom';

const SpeakerDetailLineup = ({ speakers }) => {
  return (
    <section className="speaker-detail-lineup">
      <div className="container">
        <div className="speaker-detail-lineup-header">
          <h2>Also on the line-up.</h2>
          <Link to="/speakers" className="all-speakers-link">
            ALL SPEAKERS &rarr;
          </Link>
        </div>
        
        <div className="speakers-grid">
          {speakers.map((speaker) => (
            <Link to={`/speakers/${speaker.slug}`} key={speaker.id} className="speaker-card group">
              <div className="speaker-image-wrapper">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="speaker-image"
                  loading="lazy"
                />
              </div>
              <div className="speaker-info">
                <h3 className="speaker-name">
                  {speaker.name}
                </h3>
                <span className="speaker-role">
                  {speaker.role}
                </span>
                {speaker.category && (
                  <span className="speaker-category">
                    {speaker.category}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakerDetailLineup;
