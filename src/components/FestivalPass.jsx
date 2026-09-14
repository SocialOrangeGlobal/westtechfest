import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Users } from 'lucide-react';
import './FestivalPass.css';

const events = [
  { id: '01', date: 'MON, 7 DEC', color: '#00d4aa', title: 'West Tech Women', logo: 'https://www.westtechfest.com.au/brand/logos/WTF26_Wordmark_Women_Stacked.svg', desc: 'Celebrating and connecting the women shaping WA’s technology ecosystem.', theme: 'dark' },
  { id: '02', date: 'TUE, 8 DEC', color: '#a855f7', title: 'West Tech Main', logo: 'https://www.westtechfest.com.au/brand/logos/WTF26_Wordmark_Main_Stacked.svg', desc: 'The flagship event - global keynotes meet Western Australia’s boldest ideas.', theme: 'dark' },
  { id: '03', date: 'THU, 10 DEC', color: '#38bdf8', title: 'West Tech Wadjemup', logo: 'https://www.westtechfest.com.au/brand/logos/WTF26_Wordmark_Wadjemup_Stacked.svg', desc: 'Bringing together purpose-driven entrepreneurs and investors advancing sustainability, green, clean and ocean tech, to Wadjmeup/Rottnest Island.', theme: 'dark' },
  { id: '04', date: 'MON, 7 DEC', color: '#ff6a3d', title: 'First Nations House', desc: 'First Nations founders, creators and leaders building with technology.', theme: 'light' },
  { id: '05', date: 'WED, 9 DEC', color: '#ff6a3d', title: 'Freo Startup Fest', desc: 'Fremantle’s grassroots festival of founders, startups and side projects.', presentedBy: 'Upstart Investments', theme: 'light' },
  { id: '06', date: 'WED, 9 DEC', color: '#ff6a3d', title: 'Corporate Innovation Summit', desc: 'Where WA’s Corporate powerhouses meet emerging technology head-on.', presentedBy: 'Visagio', theme: 'light' }
];

const FestivalPass = () => {
  return (
    <section className="festival-pass">
      <div className="container">
        
        <div className="fp-header">
          <div className="fp-meta">
            <span className="fp-meta-tag"><span className="highlight">01 /</span> FESTIVAL PASS</span>
            <span className="fp-meta-desc">6 HEADLINE EVENTS - 1 PASS</span>
          </div>
          
          <div className="fp-title-row">
            <h2 className="fp-title">Six headline events. <br/>One pass.</h2>
            <p className="fp-desc">The Festival Pass unlocks every headline event across the week, one ticket, the full festival.</p>
          </div>
        </div>

        <div className="fp-grid">
          {events.map((event) => (
            <Link to={`/events/${event.title.toLowerCase().replace(/ /g, '-')}`} className={`event-card ${event.theme}`} key={event.id}>
              <div className="ec-header">
                <span className="ec-number" style={{ color: event.color }}>{event.id}</span>
                <span className="ec-date">{event.date}</span>
              </div>
              
              {event.theme === 'dark' ? (
                <div className="ec-logo" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                  <img src={event.logo} alt={event.title} style={{ height: '70px', objectFit: 'contain', objectPosition: 'left' }} />
                </div>
              ) : (
                 <div className="ec-content" style={{ marginTop: '1.5rem' }}>
                    <h3 className="ec-title">{event.title}</h3>
                 </div>
              )}

              <div className="ec-content">
                <p className="ec-desc">{event.desc}</p>
                {event.presentedBy && <p className="ec-presented">PRESENTED BY {event.presentedBy}</p>}
              </div>
              
              <div className="ec-footer">
                <span className="ec-footer-text">INCLUDED IN PASS</span>
                <ArrowUpRight size={16} color={event.theme === 'dark' ? '#fff' : '#000'} />
              </div>
            </Link>
          ))}
        </div>

        <div className="fp-cta">
          <div className="fp-cta-text">
            <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#ff6a3d' }}>#WTF</span>
            <span>One pass. Six headline events. The best way to optimise your week.</span>
          </div>
          <div className="fp-cta-actions">
            <Link to="/festival-pass" className="btn-secondary">
              <Users size={16} /> BUY FOR YOUR TEAM
            </Link>
            <Link to="/festival-pass" className="btn-primary">
              GET THE FESTIVAL PASS <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="group-rates">
          <span className="dot"></span>
          <span>GROUP RATES AVAILABLE FOR TEAMS</span>
        </div>

      </div>
    </section>
  );
};

export default FestivalPass;
