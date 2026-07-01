// Component representing the survey form UI
import React from 'react';
import TextField from './TextField';
import MovieList from './MovieList';

const SurveyForm = ({ formData, errors, onChange, onSubmit, onReset, movies }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <TextField
        label="ชื่อ - นามสกุล"
        name="name"
        value={formData.name}
        onChange={onChange}
        error={errors.name}
        type="text"
      />

      <TextField
        label="อีเมล"
        name="email"
        value={formData.email}
        onChange={onChange}
        error={errors.email}
        type="email"
      />

      <MovieList
        movies={movies}
        value={formData.movie}
        onChange={onChange}
        error={errors.movie}
      />

      <div className="mb-4">
        <label htmlFor="comment" className="block text-sm font-semibold text-gray-300 mb-1.5">
          ความคิดเห็นเพิ่มเติม (ไม่บังคับ)
        </label>
        <textarea
          id="comment"
          name="comment"
          rows="3"
          value={formData.comment}
          onChange={onChange}
          className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700 text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-200 hover:border-gray-600 focus:border-indigo-500 placeholder-gray-500 resize-none"
          placeholder="บอกเราเพิ่มเติมเกี่ยวกับภาพยนตร์ที่คุณเลือก..."
        />
      </div>

      <div className="flex gap-4 pt-4">
        <button
          type="button"
          onClick={onReset}
          className="flex-1 px-4 py-3 bg-gray-800 text-gray-300 font-semibold rounded-xl border border-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-200 cursor-pointer text-center"
        >
          รีเซ็ต
        </button>
        <button
          type="submit"
          className="flex-1 px-4 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500/50 shadow-lg shadow-indigo-600/30 transition-all duration-200 cursor-pointer text-center"
        >
          ส่งแบบสำรวจ
        </button>
      </div>
    </form>
  );
};

export default SurveyForm;
