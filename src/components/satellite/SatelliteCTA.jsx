import React from 'react';

const SatelliteCTA = () => {
  return (
    <section className="satellite-cta-section">
      <div className="container satellite-cta-content">
        <div className="satellite-cta-text">
          <h2>
            Running something<br />
            during festival week?<br />
            Put it on the map.
          </h2>
          <p>
            Add your meetup, hackathon, demo night or dinner to the official
            West Tech Fest 2026 program. If it brings the community together,
            we want it listed.
          </p>
          <p>
            For hints and tips on hosting an event check out <a href="#">our host guide</a>.
          </p>
        </div>
        
        <a href="#" className="btn-primary">
          SUBMIT YOUR EVENT <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default SatelliteCTA;
