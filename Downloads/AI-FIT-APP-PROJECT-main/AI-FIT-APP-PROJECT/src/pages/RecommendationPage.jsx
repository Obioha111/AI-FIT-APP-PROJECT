import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RecommendationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result;

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="text-center">
          <p className="text-xl text-gray-700">No recommendation found.</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const sections = [
    { title: 'BMI Status', text: result.bmiText, image: '/images/bmi.png' },
    { title: 'Meal Timing', text: result.meal, image: '/images/meal.png' },
    { title: 'Workout Plan', text: result.workout, image: '/images/workout.png' },
    { title: 'Diet Tips', text: result.diet, image: '/images/diet.png' },
  ];

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-4xl p-8 space-y-8">
        <h1 className="text-3xl font-bold text-center text-green-700">Your Personalized Recommendations</h1>

        {sections.map((section, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-4 md:gap-6 border-b border-green-100 pb-6"
          >
            <div className="md:w-2/3">
              <h2 className="text-xl font-semibold text-green-800 mb-2">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">{section.text}</p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img
                src={section.image}
                alt={section.title}
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
        ))}

        <div className="flex justify-center pt-6">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Go Back to Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendationPage;
