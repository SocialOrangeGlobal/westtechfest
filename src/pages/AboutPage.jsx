import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutStory from '../components/about/AboutStory';
import AboutObjectives from '../components/about/AboutObjectives';
import AboutStats from '../components/about/AboutStats';
import AboutTeam from '../components/about/AboutTeam';
import './About.css';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <AboutHero />
      <AboutStory />
      <AboutObjectives />
      <AboutStats />
      <AboutTeam />
    </div>
  );
};

export default AboutPage;

