import React from 'react';

const AboutStats = () => {
  return (
    <section className="about-stats">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <h3 className="stat-value">15</h3>
            <p className="stat-label">YEARS RUNNING</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-value">5,000+</h3>
            <p className="stat-label">ANNUAL ATTENDEES</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-value">80+</h3>
            <p className="stat-label">SPEAKERS A YEAR</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-value">$48M</h3>
            <p className="stat-label">RAISED BY ALUMNI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
