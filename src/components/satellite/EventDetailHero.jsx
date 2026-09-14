import React from 'react';
import { Link } from 'react-router-dom';

const EventDetailHero = ({ event }) => {
  return (
    <section className="event-detail-hero">
      <div className="container event-detail-header-content">
        <div className="section-label" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          <span className="dot bg-accent-solid" style={{ width: '8px', height: '8px', display: 'inline-block' }}></span>
          <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>
            / <Link to="/satellite-events" style={{ color: 'inherit', textDecoration: 'none' }}>SATELLITE EVENTS</Link>
          </span>
        </div>

        <div className="event-detail-badges">
          <span className="badge-type" style={{ border: '1px solid var(--border-line-strong)', padding: '0.4rem 0.75rem', fontFamily: "'Roboto Mono', monospace", fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {event.type}
          </span>
          <span className="badge-price" style={{ border: '1px solid var(--border-line-strong)', padding: '0.4rem 0.75rem', fontFamily: "'Roboto Mono', monospace", fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', backgroundColor: 'transparent', color: 'var(--text-white)' }}>
            {event.price}
          </span>
        </div>

        <h1 className="event-detail-title">{event.title}</h1>
        <p className="event-detail-desc">{event.description}</p>
      </div>

      <div className="container" style={{ paddingBottom: '3.5rem' }}>
        <div className="event-hero-image-wrapper">
          <img src={event.image} alt={event.title} className="event-hero-img" />
        </div>
      </div>
      
      <div style={{ height: '1px', width: '100%', background: 'var(--bg-gradient-brand)' }}></div>
    </section>
  );
};

export default EventDetailHero;
