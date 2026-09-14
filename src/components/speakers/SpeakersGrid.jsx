import React from 'react';
import { Link } from 'react-router-dom';

const SpeakersGrid = ({ visibleSpeakers }) => {
  if (visibleSpeakers.length === 0) {
    return (
      <div className="speakers-grid-empty">
        No speakers found matching your criteria.
      </div>
    );
  }

  return (
    <div className="speakers-grid">
      {visibleSpeakers.map((speaker) => (
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
  );
};

export default SpeakersGrid;
