import React, { useState, useMemo } from 'react';
import { speakersData } from '../data/speakersData';
import SpeakersHero from '../components/speakers/SpeakersHero';
import SpeakersFilters from '../components/speakers/SpeakersFilters';
import SpeakersGrid from '../components/speakers/SpeakersGrid';
import SpeakersBottomBanner from '../components/speakers/SpeakersBottomBanner';
import './Speakers.css';

const SpeakersPage = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(12);

  const categories = ['ALL', 'WEST TECH WOMEN', 'WEST TECH MAIN', 'WEST TECH WADJEMUP'];

  const filteredSpeakers = useMemo(() => {
    return speakersData.filter((speaker) => {
      const matchesCategory = activeCategory === 'ALL' || speaker.category === activeCategory;
      const matchesSearch = speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            speaker.role.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const visibleSpeakers = filteredSpeakers.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  return (
    <div className="page-wrapper">
      <main>
        <SpeakersHero />

        <section className="speakers-list-section">
          <div className="container">
            <SpeakersFilters 
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              setVisibleCount={setVisibleCount}
            />

            <SpeakersGrid visibleSpeakers={visibleSpeakers} />

            <div className="load-more-section">
              {visibleCount < filteredSpeakers.length && (
                <button className="load-more-btn" onClick={handleLoadMore}>
                  LOAD MORE SPEAKERS
                </button>
              )}
              <span className="load-more-text">
                SHOWING {visibleSpeakers.length} OF {filteredSpeakers.length}
              </span>
            </div>
          </div>
        </section>

        <SpeakersBottomBanner />
      </main>
    </div>
  );
};

export default SpeakersPage;
