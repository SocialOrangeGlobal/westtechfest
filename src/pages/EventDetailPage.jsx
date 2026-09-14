import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { eventsData } from '../data/eventsData';
import EventDetailHero from '../components/satellite/EventDetailHero';
import EventDetailContent from '../components/satellite/EventDetailContent';
import MoreEvents from '../components/satellite/MoreEvents';
import EventDetailCTA from '../components/satellite/EventDetailCTA';
import './EventDetail.css';

const EventDetailPage = () => {
  const { slug } = useParams();
  
  // Find the event matching the slug
  const event = eventsData.find(e => e.slug === slug);

  // Scroll to top when the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // If no event found, redirect to satellite events page
  if (!event) {
    return <Navigate to="/satellite-events" replace />;
  }

  return (
    <div className="event-detail-page">
      <EventDetailHero event={event} />
      <EventDetailContent event={event} />
      <MoreEvents currentSlug={slug} />
      <EventDetailCTA event={event} />
    </div>
  );
};

export default EventDetailPage;
