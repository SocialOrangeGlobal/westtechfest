import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import './SatelliteEvents.css';

const SatelliteEvents = () => {
  return (
    <section className="satellite-events">
      <div className="container se-container">
        <div className="se-content">
          <span className="se-tag">03 / Satellite Events</span>
          <h2 className="se-title">A city-wide program of satellite events, run by our ecosystem.</h2>
          <p className="se-desc">
            Meetups, hackathons, demo nights and dinners across the city during festival week, hosted by the people who make this ecosystem move. Most are low cost or free.
          </p>
        </div>
        
        <div className="se-links">
          <a href="/satellite-events" className="se-link-item">
            <div className="se-link-text">
              <span className="se-link-title">Browse satellite events</span>
              <span className="se-link-desc">See what’s on across the week</span>
            </div>
            <span className="se-icon-wrap">
              <ArrowRight size={16} />
            </span>
          </a>
          
          <a href="/satellite-events/submit" className="se-link-item">
            <div className="se-link-text">
              <span className="se-link-title">Submit your event</span>
              <span className="se-link-desc">Host something during festival week</span>
            </div>
            <span className="se-icon-wrap">
              <Plus size={16} />
            </span>
          </a>
          
          <div className="se-footer">
            <span className="dot bg-accent-solid" style={{width: 6, height: 6}}></span>
            <span className="se-footer-text">Submissions close 16 Oct 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SatelliteEvents;
