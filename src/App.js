import React, { useState } from 'react';
import './App.css';
import ChallengeCard from './components/ChallengeCard';
import ChallengeView from './components/ChallengeView';
import DayDetails from './components/DayDetails';
import challengesData from './data/challengesData';

function App() {
  const [view, setView] = useState('challenges'); // 'challenges', 'challenge-view', 'day-details'
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleSelectChallenge = (challengeId) => {
    setSelectedChallenge(challengesData[challengeId]);
    setView('challenge-view');
  };

  const handleBackToChallenges = () => {
    setView('challenges');
    setSelectedChallenge(null);
    setSelectedDay(null);
  };

  const handleSelectDay = (dayNumber) => {
    setSelectedDay(dayNumber);
    setView('day-details');
  };

  const handleBackToChallenge = () => {
    setView('challenge-view');
    setSelectedDay(null);
  };

  return (
    <div className="app">
      {view === 'challenges' && (
        <div className="challenges-view">
          <header className="header">
            <h1>💪 Exercise Planner</h1>
            <p>Choose a challenge and start your fitness journey today!</p>
          </header>
          <div className="challenges-grid">
            {Object.values(challengesData).map(challenge => (
              <ChallengeCard
                key={challenge.id}
                challenge={challenge}
                onSelect={handleSelectChallenge}
              />
            ))}
          </div>
        </div>
      )}

      {view === 'challenge-view' && selectedChallenge && (
        <ChallengeView
          challenge={selectedChallenge}
          onBack={handleBackToChallenges}
          onSelectDay={handleSelectDay}
        />
      )}

      {view === 'day-details' && selectedChallenge && (
        <DayDetails
          day={selectedChallenge.days[selectedDay]}
          dayNumber={selectedDay}
          challengeName={selectedChallenge.name}
          onBack={handleBackToChallenge}
        />
      )}
    </div>
  );
}

export default App;
