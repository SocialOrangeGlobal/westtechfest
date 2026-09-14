import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FestivalPass from './components/FestivalPass';
import Speakers from './components/Speakers';
import SatelliteEvents from './components/SatelliteEvents';
import Partners from './components/Partners';
import Footer from './components/Footer';
import Events from './pages/Events';
import SatelliteEventsPage from './pages/SatelliteEventsPage';
import EventDetailPage from './pages/EventDetailPage';
import SpeakersPage from './pages/SpeakersPage';
import SpeakerDetailPage from './pages/SpeakerDetailPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <FestivalPass />
              <Speakers />
              <SatelliteEvents />
              <Partners />
            </>
          } />
          <Route path="/events" element={<Events />} />
          <Route path="/satellite-events" element={<SatelliteEventsPage />} />
          <Route path="/satellite-events/:slug" element={<EventDetailPage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/speakers/:slug" element={<SpeakerDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
