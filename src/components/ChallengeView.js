import React from 'react';
import DayCard from './DayCard';
import './ChallengeView.css';

const ChallengeView = ({ challenge, onBack, onSelectDay }) => {
  return (
    <div className="challenge-view">
      <div className="challenge-view-header">
        <button className="back-btn" onClick={onBack}>← Back to Challenges</button>
        <h1 style={{ color: challenge.color }}>{challenge.name}</h1>
        <p className="challenge-duration">Duration: {challenge.duration} days</p>
      </div>

      <div className="days-grid">
        {Object.entries(challenge.days).map(([dayNum, dayInfo]) => (
          <DayCard
            key={dayNum}
            dayNumber={parseInt(dayNum)}
            dayInfo={dayInfo}
            onSelect={() => onSelectDay(parseInt(dayNum))}
          />
        ))}
      </div>
    </div>
  );
};

export default ChallengeView;
