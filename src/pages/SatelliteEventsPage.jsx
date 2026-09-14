import React, { useState } from 'react';
import SatelliteHero from '../components/satellite/SatelliteHero';
import SatelliteFilters from '../components/satellite/SatelliteFilters';
import SatelliteList from '../components/satellite/SatelliteList';
import SatelliteCTA from '../components/satellite/SatelliteCTA';
import './SatelliteEvents.css';

import { eventsData as initialEvents } from '../data/eventsData';

const SatelliteEventsPage = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState('ALL SECTORS');

  const filteredEvents = initialEvents.filter(event => {
    // Type filter
    if (activeFilter !== 'ALL' && event.type !== activeFilter) {
      return false;
    }

    // Search query filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const match = (event.title && event.title.toLowerCase().includes(q)) ||
        (event.description && event.description.toLowerCase().includes(q)) ||
        (event.host && event.host.toLowerCase().includes(q));
      if (!match) return false;
    }

    // Sector filter could go here if data had sectors
    return true;
  });

  return (
    <div className="satellite-events-page">
      <SatelliteHero />
      <SatelliteFilters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedSector={selectedSector}
        setSelectedSector={setSelectedSector}
      />
      <SatelliteList events={filteredEvents} totalEvents={initialEvents.length} />
      <SatelliteCTA />
    </div>
  );
};

export default SatelliteEventsPage;
