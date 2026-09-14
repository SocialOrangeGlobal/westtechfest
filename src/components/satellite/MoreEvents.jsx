import React from 'react';
import { Link } from 'react-router-dom';
import { eventsData } from '../../data/eventsData';

const MoreEvents = ({ currentSlug }) => {
  // Get up to 3 other events
  const moreEvents = eventsData.filter(e => e.slug !== currentSlug).slice(0, 3);

  return (
    <section className="more-events-section">
      <div className="container">
        <h2>More satellite events.</h2>
        <div className="more-events-grid">
          {moreEvents.map(event => (
            <Link to={`/satellite-events/${event.slug}`} key={event.id} className="more-event-card">
              <span className="more-event-meta">{event.type} &middot; {event.isFree ? 'FREE' : event.price}</span>
              <span className="more-event-title">{event.title}</span>
              <span className="more-event-meta" style={{ marginTop: '0.25rem', color: 'var(--text-secondary-on-light)' }}>
                {event.date.split(' 2026')[0]}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreEvents;
