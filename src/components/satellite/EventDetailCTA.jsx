import React from 'react';
import { Link } from 'react-router-dom';

const EventDetailCTA = ({ event }) => {
  const hideRegisterButton = event?.hideRegisterButton;
  
  return (
    <section className="event-detail-cta">
      <div className="container">
        {event?.ctaSubtitle && (
          <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.14em', color: 'var(--accent-solid)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            {event.ctaSubtitle}
          </div>
        )}
        
        {event?.ctaTitle ? (
          <h2 dangerouslySetInnerHTML={{ __html: event.ctaTitle }} />
        ) : (
          <h2>See you there.</h2>
        )}
        
        <div className="cta-actions">
          {!hideRegisterButton && (
            <a href="#" className="btn-primary" style={{ padding: '1rem 2.5rem' }}>
              REGISTER NOW ↗
            </a>
          )}
          <Link to="/satellite-events" className="btn-sidebar-outline" style={{ color: 'var(--text-white)', borderColor: 'var(--border-line-strong)', padding: '1rem 2.5rem' }}>
            ALL SATELLITE EVENTS →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventDetailCTA;
