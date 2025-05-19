import React, { useState } from 'react';
import { getRecommendations } from '../utils/recommend';
import RecommendationCard from '../components/RecommendationCard';
import FormInput from '../components/form/FormInput';
import FormSelect from '../components/form/FormSelect';

const UserForm = () => {
  const [form, setForm] = useState({
    age: '',
    gender: '',
    weight: '',
    height: '',
    activity: '',
    goal: '',
    condition: '',
  });

  const [result, setResult] = useState(null);

  const bmi = () => {
    const h = form.height / 100;
    return form.weight && form.height ? (form.weight / (h * h)).toFixed(1) : '';
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const rec = getRecommendations(form);
    setResult(rec);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-green-50 to-white p-4 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl p-8 md:p-10 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700">
          INPUT YOUR INFORMATION
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Age"
          />
          <FormSelect
            name="gender"
            value={form.gender}
            onChange={handleChange}
            options={['male', 'female']}
            placeholder="Gender"
          />
  
          <FormInput
            type="number"
            name="weight"
            value={form.weight}
            onChange={handleChange}
            placeholder="Weight (kg)"
          />
          <FormInput
            type="number"
            name="height"
            value={form.height}
            onChange={handleChange}
            placeholder="Height (cm)"
          />
  
          <FormSelect
            name="activity"
            value={form.activity}
            onChange={handleChange}
            placeholder="Activity Level"
            options={['bedridden', 'light', 'active', 'very-active']}
          />
  
          <FormSelect
            name="goal"
            value={form.goal}
            onChange={handleChange}
            placeholder="Goal"
            options={['lose', 'maintain', 'gain']}
          />
  
          <FormSelect
            name="condition"
            value={form.condition}
            onChange={handleChange}
            placeholder="Medical Condition"
            options={['none', 'diabetes', 'hypertension']}
          />
        </div>
  
        <p className="text-center text-green-700 font-medium">
          <strong>BMI:</strong> {bmi()}
        </p>
  
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition"
          >
            Get Recommendations
          </button>
        </div>
  
        {result && (
          <div className="printable">
            <RecommendationCard result={result} onReset={() => setResult(null)} />
          </div>
        )}
      </div>
    </div>
  );
  
};

export default UserForm;
