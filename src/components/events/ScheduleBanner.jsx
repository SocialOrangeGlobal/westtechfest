import React from 'react';

const ScheduleBanner = () => {
  return (
    <section className="schedule-banner-section">
      <div className="container">
        <div className="schedule-banner">
          <div className="schedule-banner-text">
            <h3>Plan your week, session by session.</h3>
            <p className="schedule-meta">
              EVERY SESSION, SPEAKER AND VENUE · UPDATED WEEKLY
            </p>
          </div>
          <a href="#" className="btn-primary">
            VIEW THE FULL SCHEDULE <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleBanner;
