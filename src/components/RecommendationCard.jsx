const RecommendationCard = ({ result, onReset }) => (
  <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
    <h3 className="text-2xl font-semibold text-blue-800 mb-4">Your Personalized Plan</h3>

    <p className="mb-4"><strong>BMI:</strong> {result.bmi}</p>

    <div className="mb-4">
      <h4 className="text-lg font-medium text-gray-700">Meal Timing:</h4>
      <ul className="list-disc list-inside text-gray-600">
        {result.foodTiming.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>

    <div className="mb-4">
      <h4 className="text-lg font-medium text-gray-700">Workouts:</h4>
      <ul className="list-disc list-inside text-gray-600">
        {result.workouts.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>

    {result.dietTips.length > 0 && (
      <div className="mb-4">
        <h4 className="text-lg font-medium text-gray-700">Diet Tips:</h4>
        <ul className="list-disc list-inside text-gray-600">
          {result.dietTips.map((tip, idx) => <li key={idx}>{tip}</li>)}
        </ul>
      </div>
    )}

    <div className="flex flex-wrap gap-4 mt-4">
      <button
        onClick={() => window.print()}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl text-sm"
      >
        Print / Save as PDF
      </button>

      <button
        onClick={onReset}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-xl text-sm"
      >
        Reset
      </button>
    </div>
  </div>
);

export default RecommendationCard;
