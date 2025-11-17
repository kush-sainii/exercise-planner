# Exercise Planner

A React-based exercise planner app that helps users follow fitness challenges with daily workout routines.

## Features

- **Multiple Challenges**: Choose from various fitness challenges like Cardio Blast, Six-Pack Challenge, and Strength Builder
- **Daily Routines**: Each challenge is broken down into daily exercises with specific instructions
- **Progress Tracking**: Check off exercises as you complete them and see your daily progress
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Beautiful UI**: Modern gradient design with smooth animations

## Challenges Included

1. **Cardio Blast Challenge** (30 days) - High intensity cardiovascular training
2. **Six-Pack Challenge** (60 days) - Core strengthening program
3. **Strength Builder Challenge** (45 days) - Progressive strength training

## Getting Started

### Installation

```bash
cd exercise-planner
npm install
```

### Running the App

```bash
npm start
```

The app will open at `http://localhost:3000`

## How to Use

1. Launch the app and view all available challenges
2. Click on a challenge to see the daily breakdown
3. Select a specific day to view all exercises
4. Check off exercises as you complete them
5. Track your progress with the progress bar

## Project Structure

```
src/
├── components/
│   ├── ChallengeCard.js      # Challenge overview card
│   ├── ChallengeView.js      # Challenge detail view
│   ├── DayCard.js            # Individual day card
│   └── DayDetails.js         # Day exercise details
├── data/
│   └── challengesData.js     # All challenge data
├── App.js                    # Main app component
└── App.css                   # Styles
```

## Customization

You can easily add more challenges by editing `src/data/challengesData.js`:

```javascript
'your-challenge': {
  id: 'your-challenge',
  name: 'Your Challenge Name',
  description: 'Challenge description',
  duration: 30,
  difficulty: 'Medium',
  color: '#YOUR_COLOR',
  days: {
    // Day-by-day exercises
  }
}
```

## Technologies Used

- React 18.2.0
- CSS3 with Flexbox and Grid
- React Hooks (useState)

## License

MIT
