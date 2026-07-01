// Reusable text input component
import React from 'react';

const TextField = ({ label, name, value, onChange, error, type = 'text' }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-semibold text-gray-300 mb-1.5">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 bg-gray-900/60 border text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-200 ${
          error
            ? 'border-red-500/80 ring-2 ring-red-500/10 focus:border-red-500 focus:ring-red-500/30'
            : 'border-gray-700 hover:border-gray-600 focus:border-indigo-500'
        }`}
      />
      {error && (
        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1.5 font-medium animate-fadeIn">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

export default TextField;
