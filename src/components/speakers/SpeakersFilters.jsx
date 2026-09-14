import React from 'react';

const SpeakersFilters = ({ categories, activeCategory, setActiveCategory, searchQuery, setSearchQuery, setVisibleCount }) => {
  return (
    <div className="speakers-filters">
      <div className="filter-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory(category);
              setVisibleCount(12); // Reset count on filter change
            }}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="search-box">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input 
          type="text" 
          placeholder="Search speakers" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SpeakersFilters;
