import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          
          <div className="hero-meta">
            <span className="dot"></span>
            <span>Perth + Fremantle, Western Australia</span>
            <span className="divider"></span>
            <span className="text-white">7 – 11 Dec 2026</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line1">Where the West builds</span>
            <span className="title-line2">what’s next.</span>
          </h1>
          
          <div className="hero-content">
            <p className="hero-desc">
              A week of keynotes, summits and satellite events across the city, where Western Australia’s founders, investors and technologists meet the world.
            </p>
            <div className="hero-actions">
              <a href="/festival-pass" className="btn-primary">
                Get Tickets <ArrowRight size={16} />
              </a>
              <a href="/events" className="btn-secondary">
                Explore the Program
              </a>
            </div>
          </div>

          <div className="banner">
             <video autoPlay loop muted playsInline className="banner-video">
               <source src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/WTF-BannerAnimation_260730.mp4?2026-08-05T23%3A53%3A08.730Z" type="video/mp4" />
             </video>
             <div className="banner-footer">
               <span className="banner-text-1">WTF 2026</span>
               <span className="divider"></span>
               <span className="banner-text-2">Western Australia’s festival of technology + innovation</span>
             </div>
          </div>
        </div>
      </section>

      <div className="stats-bar bg-canvas">
        <div className="container stats-container">
          <div className="stat-item">
            <span className="dot"></span>
            <span className="stat-text">1 Week</span>
          </div>
          <div className="stat-item">
            <span className="dot"></span>
            <span className="stat-text">6 Headline Events</span>
          </div>
          <div className="stat-item">
            <span className="dot"></span>
            <span className="stat-text">City-wide Satellite Events</span>
          </div>
          <div className="stat-item">
            <span className="dot"></span>
            <span className="stat-text">Global Speakers</span>
          </div>
          <div className="stat-item">
            <span className="dot"></span>
            <span className="stat-text">1 Festival Pass</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
