import React from 'react';

const EventDetailContent = ({ event }) => {
  return (
    <section className="event-detail-content-section">
      <div className="container event-content-grid">
        <div className="event-main-content">
          <h2 className="event-section-title">ABOUT THIS EVENT</h2>
          <div 
            className="event-rich-text"
            dangerouslySetInnerHTML={{ __html: event.aboutText }}
          />
        </div>

        <aside>
          <div className="event-sidebar-sticky">
            <ul className="event-info-list">
              <li className="event-info-item">
                <svg className="info-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <span>{event.date}</span>
              </li>
              <li className="event-info-item">
                <svg className="info-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span>{event.time}</span>
              </li>
              <li className="event-info-item">
                <svg className="info-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>{event.venue}</span>
              </li>
              <li className="event-info-item">
                <svg className="info-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <span>Hosted by {event.host}</span>
              </li>
              <li className="event-info-item">
                <svg className="info-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                <span>{event.type} &middot; {event.price}</span>
              </li>
              {event.capacity && (
                <li className="event-info-item">
                  <svg className="info-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  <span>{event.capacity}</span>
                </li>
              )}
            </ul>

            <div className="sidebar-actions">
              {!event.hideRegisterButton && (
                <a href="#" className="btn-primary" style={{ width: '100%', padding: '1rem' }}>
                  REGISTER ↗
                </a>
              )}
              <a href="#" className="btn-sidebar-outline" style={{ width: '100%', padding: '1rem' }}>
                ADD TO CALENDAR
              </a>
            </div>

            <p className="sidebar-disclaimer">
              Satellite events are run independently by the community. Details may change — check the registration link.
            </p>

            {event.mapVenue && (
              <div className="event-map-box" style={{ marginTop: '1rem', border: '1px solid var(--border-line-light)' }}>
                <div style={{ backgroundColor: '#000', color: '#fff', padding: '0.5rem 1rem', fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-solid)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  EVENT VENUE — {event.mapVenue}
                </div>
                {event.mapIframe ? (
                  <iframe src={event.mapIframe} width="100%" height="250" style={{ border: 0, display: 'block' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                ) : (
                  <div style={{ width: '100%', height: '150px', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                  </div>
                )}
              </div>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default EventDetailContent;
