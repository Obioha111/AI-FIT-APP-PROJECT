// pages/RecommendationPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import bmiImage from '../assets/bmi.png';
import mealImage from '../assets/meal.png';
import workoutImage from '../assets/workout.png';
import dietImage from '../assets/diet.png';

const RecommendationPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const result = state?.result;

  if (!result) {
    return (
      <div className="text-center p-10">
        <p>No recommendation found. Please fill the form first.</p>
        <button
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded"
          onClick={() => navigate('/')}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4 flex justify-center items-start">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl p-6 md:p-10 space-y-6">
        <h2 className="text-3xl font-bold text-green-700 text-center">Your Recommendations</h2>

        {/* BMI */}
        <div className="flex items-center space-x-6">
          <div className="flex-1 text-green-800 text-lg">
            <p><strong>BMI:</strong> {result.bmi}</p>
            <p>{result.bmiComment}</p>
          </div>
          <img src={bmiImage} alt="BMI" className="w-24 md:w-32" />
        </div>

        {/* Meal Timing */}
        <div className="flex items-center space-x-6">
          <div className="flex-1 text-green-800 text-lg">
            <h3 className="text-xl font-semibold text-green-700">Meal Timing</h3>
            {result.mealTiming.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
          <img src={mealImage} alt="Meal Timing" className="w-24 md:w-32" />
        </div>

        {/* Workouts */}
        <div className="flex items-center space-x-6">
          <div className="flex-1 text-green-800 text-lg">
            <h3 className="text-xl font-semibold text-green-700">Workouts</h3>
            {result.workouts.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
          <img src={workoutImage} alt="Workouts" className="w-24 md:w-32" />
        </div>

        {/* Diet Tips */}
        <div className="flex items-center space-x-6">
          <div className="flex-1 text-green-800 text-lg">
            <h3 className="text-xl font-semibold text-green-700">Diet Tips</h3>
            {result.dietTips.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
          <img src={dietImage} alt="Diet Tips" className="w-24 md:w-32" />
        </div>
      </div>
    </div>
  );
};

export default RecommendationPage;
