// Component to render movie selection list using RadioGroup
import React from 'react';
import RadioGroup from './RadioGroup';

const MovieList = ({ movies, value, onChange, error }) => {
  return (
    <div className="mb-5">
      <label className="block text-sm font-semibold text-gray-300 mb-2">
        เลือกภาพยนตร์ที่คุณชอบที่สุด
      </label>
      <RadioGroup
        options={movies}
        name="movie"
        value={value}
        onChange={onChange}
        error={error}
      />
    </div>
  );
};

export default MovieList;
