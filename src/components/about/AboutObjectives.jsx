import React from 'react';

const AboutObjectives = () => {
  return (
    <section className="about-objectives-principles">
      <div className="container">
        <div className="columns-wrapper">
          <div className="column objectives-col">
            <div className="section-label">
              <span className="section-number">02</span> / OUR OBJECTIVES
            </div>
            <h2 className="section-title">What the festival sets out to do.</h2>
            
            <div className="list-items">
              <div className="list-item">
                <h3 className="item-title">RAISING AWARENESS</h3>
                <p className="item-desc">Raise the public profile and awareness of Western Australia's technology and innovation capabilities, and support the positioning of Western Australia as an innovation hub.</p>
              </div>
              <div className="list-item">
                <h3 className="item-title">CELEBRATING WA</h3>
                <p className="item-desc">Champion West Australian startups and their successes.</p>
              </div>
              <div className="list-item">
                <h3 className="item-title">BUILDING CAPABILITY</h3>
                <p className="item-desc">Attract investment for West Australian startups and innovators.</p>
              </div>
              <div className="list-item">
                <h3 className="item-title">BUILDING CONNECTIONS</h3>
                <p className="item-desc">Foster effective collaboration within the startup ecosystem between universities, government and industry.</p>
              </div>
            </div>
          </div>
          
          <div className="column principles-col">
            <div className="section-label">
              <span className="section-number">03</span> / OUR PRINCIPLES
            </div>
            <h2 className="section-title">The principles behind it.</h2>
            
            <div className="list-items">
              <div className="list-item">
                <h3 className="item-title">FOUNDERS FIRST</h3>
                <p className="item-desc">We are dedicated to spotlighting the achievements of local startups, offering a stage to share their stories and inspire others.</p>
              </div>
              <div className="list-item">
                <h3 className="item-title">INVEST IN WA</h3>
                <p className="item-desc">We provide a dynamic environment where innovators and investors come together, enabling future partnerships and investment.</p>
              </div>
              <div className="list-item">
                <h3 className="item-title">CONNECTIVE HUB</h3>
                <p className="item-desc">The festival acts as a unifying platform, where startups, risk capital, academia, government and corporates collaborate to advance innovation in Perth.</p>
              </div>
              <div className="list-item">
                <h3 className="item-title">GLOBALLY INSPIRED</h3>
                <p className="item-desc">We provide a platform to explore and engage with innovative ideas from around the world, all in one fantastic location — Perth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutObjectives;

