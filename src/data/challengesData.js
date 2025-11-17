const challengesData = {
  'cardio-blast': {
    id: 'cardio-blast',
    name: 'Cardio Blast Challenge',
    description: 'Intense cardiovascular training to build endurance and burn calories',
    duration: 30,
    difficulty: 'High',
    color: '#FF6B6B',
    days: {
      1: {
        title: 'HIIT Sprint Intervals',
        exercises: [
          { name: 'Warm-up Jog', duration: '5 min', intensity: 'Low' },
          { name: '30s Sprint + 30s Walk', reps: '10 rounds', intensity: 'Very High' },
          { name: 'Cool Down Jog', duration: '5 min', intensity: 'Low' }
        ]
      },
      2: {
        title: 'Long-Distance Run',
        exercises: [
          { name: 'Dynamic Stretching', duration: '5 min', intensity: 'Low' },
          { name: 'Steady Run', distance: '5K', intensity: 'Medium' },
          { name: 'Static Stretching', duration: '5 min', intensity: 'Low' }
        ]
      },
      3: {
        title: 'Cycling Power',
        exercises: [
          { name: 'Easy Pedal', duration: '5 min', intensity: 'Low' },
          { name: 'Hill Climbs', reps: '8 rounds', intensity: 'High' },
          { name: 'Cool Down', duration: '5 min', intensity: 'Low' }
        ]
      },
      4: {
        title: 'Rest Day - Light Yoga',
        exercises: [
          { name: 'Full Body Yoga', duration: '30 min', intensity: 'Low' },
          { name: 'Deep Breathing', duration: '5 min', intensity: 'Low' }
        ]
      },
      5: {
        title: 'Jump Rope & Burpees',
        exercises: [
          { name: 'Arm Circles', duration: '2 min', intensity: 'Low' },
          { name: 'Jump Rope', reps: '3 x 2 min', intensity: 'High' },
          { name: 'Burpees', reps: '5 x 10', intensity: 'Very High' },
          { name: 'Cool Down Walk', duration: '5 min', intensity: 'Low' }
        ]
      },
      6: {
        title: 'Swimming Session',
        exercises: [
          { name: 'Pool Warm-up', duration: '5 min', intensity: 'Low' },
          { name: 'Freestyle Laps', reps: '20 laps', intensity: 'High' },
          { name: 'Backstroke', reps: '10 laps', intensity: 'Medium' },
          { name: 'Cool Down Float', duration: '5 min', intensity: 'Low' }
        ]
      },
      7: {
        title: 'Cross-Training Mix',
        exercises: [
          { name: 'Dynamic Warm-up', duration: '5 min', intensity: 'Low' },
          { name: 'Rowing Machine', duration: '10 min', intensity: 'High' },
          { name: 'Stair Climber', duration: '10 min', intensity: 'High' },
          { name: 'Cool Down Stretch', duration: '5 min', intensity: 'Low' }
        ]
      }
    }
  },
  'six-pack': {
    id: 'six-pack',
    name: 'Six-Pack Challenge',
    description: 'Core strengthening program to build visible abdominal muscles',
    duration: 60,
    difficulty: 'Medium',
    color: '#4ECDC4',
    days: {
      1: {
        title: 'Core Foundation',
        exercises: [
          { name: 'Plank Hold', time: '3 x 30s', intensity: 'Medium' },
          { name: 'Crunches', reps: '3 x 20', intensity: 'Medium' },
          { name: 'Leg Raises', reps: '3 x 15', intensity: 'Medium' },
          { name: 'Dead Bug', reps: '3 x 12', intensity: 'Low' }
        ]
      },
      2: {
        title: 'Upper Ab Focus',
        exercises: [
          { name: 'Cable Crunches', reps: '3 x 15', intensity: 'High' },
          { name: 'Machine Crunch', reps: '3 x 12', intensity: 'Medium' },
          { name: 'V-ups', reps: '3 x 10', intensity: 'High' },
          { name: 'Reverse Crunches', reps: '3 x 15', intensity: 'Medium' }
        ]
      },
      3: {
        title: 'Rest Day',
        exercises: [
          { name: 'Light Stretching', duration: '15 min', intensity: 'Low' },
          { name: 'Foam Rolling', duration: '10 min', intensity: 'Low' }
        ]
      },
      4: {
        title: 'Lower Ab Burn',
        exercises: [
          { name: 'Hanging Leg Raises', reps: '3 x 12', intensity: 'High' },
          { name: 'Ab Wheel Rollout', reps: '3 x 10', intensity: 'Very High' },
          { name: 'Lying Leg Raises', reps: '3 x 15', intensity: 'Medium' },
          { name: 'Flutter Kicks', time: '3 x 30s', intensity: 'Medium' }
        ]
      },
      5: {
        title: 'Oblique Training',
        exercises: [
          { name: 'Russian Twists', reps: '3 x 20', intensity: 'Medium' },
          { name: 'Side Plank', time: '3 x 30s each', intensity: 'Medium' },
          { name: 'Cable Woodchops', reps: '3 x 12 each side', intensity: 'High' },
          { name: 'Bicycle Crunches', reps: '3 x 20', intensity: 'Medium' }
        ]
      },
      6: {
        title: 'Cardio + Core',
        exercises: [
          { name: 'Burpees', reps: '3 x 10', intensity: 'Very High' },
          { name: 'Mountain Climbers', reps: '3 x 20', intensity: 'High' },
          { name: 'Jump Squats', reps: '3 x 15', intensity: 'High' },
          { name: 'Plank Jacks', reps: '3 x 15', intensity: 'High' }
        ]
      },
      7: {
        title: 'Advanced Core Complex',
        exercises: [
          { name: 'Dragon Flags', reps: '3 x 8', intensity: 'Very High' },
          { name: 'Ab Wheel Rollout', reps: '3 x 12', intensity: 'Very High' },
          { name: 'Decline Sit-ups', reps: '3 x 15', intensity: 'High' },
          { name: 'Hollow Body Hold', time: '3 x 20s', intensity: 'Medium' }
        ]
      }
    }
  },
  'strength-builder': {
    id: 'strength-builder',
    name: 'Strength Builder Challenge',
    description: 'Build muscle and increase overall strength with progressive training',
    duration: 45,
    difficulty: 'High',
    color: '#F7B731',
    days: {
      1: {
        title: 'Chest & Triceps',
        exercises: [
          { name: 'Bench Press', reps: '4 x 8', intensity: 'High' },
          { name: 'Incline Dumbbell Press', reps: '3 x 10', intensity: 'High' },
          { name: 'Tricep Dips', reps: '3 x 12', intensity: 'Medium' },
          { name: 'Pushups', reps: '3 x 15', intensity: 'Medium' }
        ]
      },
      2: {
        title: 'Back & Biceps',
        exercises: [
          { name: 'Deadlifts', reps: '4 x 6', intensity: 'Very High' },
          { name: 'Barbell Rows', reps: '3 x 8', intensity: 'High' },
          { name: 'Barbell Curls', reps: '3 x 10', intensity: 'Medium' },
          { name: 'Lat Pulldowns', reps: '3 x 12', intensity: 'Medium' }
        ]
      },
      3: {
        title: 'Rest Day',
        exercises: [
          { name: 'Mobility Work', duration: '20 min', intensity: 'Low' }
        ]
      },
      4: {
        title: 'Legs & Glutes',
        exercises: [
          { name: 'Squats', reps: '4 x 8', intensity: 'Very High' },
          { name: 'Romanian Deadlifts', reps: '3 x 10', intensity: 'High' },
          { name: 'Leg Press', reps: '3 x 12', intensity: 'Medium' },
          { name: 'Leg Curls', reps: '3 x 12', intensity: 'Medium' }
        ]
      },
      5: {
        title: 'Shoulders & Arms',
        exercises: [
          { name: 'Military Press', reps: '4 x 8', intensity: 'High' },
          { name: 'Lateral Raises', reps: '3 x 12', intensity: 'Medium' },
          { name: 'Cable Curls', reps: '3 x 12', intensity: 'Medium' },
          { name: 'Tricep Rope Pushdowns', reps: '3 x 12', intensity: 'Medium' }
        ]
      },
      6: {
        title: 'Full Body Power',
        exercises: [
          { name: 'Power Cleans', reps: '5 x 3', intensity: 'Very High' },
          { name: 'Front Squats', reps: '3 x 5', intensity: 'Very High' },
          { name: 'Rows', reps: '3 x 5', intensity: 'High' }
        ]
      },
      7: {
        title: 'Light Cardio & Stretch',
        exercises: [
          { name: 'Light Cardio', duration: '20 min', intensity: 'Low' },
          { name: 'Full Body Stretch', duration: '15 min', intensity: 'Low' }
        ]
      }
    }
  }
};

export default challengesData;
