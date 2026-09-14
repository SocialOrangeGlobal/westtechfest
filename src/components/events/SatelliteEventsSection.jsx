import React from 'react';

const SatelliteEventsSection = () => {
  return (
    <section className="satellite-events-section">
      <div className="container">
        <div className="section-label">
          <span className="num">03</span> / SATELLITE EVENTS
        </div>

        <div className="satellite-content">
          <div className="satellite-left">
            <h2>
              A city-wide constellation of events covering everything from deep
              tech to creative industries, satellite events extend the festival
              program into every corner of the ecosystem.
            </h2>

            <p className="satellite-description">
              Meetups, hackathons, demo nights and dinners hosted by the
              community all week. Most are low cost or free, and anyone can{' '}
              <a href="#">submit one</a>.
            </p>
          </div>

          <div className="satellite-right">
            <a href="#" className="btn-primary">
              BROWSE SATELLITE EVENTS <span>→</span>
            </a>
            <a href="#" className="btn-secondary">
              SUBMIT YOUR EVENT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SatelliteEventsSection;
