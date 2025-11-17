import React from 'react';
import './DayCard.css';

const DayCard = ({ dayNumber, dayInfo, onSelect }) => {
  return (
    <div className="day-card" onClick={() => onSelect(dayNumber)}>
      <div className="day-number">Day {dayNumber}</div>
      <h3>{dayInfo.title}</h3>
      <p className="exercises-count">{dayInfo.exercises.length} exercises</p>
      <button className="view-btn">View →</button>
    </div>
  );
};

export default DayCard;
