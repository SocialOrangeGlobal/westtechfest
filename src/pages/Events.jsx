import React from 'react';
import EventsHero from '../components/events/EventsHero';
import TheWeek from '../components/events/TheWeek';
import HeadlineEvents from '../components/events/HeadlineEvents';
import FestivalPassTable from '../components/events/FestivalPassTable';
import SatelliteEventsSection from '../components/events/SatelliteEventsSection';
import ScheduleBanner from '../components/events/ScheduleBanner';
import '../components/events/Events.css';

const Events = () => {
  return (
    <div className="events-page">
      <EventsHero />
      <TheWeek />
      <HeadlineEvents />
      <FestivalPassTable />
      <SatelliteEventsSection />
      <ScheduleBanner />
    </div>
  );
};

export default Events;
