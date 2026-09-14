import React from 'react';

const FILTER_TYPES = ['ALL', 'MEETUP', 'SUMMIT', 'WORKSHOP', 'EXHIBITION'];

const SatelliteFilters = ({ 
  activeFilter, 
  setActiveFilter, 
  searchQuery, 
  setSearchQuery,
  selectedSector,
  setSelectedSector
}) => {
  return (
    <section className="satellite-filters-section">
      <div className="container filters-container">
        <div className="filter-pills">
          {FILTER_TYPES.map(type => (
            <button
              key={type}
              className={`filter-pill ${activeFilter === type ? 'active' : ''}`}
              onClick={() => setActiveFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="filter-controls">
          <div className="select-wrapper">
            <select 
              className="sector-select"
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
            >
              <option value="ALL SECTORS">ALL SECTORS</option>
              <option value="AI & DATA">AI & DATA</option>
              <option value="CLIMATE & ENERGY">CLIMATE & ENERGY</option>
              <option value="ROBOTICS & AUTOMATION">ROBOTICS & AUTOMATION</option>
            </select>
            <div className="select-icon">▼</div>
          </div>

          <div className="search-wrapper">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search satellite events"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SatelliteFilters;
