import React from 'react';

const ICON_OVERARCHING = 'https://www.westtechfest.com.au/brand/icons/WTF26_Wordmark_Overarching_Icon.svg';
const ICON_WOMEN = 'https://www.westtechfest.com.au/brand/icons/WTF26_Wordmark_Women_Icon.svg';
const ICON_MAIN = 'https://www.westtechfest.com.au/brand/icons/WTF26_Wordmark_Main_Icon.svg';
const ICON_WADJEMUP = 'https://www.westtechfest.com.au/brand/icons/WTF26_Wordmark_Wadjemup_Icon.svg';

const LOGO_WOMEN_H = 'https://www.westtechfest.com.au/brand/logos/WTF26_Wordmark_Women_Horizontal.svg';
const LOGO_MAIN_H = 'https://www.westtechfest.com.au/brand/logos/WTF26_Wordmark_Main_Horizontal.svg';
const LOGO_WADJEMUP_H = 'https://www.westtechfest.com.au/brand/logos/WTF26_Wordmark_Wadjemup_Horizontal.svg';

const events = [
  {
    number: '01',
    date: 'MON, 7 DEC',
    title: null,
    logo: LOGO_WOMEN_H,
    logoAlt: 'West Tech Women',
    description: "Celebrating and connecting the women shaping WA's technology ecosystem.",
    venue: 'PAN PACIFIC PERTH',
    theme: 'dark',
    icon: ICON_WOMEN,
    accentColor: '#2dd4bf',
  },
  {
    number: '02',
    date: 'MON, 7 DEC',
    title: 'First Nations House',
    logo: null,
    description: 'First Nations founders, creators and leaders building with technology.',
    venue: 'THE KINGSMAN, PERTH',
    theme: 'light',
    icon: ICON_OVERARCHING,
    accentColor: '#f15a32',
  },
  {
    number: '03',
    date: 'TUE, 8 DEC',
    title: null,
    logo: LOGO_MAIN_H,
    logoAlt: 'West Tech Main',
    description: "The flagship event – global keynotes meet Western Australia's boldest ideas.",
    venue: 'PERTH CONVENTION CENTRE',
    theme: 'dark',
    full: true,
    icon: ICON_MAIN,
    accentColor: '#a855f7',
  },
  {
    number: '04',
    date: 'WED, 9 DEC',
    title: 'Freo Startup Fest',
    logo: null,
    description: "Fremantle's grassroots festival of founders, startups and side projects.",
    venue: 'FREO SOCIAL, FREMANTLE',
    theme: 'light',
    icon: ICON_OVERARCHING,
    accentColor: '#f15a32',
  },
  {
    number: '05',
    date: 'WED, 9 DEC',
    title: 'Corporate Innovation Summit',
    logo: null,
    description: "Where WA's Corporate powerhouses meet emerging technology head-on.",
    venue: 'AIM WA, FLOREAT',
    theme: 'light',
    icon: ICON_OVERARCHING,
    accentColor: '#f15a32',
  },
  {
    number: '06',
    date: 'THU, 10 DEC',
    title: null,
    logo: LOGO_WADJEMUP_H,
    logoAlt: 'West Tech Wadjemup',
    description: 'Bringing together purpose-driven entrepreneurs and investors advancing sustainability, green, clean and ocean tech, to Wadjemup/Rottnest Island.',
    venue: "PINKY'S, ROTTNEST ISLAND",
    theme: 'dark',
    full: true,
    icon: ICON_WADJEMUP,
    accentColor: '#38bdf8',
  },
];

const HeadlineEvents = () => {
  return (
    <section className="headline-events">
      <div className="container">
        <div className="section-header">
          <div className="section-label">
            <span className="num">02</span> / HEADLINE EVENTS
          </div>
          <div className="section-meta">ALL INCLUDED IN THE FESTIVAL PASS</div>
        </div>

        <h2>Six rooms that anchor the week.</h2>

        <div className="events-grid">
          {events.map((ev, i) => (
            <div
              key={i}
              className={`event-card event-card--${ev.theme}${ev.full ? ' event-card--full' : ''}`}
            >
              <div className="event-card-header">
                <div className="event-card-number" style={{ color: ev.accentColor }}>
                  <img src={ev.icon} alt="" className="event-icon" />
                  {ev.number}
                </div>
                <div className="event-card-date">{ev.date}</div>
              </div>

              <div className="event-card-body">
                {ev.logo ? (
                  <img src={ev.logo} alt={ev.logoAlt} className="event-logo" />
                ) : (
                  <h3>{ev.title}</h3>
                )}
                <p>{ev.description}</p>
              </div>

              <div className="event-card-footer">
                <span className="venue">{ev.venue}</span>
                <a href="#" className="event-link">
                  EVENT DETAILS <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Plan Your Week Banner */}
        <div className="plan-week-banner">
          <div className="banner-content">
            <img src={ICON_OVERARCHING} alt="" className="banner-icon" />
            <div className="banner-text">
              <div className="label">PLAN YOUR WEEK</div>
              <p>
                Tap <a href="#">Add to my plan</a> on any event to build your own day-by-day itinerary.
              </p>
            </div>
          </div>
          <a href="#" className="btn-secondary" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
            ⇒ VIEW MY PLAN
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeadlineEvents;
