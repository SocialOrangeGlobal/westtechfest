import React from 'react';
import { Link } from 'react-router-dom';

const SatelliteList = ({ events, totalEvents }) => {
  return (
    <section className="satellite-list-section">
      <div className="container">
        
        {events.length === 0 ? (
          <div className="no-results">No events match your criteria.</div>
        ) : (
          <div className="event-list">
            {events.map((event, index) => {
              const numStr = (index + 1).toString().padStart(2, '0');
              
              return (
                <Link to={`/satellite-events/${event.slug}`} key={event.id} className="event-list-item" style={{display: 'flex', textDecoration: 'none', color: 'inherit'}}>
                  <div className="event-list-num">{numStr}</div>
                  
                  <img src={event.image} alt={event.title} className="event-list-image" />
                  
                  <div className="event-list-content">
                    <div className="event-list-main">
                      <h3>{event.title}</h3>
                      {event.description && <p>{event.description}</p>}
                      <div className="event-list-host">HOSTED BY {event.host}</div>
                    </div>
                    
                    <div className="event-list-meta">
                      <div className="event-list-datetime">
                        <span className="event-list-date">{event.date}</span>
                        <span className="event-list-venue">{event.venue}</span>
                      </div>
                      
                      <div className="event-list-badges">
                        <span className="badge-type">{event.type}</span>
                        <span className={`badge-price ${event.isFree ? 'free' : ''}`}>
                          {event.price}
                        </span>
                        <span className="event-list-link">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        <div className="list-pagination">
          SHOWING {events.length} OF {totalEvents} - UPDATED WEEKLY
        </div>
      </div>
    </section>
  );
};

export default SatelliteList;
