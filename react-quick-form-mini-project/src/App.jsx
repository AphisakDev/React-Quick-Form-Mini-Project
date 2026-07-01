// Main App component coordinating global state and page layout
import React, { useState } from 'react';
import SurveyForm from './components/SurveyForm';
import SurveySummary from './components/SurveySummary';
import { movies } from './constants/movies';
import { validateForm } from './utils/validation';

function App() {
  // Form input values (grouped as one logic container since they reset together)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    movie: '',
    comment: ''
  });

  // Separate validation error state (independent lifecycle; cleared field-by-field)
  const [errors, setErrors] = useState({});

  // Dynamic screen control state
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Field change handler (also clears the error for that field as the user type)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const nextErrors = { ...prev };
        delete nextErrors[name];
        return nextErrors;
      });
    }
  };

  // Submission handler running the validation function
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);
    }
  };

  // State reset logic (resets form fields and validation errors)
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      movie: '',
      comment: ''
    });
    setErrors({});
  };

  // Restart logic (resets state and returns user back to the form page)
  const handleRestart = () => {
    handleReset();
    setIsSubmitted(false);
  };

  return (
    <div className="flex items-center justify-center p-4 sm:p-6 min-h-screen">
      <div className="w-full max-w-lg bg-gray-950/80 backdrop-blur-xl border border-gray-800/80 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 animate-fadeIn">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2 bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-indigo-500/10">
            🎬 Movie Survey Form
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300">
            Quick Form Mini Project
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Vite + React (JavaScript) & Tailwind CSS
          </p>
        </div>

        {/* Dynamic Display */}
        {!isSubmitted ? (
          <SurveyForm
            formData={formData}
            errors={errors}
            movies={movies}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onReset={handleReset}
          />
        ) : (
          <SurveySummary
            formData={formData}
            movies={movies}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}

export default App;
