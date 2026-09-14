import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Speakers.css';

const speakersList = [
  { name: 'Harry Dixon', role: 'CEO & Co-Founder, Checkmate & mate', img: '/images/speakers/brella-speaker-413512-f7f9a4a9bb1f2.webp' },
  { name: 'Remy Tucker', role: 'Founder & CEO, On The House', img: '/images/speakers/brella-speaker-433407-fb88be5c03b95.jpg' },
  { name: 'Ryan Bellissimo', role: 'Founder & CEO, Progression / Oceans 26', img: '/images/speakers/brella-speaker-433408-2dd62c67cf8f4.jpg' },
  { name: 'Bronte Campbell', role: 'Co-Founder, Earthletica', img: '/images/speakers/brella-speaker-433409-5948bb9500539.webp' }
];

const Speakers = () => {
  return (
    <section className="speakers">
      <div className="container">
        
        <div className="speakers-header">
          <div className="fp-meta">
            <span className="fp-meta-tag"><span className="highlight">02 /</span> SPEAKERS</span>
            <span className="fp-meta-desc">ANNOUNCED SO FAR - MORE TO COME</span>
          </div>
          
          <div className="speakers-title-row">
            <h2 className="speakers-title">First voices on the line-up.</h2>
            <Link to="/speakers" className="view-all-link">
              VIEW ALL SPEAKERS <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="speakers-grid">
          {speakersList.map((speaker, idx) => (
            <Link to={`/speakers/${speaker.name.toLowerCase().replace(/ /g, '-')}`} className="speaker-card" key={idx}>
              <div className="speaker-img-wrapper">
                <img src={speaker.img} alt={speaker.name} className="speaker-img" />
              </div>
              <div className="speaker-info">
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-role">{speaker.role}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Speakers;
