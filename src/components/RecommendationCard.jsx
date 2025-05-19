const RecommendationCard = ({ result, onReset }) => {
  return (
    <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-2xl shadow-lg">
      <h3 className="text-3xl font-bold text-green-800 mb-6 text-center">Your Personalized Plan</h3>

      {/* BMI Section */}
      <div className="flex items-center justify-between mb-6 bg-white rounded-xl p-4 shadow">
        <div>
          <h4 className="text-lg font-semibold text-green-700 mb-1">BMI</h4>
          <p className="text-gray-700">{result.bmi}</p>
        </div>
        <img src="/images/bmi.png" alt="BMI" className="w-20 h-20 object-contain" />
      </div>

      {/* Meal Timing Section */}
      <div className="flex items-center justify-between mb-6 bg-white rounded-xl p-4 shadow">
        <div>
          <h4 className="text-lg font-semibold text-green-700 mb-1">Meal Timing</h4>
          <ul className="text-gray-700 list-disc list-inside">
            {result.foodTiming.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
        <img src="/images/meal.png" alt="Meal Timing" className="w-20 h-20 object-contain" />
      </div>

      {/* Workouts Section */}
      <div className="flex items-center justify-between mb-6 bg-white rounded-xl p-4 shadow">
        <div>
          <h4 className="text-lg font-semibold text-green-700 mb-1">Workouts</h4>
          <ul className="text-gray-700 list-disc list-inside">
            {result.workouts.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
        <img src="/images/workout.png" alt="Workout" className="w-20 h-20 object-contain" />
      </div>

      {/* Diet Tips Section */}
      {result.dietTips.length > 0 && (
        <div className="flex items-center justify-between mb-6 bg-white rounded-xl p-4 shadow">
          <div>
            <h4 className="text-lg font-semibold text-green-700 mb-1">Diet Tips</h4>
            <ul className="text-gray-700 list-disc list-inside">
              {result.dietTips.map((tip, idx) => <li key={idx}>{tip}</li>)}
            </ul>
          </div>
          <img src="/images/tips.png" alt="Diet Tips" className="w-20 h-20 object-contain" />
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        <button
          onClick={() => window.print()}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl text-sm"
        >
          Print / Save as PDF
        </button>

        <button
          onClick={onReset}
          className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 px-6 py-2 rounded-xl text-sm"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default RecommendationCard;
