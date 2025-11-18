import React, { useState, useEffect } from 'react';
import './DayDetails.css';

const DayDetails = ({ day, dayNumber, challengeName, challengeId, onBack, onUpdateExercises, completedExercises }) => {
  const [checkedExercises, setCheckedExercises] = useState({});

  // Load saved exercises on mount
  useEffect(() => {
    const storageKey = `exercises_${challengeId}_day_${dayNumber}`;
    const savedExercises = localStorage.getItem(storageKey);
    if (savedExercises) {
      setCheckedExercises(JSON.parse(savedExercises));
    }
  }, [challengeId, dayNumber]);

  const toggleExercise = (index) => {
    const updatedExercises = {
      ...checkedExercises,
      [index]: !checkedExercises[index]
    };
    setCheckedExercises(updatedExercises);
    
    // Save to localStorage
    const storageKey = `exercises_${challengeId}_day_${dayNumber}`;
    localStorage.setItem(storageKey, JSON.stringify(updatedExercises));
    
    // Update parent component
    onUpdateExercises?.(storageKey, updatedExercises);
  };

  const completedCount = Object.values(checkedExercises).filter(Boolean).length;
  const totalExercises = day.exercises.length;
  const progressPercent = (completedCount / totalExercises) * 100;

  return (
    <div className="day-details">
      <div className="day-header">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <h1>{challengeName}</h1>
      </div>

      <div className="day-info">
        <h2>Day {dayNumber}: {day.title}</h2>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>
        <p className="progress-text">{completedCount} of {totalExercises} exercises completed</p>
      </div>

      <div className="exercises-list">
        {day.exercises.map((exercise, index) => (
          <div key={index} className={`exercise-item ${checkedExercises[index] ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={checkedExercises[index] || false}
              onChange={() => toggleExercise(index)}
              className="exercise-checkbox"
            />
            <div className="exercise-content">
              <div className="exercise-main">
                <h3>{exercise.name}</h3>
                <span className={`intensity-badge intensity-${exercise.intensity?.toLowerCase().replace(' ', '-')}`}>
                  {exercise.intensity}
                </span>
              </div>
              <div className="exercise-details">
                {exercise.duration && <span className="detail">⏱️ {exercise.duration}</span>}
                {exercise.reps && <span className="detail">💪 {exercise.reps}</span>}
                {exercise.time && <span className="detail">⏱️ {exercise.time}</span>}
                {exercise.distance && <span className="detail">🏃 {exercise.distance}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {progressPercent === 100 && (
        <div className="completion-message">
          🎉 Great job! You completed all exercises for today!
        </div>
      )}
    </div>
  );
};

export default DayDetails;
