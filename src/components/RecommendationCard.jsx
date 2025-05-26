const RecommendationCard = ({ result, onReset }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl p-6 sm:p-10">
      <h3 className="text-2xl sm:text-3xl font-bold text-brand text-center mb-10">
        Your Recommendations
      </h3>

      {/* Section 1: Meal Timing */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
        {/* Text Left */}
        <div className="flex-1">
          <h4 className="text-xl font-semibold text-brand mb-2">Meal Timing</h4>
          <ul className="text-gray-700 list-disc list-inside text-sm sm:text-base">
            {result.foodTiming.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Image Right */}
        <img
          src="/images/meal.png"
          alt="Meal Timing"
          className="w-40 h-40 object-cover rounded-xl"
        />
      </div>

      {/* Section 2: Workouts + Diet Tips */}
      <div className="flex flex-col sm:flex-row items-start gap-6 mb-10">
        {/* Text Left: Workouts + Diet Tips */}
        <div className="flex-1">
          <h4 className="text-xl font-semibold text-brand mb-2">Workouts</h4>
          <ul className="text-gray-700 list-disc list-inside text-sm sm:text-base mb-4">
            {result.workouts.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h4 className="text-xl font-semibold text-brand mb-2">Diet Tips</h4>
          <ul className="text-gray-700 list-disc list-inside text-sm sm:text-base">
            {result.dietTips.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Image Right */}
        <img
          src="/images/workout.png"
          alt="Workouts"
          className="w-40 h-40 object-cover rounded-xl"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
        <button
          onClick={() => window.print()}
          className="bg-brand hover:bg-brand-dark text-white px-6 py-2 rounded-xl text-sm"
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
