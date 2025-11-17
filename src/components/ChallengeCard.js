import React from 'react';
import './ChallengeCard.css';

const ChallengeCard = ({ challenge, onSelect }) => {
  return (
    <div className="challenge-card" onClick={() => onSelect(challenge.id)}>
      <div className="challenge-header" style={{ backgroundColor: challenge.color }}>
        <h2>{challenge.name}</h2>
      </div>
      <div className="challenge-body">
        <p className="challenge-description">{challenge.description}</p>
        <div className="challenge-info">
          <div className="info-item">
            <span className="label">Duration:</span>
            <span className="value">{challenge.duration} days</span>
          </div>
          <div className="info-item">
            <span className="label">Difficulty:</span>
            <span className="value difficulty">{challenge.difficulty}</span>
          </div>
        </div>
        <button className="select-btn">Start Challenge →</button>
      </div>
    </div>
  );
};

export default ChallengeCard;
