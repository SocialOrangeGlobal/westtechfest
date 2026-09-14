import React from 'react';

const SpeakerDetailEvents = ({ speaker }) => {
  return (
    <section className="speaker-detail-events">
      <div className="container">
        <div className="speaker-detail-events-header">
          <span className="speaker-detail-events-title">01 / SPEAKING AT</span>
          <span className="speaker-detail-events-count">1 EVENT</span>
        </div>
        
        <div className="speaker-detail-event-item">
          <div className="speaker-detail-event-info">
            <h3>{speaker.category || "West Tech Main"}</h3>
            <span className="speaker-detail-event-location">PAN PACIFIC PERTH</span>
          </div>
          <div className="speaker-detail-event-action">
            <span className="speaker-detail-event-date">MON, 7 DEC 2026</span>
            <span className="speaker-detail-event-arrow">&rarr;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerDetailEvents;
