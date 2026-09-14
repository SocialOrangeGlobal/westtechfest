import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-box">
          <div className="n-content">
            <div className="n-meta">
              <span className="dot bg-accent-solid" style={{width: 6, height: 6}}></span>
              <span className="n-tag">NEWSLETTER</span>
            </div>
            <h2 className="n-title">First to hear.</h2>
            <p className="n-desc">
              Tickets, speaker announcements and program drops — straight to your inbox, no noise.
            </p>
          </div>
          
          <div className="n-form">
            <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email address" required className="n-input" />
              <button type="submit" className="n-submit-btn">
                SUBSCRIBE <span style={{marginLeft: '4px'}}>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
