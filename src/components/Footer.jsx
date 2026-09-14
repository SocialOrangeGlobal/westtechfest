import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

const LinkedinIcon = () => (
  <svg xmlns="http://www.svg.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.svg.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.svg.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.svg.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.svg.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.svg.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className="site-footer">
      {isHomePage && (
      <div className="footer-cta" style={{position: 'relative', overflow: 'hidden', backgroundColor: '#000'}}>
        {/* The top gradient border */}
        <div style={{height: '2px', width: '100%', background: 'var(--bg-gradient-brand)', position: 'absolute', top: 0, left: 0, zIndex: 10}} aria-hidden="true"></div>
        
        {/* The background glow and dot grid */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: 'radial-gradient(ellipse 70% 70% at 50% 40%, rgba(201, 74, 40, 0.25) 0%, transparent 100%)'
        }}></div>
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: 'radial-gradient(rgba(241, 90, 50, 0.6) 1.5px, transparent 1.5px)',
          backgroundSize: '12px 12px',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 60%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 60%, transparent 100%)'
        }}></div>
        
        <div className="container cta-container" style={{position: 'relative', zIndex: 1}}>
          <div className="cta-meta">
            <span className="dot bg-accent-solid" style={{width: 6, height: 6}}></span>
            <span className="cta-date">7 – 11 DEC 2026 · PERTH + FREMANTLE, WA</span>
          </div>
          
          <h2 className="cta-title">Be there when the<br/>West shows up.</h2>
          
          <div className="cta-actions">
            <a href="#" className="btn-primary">
              GET THE FESTIVAL PASS <span style={{marginLeft: '8px'}}>→</span>
            </a>
            <a href="#" className="btn-secondary">
              GET TICKETS
            </a>
          </div>
        </div>
      </div>
      )}
      
      <div className="footer-bottom">
        <div className="container fb-container" style={{paddingTop: '6rem', paddingBottom: '4rem'}}>
          <div className="fb-left">
            <img 
              src="https://www.westtechfest.com.au/brand/logos/WTF26_Wordmark_Overarching_CU_Stacked.svg" 
              alt="West Tech Fest" 
              style={{maxHeight: '100px', marginBottom: '1.5rem'}} 
            />
            <p className="fb-desc" style={{color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', maxWidth: '300px'}}>
              A celebration of Western Australia's startup ecosystem showcasing innovation, investment and entrepreneurship.
            </p>
          </div>
          
          <div className="fb-right">
            <div className="fb-column">
              <h4 className="fb-col-title">FESTIVAL</h4>
              <ul className="fb-list">
                <li><a href="#">Program</a></li>
                <li><a href="#">Festival Pass</a></li>
                <li><a href="#">Speakers</a></li>
                <li><a href="#">Satellite Events</a></li>
                <li><a href="#">Get Tickets</a></li>
                <li><a href="#">Travel &amp; Stay</a></li>
                <li><a href="#">West Tech Pitch</a></li>
              </ul>
            </div>
            
            <div className="fb-column">
              <h4 className="fb-col-title">ABOUT</h4>
              <ul className="fb-list">
                <li><a href="#">About the festival</a></li>
                <li><a href="#">Partners &amp; Sponsors</a></li>
                <li><a href="#">Blog / News</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
            
            <div className="fb-column">
              <h4 className="fb-col-title">FOLLOW</h4>
              <div className="fb-social" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0px'}}>
                <a href="#" className="social-link"><LinkedinIcon /></a>
                <a href="#" className="social-link"><InstagramIcon /></a>
                <a href="#" className="social-link"><FacebookIcon /></a>
                <a href="#" className="social-link"><XIcon /></a>
                <a href="#" className="social-link"><YoutubeIcon /></a>
                <a href="#" className="social-link"><MailIcon /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-newsletter">
          <div className="container">
            <div className="fn-inner">
              <div className="fn-left">
                <div className="fn-meta">
                  <span className="dot bg-accent-solid" style={{width: 6, height: 6}}></span>
                  <span className="fn-tag">NEWSLETTER</span>
                </div>
                <h3 className="fn-title">First to hear about tickets, speakers and program drops.</h3>
              </div>
              <div className="fn-right">
                <form className="fn-form" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Email address" required className="fn-input" />
                  <button type="submit" className="fn-submit">
                    SUBSCRIBE <span style={{marginLeft: '4px'}}>→</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-acknowledgement">
          <div className="container">
            <p className="ack-text">
              West Tech Festival acknowledges the Noongar people who remain the spiritual and cultural Kaartdijin of this kwobidak boodjar.<br/>
              We honour and respect the significant role they play for our community.
            </p>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container copyright-inner">
            <div className="copy-left">
              &copy; 2026 WEST TECH FEST
            </div>
            <div className="copy-right">
              <a href="#">PRIVACY</a>
              <a href="#">TICKETING T&amp;CS</a>
              <a href="#">CODE OF CONDUCT</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
