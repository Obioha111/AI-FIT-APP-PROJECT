const RecommendationCard = ({ result, onReset }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl p-6 sm:p-10">
      <h3 className="text-2xl sm:text-3xl font-bold text-brand text-center mb-8">
        Your Recommendations
      </h3>

      {/* Section Cards */}
      {[
        { title: "Meal Timing", data: result.foodTiming, img: "/images/meal.png", type: "list" },
        { title: "Workouts", data: result.workouts, img: "/images/workout.png", type: "list" },
        { title: "Diet Tips", data: result.dietTips, img: "/images/tips.png", type: "list" },
      ].map(
        (section, idx) =>
          section.data?.length > 0 && (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white shadow-md rounded-2xl p-4 mb-6"
            >
              {/* Image */}
              <img
                src={section.img}
                alt={section.title}
                className="w-20 h-20 object-cover rounded-xl"
              />

              {/* Text */}
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-brand mb-1">
                  {section.title}
                </h4>
                {section.type === "list" ? (
                  <ul className="text-gray-700 list-disc list-inside text-sm sm:text-base">
                    {section.data.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 text-sm sm:text-base">{section.data}</p>
                )}
              </div>
            </div>
          )
      )}

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
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
