import React from 'react';

const weekDays = [
  {
    day: 'MON',
    date: '07',
    month: 'DEC',
    events: 'West Tech Women + First Nations House',
  },
  {
    day: 'TUE',
    date: '08',
    month: 'DEC',
    events: 'West Tech Main',
  },
  {
    day: 'WED',
    date: '09',
    month: 'DEC',
    events: 'Freo Startup Fest + Corporate Innovation Summit',
  },
  {
    day: 'THU',
    date: '10',
    month: 'DEC',
    events: 'West Tech Wadjemup',
  },
  {
    day: 'FRI',
    date: '11',
    month: 'DEC',
    events: 'Satellite events',
    muted: true,
  },
];

const TheWeek = () => {
  return (
    <section className="the-week">
      <div className="container">
        <div className="section-header">
          <div className="section-label">
            <span className="num">01</span> / THE WEEK
          </div>
          <div className="section-meta">1 WEEK · 7 – 11 DEC</div>
        </div>

        <div className="week-grid">
          {weekDays.map((d, i) => (
            <div className="week-day" key={i}>
              <div className="day-label">{d.day}</div>
              <div className="day-number">
                {d.date}
                <span className="month">{d.month}</span>
              </div>
              <div className="day-events">{d.events}</div>
            </div>
          ))}
        </div>

        <div className="week-footer">
          <p>
            Planning a multi-day trip? Map your week before you book{' '}
            <a href="#">travel</a> and <a href="#">accommodation</a>.
          </p>
          <div className="week-actions">
            <a href="#" className="btn-primary-on-light">
              PLAN YOUR WEEK →
            </a>
            <a href="#" className="btn-secondary-on-light">
              📅 ADD WEEK TO CALENDAR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheWeek;
