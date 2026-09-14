import React, { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { speakersData } from '../data/speakersData';
import SpeakerDetailHero from '../components/speakers/SpeakerDetailHero';
import SpeakerDetailEvents from '../components/speakers/SpeakerDetailEvents';
import SpeakerDetailLineup from '../components/speakers/SpeakerDetailLineup';
import './Speakers.css';
import './SpeakerDetail.css';

const SpeakerDetailPage = () => {
  const { slug } = useParams();

  // Find current speaker
  const speaker = useMemo(() => {
    return speakersData.find((s) => s.slug === slug);
  }, [slug]);

  // Find other speakers for the lineup section (exclude current speaker)
  const otherSpeakers = useMemo(() => {
    return speakersData.filter((s) => s.slug !== slug).slice(0, 4);
  }, [slug]);

  if (!speaker) {
    return <Navigate to="/speakers" replace />;
  }

  return (
    <div className="speaker-detail-page">
      <main>
        <SpeakerDetailHero speaker={speaker} />
        <SpeakerDetailEvents speaker={speaker} />
        <SpeakerDetailLineup speakers={otherSpeakers} />
      </main>
    </div>
  );
};

export default SpeakerDetailPage;
